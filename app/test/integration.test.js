const test = require('node:test');
const assert = require('node:assert/strict');
const {loadUnits} = require('../src/course.js');
const {Engine:E} = require('../src/engine.js');
const units=loadUnits(), ix=E.indexCourse(units);

test('the complete course retains a substantial path, speaking missions and separate transfer tasks',()=>{
 assert.equal(units.length,14);
 assert.equal(ix.lessons.length,70);
 assert.ok([...ix.items.values()].filter(i=>['word','character'].includes(i.kind)).length>=400);
 for(const u of units){
  assert.equal(u.lessons.length,5,u.id);
  assert.ok(u.assessment.length>=2,`${u.id}: held-out transfer tasks`);
  for(const a of u.assessment)assert.ok(a.transfer&&a.kind==='scenario');
  for(const l of u.lessons){
   assert.ok(l.scene&&l.mission,`${l.id}: situated speaking task`);
   assert.ok(l.items.some(i=>i.kind==='sentence'),`${l.id}: sentence production`);
   assert.ok(l.items.some(i=>i.kind==='scenario'),`${l.id}: transfer in context`);
  }
 }
});

test('all sittings across twenty seeds expose every intended item with valid, bounded questions',()=>{
 for(const l of ix.lessons){
  const sittings=E.lessonSittings(ix,l.id);
  assert.deepEqual(sittings.flat(),l.items.map(i=>i.id),`${l.id}: items lost or duplicated`);
  assert.ok(sittings.every(s=>s.length>=3&&s.length<=5),`${l.id}: unbalanced sitting lengths ${sittings.map(s=>s.length)}`);
  for(let seed=1;seed<=20;seed++) for(let j=0;j<sittings.length;j++){
   const steps=E.buildLesson(ix,E.freshState(),l.id,seed,j);
   assert.ok(steps.length>=5&&steps.length<=24,`${l.id} sitting ${j}: unbounded step count`);
   for(const id of sittings[j])assert.ok(steps.some(s=>s.itemId===id&&s.type!=='teach'&&!s.guess),`${id}: no actual retrieval`);
   for(const q of steps){
    if(q.type==='choice'){
     assert.ok(q.options.includes(q.answer),q.itemId);
     assert.equal(new Set(q.options.map(E.norm)).size,q.options.length,q.itemId);
    }
    if(q.type==='scenario')assert.ok(q.options[q.answer]?.why,q.itemId);
    if(q.type==='tiles')for(const token of new Set(q.answer))assert.ok(q.tiles.filter(t=>t.hanzi===token).length>=q.answer.filter(t=>t===token).length,q.itemId);
    if(q.transfer)assert.ok(!steps.some(s=>s.itemId===q.itemId&&s.type==='teach'),`${q.itemId}: transfer answer pre-taught`);
   }
  }
 }
});

test('held-out tasks never leak into ordinary daily, speed or due-review pools even after import',()=>{
 const s=E.freshState();
 for(const [id]of ix.items)E.learn(s,id,'2026-11-01');
 for(const q of [...E.buildDaily(ix,s,'2026-11-03'),...E.buildReview(ix,s,'2026-11-03',8,9999),...E.buildSpeed(ix,s,'2026-11-03',9)])assert.ok(!ix.assessmentItems.has(q.itemId),q.itemId);
 for(const u of units){const qs=E.buildAssessment(ix,s,u.id,18);assert.equal(qs.length,u.assessment.length,u.id);for(const q of qs)assert.ok(ix.assessmentItems.has(q.itemId),q.itemId);}
});
