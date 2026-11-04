const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
test('Guanxi emits lesson lifecycle events without typed answers and leaves learning functional when tracking fails',()=>{
 for(const broken of [false,true]){
  const events=[],handlers={},root={innerHTML:'',addEventListener:(type,cb)=>handlers[type]=cb};
  const {Engine:E}=require('../src/engine.js'),{loadUnits}=require('../src/course.js');
  const context={Engine:E,GUANXI_UNITS:loadUnits(),document:{getElementById:id=>id==='app'?root:null,documentElement:{dataset:{}},body:{classList:{toggle(){}}}},localStorage:{getItem:()=>null,setItem(){}},setTimeout(){},clearInterval(){},scrollTo(){},PulseAnalytics:{track:(name,props)=>{if(broken)throw Error('offline');events.push({name,props});}}};
  context.window=context;
  let source=fs.readFileSync(path.join(__dirname,'../src/app.js'),'utf8');
  source=source.replace(/  render\(\);\n\}\)\(\);\s*$/, '  window.flow = {start,recordAnswer,next,get:()=>session};\n  render();\n})();');
  vm.runInNewContext(source,context);
  context.flow.start('lesson',context.GUANXI_UNITS[0].lessons[0].id);
  let guard=0;
  while(!context.flow.get().result && guard++<250){const s=context.flow.get(),q=s.steps[s.index];if(q.type!=='teach')context.flow.recordAnswer(q,true,'DO NOT SEND THIS ANSWER');context.flow.next();}
  assert.ok(context.flow.get().result,'lesson completes');
  if(!broken){assert.equal(events[0].name,'lesson_started');assert.ok(events.some(e=>e.name==='question_answered'));assert.equal(events.at(-1).name,'lesson_completed');assert.ok(!JSON.stringify(events).includes('DO NOT SEND'));assert.equal(events.filter(e=>e.name==='lesson_completed').length,1);}
 }
});
