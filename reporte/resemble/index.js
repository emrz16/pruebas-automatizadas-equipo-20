const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { viewportHeight, viewportWidth, browsers, options } = config;

async function executeTest(){
    let resultCypress = await cypressAnalysis();
    let resultKraken = await krakenAnalysis();
    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    fs.writeFileSync(`./results/report.html`, createReport(resultCypress, resultKraken));
    fs.copyFileSync('./index.css', `./results/index.css`);
    return;
  }
  (async ()=>console.log(await executeTest()))();

async function krakenAnalysis(){
    let resultInfoKraken = {}
    let listFolderKraken = fs.readdirSync(config.folderKraken);
    let escenarioAlreadyUsed= [];
    if (!fs.existsSync(`${config.resultsFolderKraken}`)){
      fs.mkdirSync(`${config.resultsFolderKraken}`, { recursive: true });
    }
    for(let folder of listFolderKraken){
      let ghostVersion = folder.split("_")[1];
      let escenario = folder.split("_")
        .filter(word => !["v5", "v3", "ghost"].includes(word))
        .join("_");
      if(escenarioAlreadyUsed.includes(escenario)) continue;
      escenarioAlreadyUsed.push(escenario);
      console.log(escenario);
      if(resultInfoKraken[escenario] === undefined){
        resultInfoKraken[escenario] = {};
      }
      let folderBefore = config.folderKraken + "/" + "ghost_v5_";
      let folderAfter = config.folderKraken + "/" + "ghost_v3_";
      let listImageKrakenBefore = fs.readdirSync(folderBefore + escenario + "/screenshots/");
      let listImageKrakenAfter = fs.readdirSync(folderAfter + escenario + "/screenshots/");
      for(let i = 0;i<listImageKrakenBefore.length;i++){
          let pathImageBefore = `${folderBefore}${escenario}/screenshots/${listImageKrakenBefore[i]}`;
          let pathImageAfter = `${folderAfter}${escenario}/screenshots/${listImageKrakenAfter[i]}`;
          if(!fs.existsSync(pathImageBefore) || !fs.existsSync(pathImageAfter)){
            console.log("-----------------------------------");
            console.log("Hay un archivo inexistente" + pathImageBefore);
            continue;
          }
          fs.copyFileSync(pathImageBefore, `${config.resultsFolderKraken}/before-${listImageKrakenBefore[i]}`);
          fs.copyFileSync(pathImageAfter, `${config.resultsFolderKraken}/after-${listImageKrakenAfter[i]}`);
          const data = await compareImages(
                fs.readFileSync(pathImageBefore),
                fs.readFileSync(pathImageAfter),
                options
              );
          resultInfoKraken[escenario][i] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime,
            imageBefore: listImageKrakenBefore[i],
            imageAfter: listImageKrakenAfter[i]
          }
          fs.writeFileSync(`${config.resultsFolderKraken}/compare-${listImageKrakenBefore[i]}`, data.getBuffer());
        }
        console.log(JSON.stringify(resultInfoKraken))
          
    }
    return resultInfoKraken;
}


