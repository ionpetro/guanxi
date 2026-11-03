// Independent acceptance checks for learning behavior, not implementation shape.
const test = require('node:test');
const assert = require('node:assert/strict');
const {Engine:E} = require('../../app/src/engine.js');

test('tone marks and numbered pinyin express the same answer, including joined words',()=>{
  for(const [marked,numeric] of [['nǐ hǎo','ni3 hao3'],['gāoxìng','gao1xing4'],['Shēnzhèn','shen1zhen4'],['nǚ','nv3'],['lǜ','lu:4'],['xièxie','xie4xie5'],['qǐng wèn','qing3 wen4']]) {
    assert.equal(E.acceptsPinyin(marked,numeric),true,`${marked} / ${numeric}`);
    assert.equal(E.acceptsPinyin(marked.normalize('NFD'),numeric),true,'decomposed Unicode must work');
  }
  assert.equal(E.acceptsPinyin('mǎi','mai4'),false,'buy and sell differ');
  assert.equal(E.acceptsPinyin('nǚ','nu3'),false,'ü and u differ');
});

test('early correct recall keeps the scheduled date; a miss returns tomorrow',()=>{
  const s=E.freshState(); E.learn(s,'sample','2026-11-01');
  E.grade(s,'sample',true,'2026-11-02');
  const due=s.items.sample.due,box=s.items.sample.box;
  E.grade(s,'sample',true,'2026-11-03');
  assert.equal(s.items.sample.due,due);assert.equal(s.items.sample.box,box);
  E.grade(s,'sample',false,'2026-11-03');
  assert.equal(s.items.sample.box,1);assert.equal(s.items.sample.due,'2026-11-04');
});

test('scenario answer position changes while its explanation stays attached',()=>{
  const item={id:'qa-scene',kind:'scenario',status:'general',say:'check',q:'which?',scene:'test',answer:0,options:[{text:'correct',why:'right reasoning'},{text:'wrong one',why:'first error'},{text:'wrong two',why:'second error'}]};
  const positions=new Set();
  for(let seed=1;seed<=30;seed++) {
    const q=E.question(item,E.rng(seed*7919));positions.add(q.answer);
    assert.equal(q.options[q.answer].text,'correct');assert.equal(q.options[q.answer].why,'right reasoning');
  }
  assert.ok(positions.size>1,'always-first answers teach position, not language');
});
