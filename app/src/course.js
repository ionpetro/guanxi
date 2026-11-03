(function(){
  if(typeof module==='undefined')return;
  const fs=require('node:fs'),path=require('node:path');
  const DIR=path.join(__dirname,'units'),EXAMPLE='u0_example.js';
  function unitFiles({example=false}={}){return fs.existsSync(DIR)?fs.readdirSync(DIR).filter(f=>/^u\d+.*\.js$/.test(f)&&(example||f!==EXAMPLE)).sort((a,b)=>parseInt(a.slice(1))-parseInt(b.slice(1))).map(f=>path.join(DIR,f)):[];}
  function loadUnits(opts){return unitFiles(opts).map(f=>{delete require.cache[require.resolve(f)];return require(f);});}
  module.exports={unitFiles,loadUnits,UNITS_DIR:DIR,EXAMPLE};
})();