async function cypressAnalysis(){
  var listFolderFilesCypressBefore = fs.readdirSync(config.folderCypressBefore);
  var listFolderFilesCypressAfter = fs.readdirSync(config.folderCypressAfter);
  let resultInfo = {}
  // Primer nivel de folder
  for(var i = 0 ; i<listFolderFilesCypressBefore.length;i++){
      listSubfolders = {};
      listSubfolders[listFolderFilesCypressBefore[i]] = fs.readdirSync(config.folderCypressBefore + "/" +listFolderFilesCypressBefore[i]);
      resultInfo[listFolderFilesCypressBefore[i]] = {};
      // Segundo nivel de folder  
      for(var subfolder of listSubfolders[listFolderFilesCypressBefore[i]]){
        listSubfolders[listFolderFilesCypressBefore[i]][subfolder] = fs.readdirSync(
          config.folderCypressBefore + "/" +listFolderFilesCypressBefore[i] + "/" +subfolder
          );
        resultInfo[listFolderFilesCypressBefore[i]][subfolder] = {};
        // Imagenes
        for(var image of listSubfolders[listFolderFilesCypressBefore[i]][subfolder]){
          let pathImageBefore = `${config.folderCypressBefore}/${listFolderFilesCypressBefore[i]}/${subfolder}/${image}`;
          let pathImageAfter = `${config.folderCypressAfter}/${listFolderFilesCypressAfter[i]}/${subfolder}/${image}`;
          
          if(!fs.existsSync(pathImageBefore) || !fs.existsSync(pathImageAfter)){
            console.log("-----------------------------------");
            console.log("Hay un archivo inexistente" + pathImageBefore);
            continue;
          }
          if (!fs.existsSync(`${config.resultsFolderCypress}`)){
              fs.mkdirSync(`${config.resultsFolderCypress}`, { recursive: true });
            }
          fs.copyFileSync(pathImageBefore, `${config.resultsFolderCypress}/before-${image}`);
          fs.copyFileSync(pathImageAfter, `${config.resultsFolderCypress}/after-${image}`);
          const data = await compareImages(
            fs.readFileSync(pathImageBefore),
            fs.readFileSync(pathImageAfter),
            options
          );
          resultInfo[listFolderFilesCypressBefore[i]][subfolder][image] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime,
            imageName: image
          }
          console.log(pathImageBefore);
          console.log(pathImageAfter);
          console.log(image);
          console.log(data.misMatchPercentage);
          fs.writeFileSync(`${config.resultsFolderCypress}/compare-${image}`, data.getBuffer());
        }
      }
      
  }
  return resultInfo;
}

function createReport(cypressInfo, krakenInfo){
  let datetime = new Date().toISOString().replace(/:/g,".");
  return `
  <html>
      <head>
          <title> VRT Report </title>
          <link href="index.css" type="text/css" rel="stylesheet">
      </head>
      <body>
          <h1>Report for 
               <a href="${config.url}"> ${config.url}</a>
          </h1>
          <p>Executed: ${datetime}</p>
          <h2>Cypress</h2>
          ${Object.keys(cypressInfo).map(escenario=>{
            return `
            <h2 id="${escenario}">Escenario : ${escenario}</h2>
            <div id="visualizer">
              ${subEscec(cypressInfo[escenario])}
            </div>
            `
          })}

          <h2>Kraken</h2>
          ${Object.keys(krakenInfo).map(escenario=>{
            return `
            <h2 id="${escenario}">${escenario}</h2>
            <div id="visualizer">
              ${Object.keys(krakenInfo[escenario]).map(image => {
                return imagesCompareKraken(krakenInfo[escenario][image], "kraken");
              })}
            </div>
            `
          })}
          
      </body>
  </html>`
}

function indexPage(info){
  return `<p>Indice Escenarios</p>
    <ul>
      ${Object.keys(info).map(escenario=>{
        return `
          <li><a href="#${escenario}">${escenario}</a></li>
        `
      })}
    </ul>`
}

function subEscec(info){
  return  Object.keys(info).map(
      subescec => {
        return `<h3>${subescec}</h3>
        ${Object.keys(info[subescec]).map(image => {
          return `${imagesCompareCypress(info[subescec][image], "cypress")}
        }`
        })}   
        
        `
      }
    )
    
}


function imagesCompareCypress(info, system){
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h3>Imagen: ${info.imageName}</h3>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="${system}/before-${info.imageName}" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="${system}/after-${info.imageName}" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="${system}/compare-${info.imageName}" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function imagesCompareKraken(info, system){
  return `<div class=" browser" id="test0">
  <div class=" btitle">
      <h3>Imagen: ${info.imageBefore}</h3>
      <p>Data: ${JSON.stringify(info)}</p>
  </div>
  <div class="imgline">
    <div class="imgcontainer">
      <span class="imgname">Reference</span>
      <img class="img2" src="${system}/before-${info.imageBefore}" id="refImage" label="Reference">
    </div>
    <div class="imgcontainer">
      <span class="imgname">Test</span>
      <img class="img2" src="${system}/after-${info.imageAfter}" id="testImage" label="Test">
    </div>
  </div>
  <div class="imgline">
    <div class="imgcontainer">
      <span class="imgname">Diff</span>
      <img class="imgfull" src="${system}/compare-${info.imageBefore}" id="diffImage" label="Diff">
    </div>
  </div>
</div>`
}

