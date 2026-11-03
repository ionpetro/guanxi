// Guanxi's pure learning engine. No browser APIs or external services.
const Engine = (() => {
  const KINDS = ['word','sentence','tone','character','grammar','culture','scenario','pairs','sort'];
  const INTERVALS = [1,3,7,14,30,60];
  const GOALS = [10,20,30];
  const RANKS = [
    {name:'New arrival',xp:0},{name:'Curious visitor',xp:100},{name:'Familiar face',xp:300},
    {name:'Good listener',xp:650},{name:'Trusted collaborator',xp:1100},{name:'Bridge builder',xp:1800}
  ];
  const BADGES = [
    {id:'first_step',name:'First step',hint:'Finish a lesson'},
    {id:'five_lessons',name:'Finding a rhythm',hint:'Finish five lessons'},
    {id:'first_review',name:'Remembered it',hint:'Finish a review'},
    {id:'week',name:'One week together',hint:'Reach a seven-day streak'},
    {id:'halfway',name:'Across the city',hint:'Finish 35 lessons'},
    {id:'all_lessons',name:'Return to Shenzhen',hint:'Finish all lessons'},
    {id:'scenario',name:'Thoughtful choice',hint:'Finish a field assessment'}
  ];
  const pad = n => String(n).padStart(2,'0');
  function dayKey(d = new Date()) { return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; }
  function parseDay(k) { const m = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.exec(String(k||'')); return m ? new Date(+m[1],+m[2]-1,+m[3],12) : new Date(NaN); }
  function addDays(k,n) { const d=parseDay(k); d.setDate(d.getDate()+n); return dayKey(d); }
  function daysBetween(a,b) { return Math.round((parseDay(b)-parseDay(a))/86400000); }
  function weekKey(k) { const d=parseDay(k); d.setDate(d.getDate()-((d.getDay()+6)%7)); return dayKey(d); }
  function missedWeekdays(a,b) { let n=0; for(let k=addDays(a,1); k<b; k=addDays(k,1)) { const d=parseDay(k).getDay(); if(d!==0&&d!==6)n++; } return n; }
  function freshState() { return {v:2,onboarded:false,name:'',goal:10,theme:'auto',voice:'',slow:false,xp:0,days:{},streak:0,bestStreak:0,lastDay:null,freezes:1,freezeWeek:null,done:{},sittings:{},items:{},mistakes:{},daily:{},speedBest:0,reviewSessions:0,revisits:{},assessments:[],badges:{},answered:0,correct:0,updatedAt:0}; }
  function repairState(raw) {
    const s=freshState(); if(!raw||typeof raw!=='object'||Array.isArray(raw))return s;
    for(const key of ['onboarded','name','goal','theme','voice','slow','xp','streak','bestStreak','lastDay','freezes','freezeWeek','speedBest','reviewSessions','answered','correct','updatedAt']) if(Object.hasOwn(raw,key))s[key]=raw[key];
    for(const key of ['days','done','sittings','revisits','items','mistakes','daily','badges']) if(raw[key]&&typeof raw[key]==='object'&&!Array.isArray(raw[key]))s[key]=raw[key];
    if(Array.isArray(raw.assessments))s.assessments=raw.assessments.slice(-100);
    s.v=2; s.goal=GOALS.includes(s.goal)?s.goal:10; s.xp=Math.max(0,Number(s.xp)||0); s.freezes=Math.min(2,Math.max(0,Number(s.freezes)||0));
    s.streak=Math.max(0,Number(s.streak)||0); s.bestStreak=Math.max(s.streak,Number(s.bestStreak)||0);
    if(!['auto','light','dark'].includes(s.theme))s.theme='auto';
    if(typeof s.voice!=='string')s.voice='';
    if(typeof s.name!=='string')s.name='';
    if(!/^\d{4}-\d{2}-\d{2}$/.test(s.lastDay||''))s.lastDay=null;
    if(!/^\d{4}-\d{2}-\d{2}$/.test(s.freezeWeek||''))s.freezeWeek=null;
    for(const [id,card] of Object.entries(s.items)){
      if(!card||typeof card!=='object'||!Number.isInteger(card.box)||card.box<1||card.box>6||!/^\d{4}-\d{2}-\d{2}$/.test(card.due||'')){delete s.items[id];continue;}
      card.right=Math.max(0,Number(card.right)||0);card.wrong=Math.max(0,Number(card.wrong)||0);
    }
    for(const [day,xp] of Object.entries(s.days))if(!/^\d{4}-\d{2}-\d{2}$/.test(day)||!Number.isFinite(Number(xp))||Number(xp)<0)delete s.days[day];
    for(const [id,n] of Object.entries(s.revisits))if(!Number.isInteger(n)||n<0)delete s.revisits[id];
    s.reviewSessions=Math.max(0,Number(s.reviewSessions)||0);
    return s;
  }
  function touchStreak(s,today) {
    const out={advanced:false,usedFreeze:0,reset:false}; const wk=weekKey(today);
    if(s.freezeWeek!==wk){s.freezeWeek=wk;s.freezes=Math.max(1,s.freezes||0);}
    if(s.lastDay===today)return out;
    if(!s.lastDay||s.lastDay>today)s.streak=1;
    else {const gap=missedWeekdays(s.lastDay,today); if(gap>(s.freezes||0)){s.streak=1;out.reset=true;}else{s.streak++;s.freezes-=gap;out.usedFreeze=gap;}}
    out.advanced=true;s.lastDay=today;s.bestStreak=Math.max(s.bestStreak,s.streak);
    if(s.streak%7===0)s.freezes=Math.min(2,s.freezes+1);
    return out;
  }
  function liveStreak(s,today) { if(!s.lastDay)return 0; return s.lastDay===today||missedWeekdays(s.lastDay,today)<=s.freezes?s.streak:0; }
  function addXp(s,today,n){n=Math.max(0,Math.round(n)); s.xp+=n;s.days[today]=(Number(s.days[today])||0)+n;}
  function rankOf(s){let rank=RANKS[0];for(const r of RANKS)if(s.xp>=r.xp)rank=r;return {rank,next:RANKS[RANKS.indexOf(rank)+1]||null};}
  function indexCourse(units){
    const course=(units||[]).filter(u=>u&&u.id&&u.id!=='u0_example').slice().sort((a,b)=>Number(a.id.slice(1))-Number(b.id.slice(1)));
    const lessons=[],items=new Map(),assessmentItems=new Map(),lessonById=new Map(),unitById=new Map(),location=new Map();
    for(const unit of course){unitById.set(unit.id,unit);for(const it of unit.assessment||[]){assessmentItems.set(it.id,it);items.set(it.id,it);location.set(it.id,{unit,lesson:null});}for(const lesson of unit.lessons||[]){lessons.push(lesson);lessonById.set(lesson.id,lesson);for(const it of lesson.items||[]){items.set(it.id,it);location.set(it.id,{unit,lesson});}}}
    return {units:course,lessons,items,assessmentItems,lessonById,unitById,location};
  }
  function norm(s){return String(s??'').normalize('NFC').toLowerCase().replace(/[’']/g,'').replace(/[^\p{L}\p{N}]+/gu,' ').trim().replace(/\s+/g,' ');}
  const MARKS={'ā':['a',1],'á':['a',2],'ǎ':['a',3],'à':['a',4],'ē':['e',1],'é':['e',2],'ě':['e',3],'è':['e',4],'ī':['i',1],'í':['i',2],'ǐ':['i',3],'ì':['i',4],'ō':['o',1],'ó':['o',2],'ǒ':['o',3],'ò':['o',4],'ū':['u',1],'ú':['u',2],'ǔ':['u',3],'ù':['u',4],'ǖ':['v',1],'ǘ':['v',2],'ǚ':['v',3],'ǜ':['v',4]};
  function pinyinKey(s){
    const input=String(s||'').normalize('NFC').toLowerCase().replace(/u:/g,'v').replace(/ü/g,'v');
    let letters='',start=0;const marks=new Map();
    const markedPosition=(part)=>{
      const a=part.indexOf('a');if(a>=0)return a;
      const e=part.indexOf('e');if(e>=0)return e;
      const ou=part.indexOf('ou');if(ou>=0)return ou;
      for(let i=part.length-1;i>=0;i--)if('aeiouv'.includes(part[i]))return i;
      return Math.max(0,part.length-1);
    };
    for(const ch of input){
      if(MARKS[ch]){marks.set(letters.length,MARKS[ch][1]);letters+=MARKS[ch][0];}
      else if(/[a-zv]/.test(ch))letters+=ch;
      else if(/[1-5]/.test(ch)){if(ch!=='5'&&letters.length>start){const pos=start+markedPosition(letters.slice(start));marks.set(pos,Number(ch));}start=letters.length;}
      else if(/\s|'|-/.test(ch))start=letters.length;
    }
    return letters+'|'+[...marks].sort((a,b)=>a[0]-b[0]).map(([pos,tone])=>pos+':'+tone).join(',');
  }
  function acceptsPinyin(expected,typed){return pinyinKey(expected)===pinyinKey(typed);}
  function rng(seed=1){let n=(Number(seed)||1)>>>0;return ()=>((n=(Math.imul(1664525,n)+1013904223)>>>0)/4294967296);}
  function shuffle(xs,r=Math.random){const a=xs.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
  function uniqueOptions(answer,distractors){const out=[answer],seen=new Set([norm(answer)]);for(const d of distractors||[]){const k=norm(d);if(k&&!seen.has(k)){out.push(d);seen.add(k);}}return out;}
  function question(it,r=Math.random,mode='lesson'){
    const base={itemId:it.id,kind:it.kind,label:mode==='review'?'Recall':mode==='guess'?'First guess':mode==='transfer'?'Try it in a new scene':'Practice',say:it.say||'',src:it.src||'',status:it.status||'general',note:it.note||'',hook:it.hook||''};
    if(it.kind==='word'||it.kind==='character'){
      const options=uniqueOptions(it.meaning,it.distractors);return {...base,type:'choice',prompt:'What does this mean?',hanzi:it.hanzi,pinyin:it.pinyin,meaning:it.meaning,options:shuffle(options,r),answer:it.meaning,explain:it.say};
    }
    if(it.kind==='tone')return {...base,type:'tone',prompt:'Listen to the syllable. Which tone do you hear?',hanzi:it.hanzi,pinyin:it.pinyin,meaning:it.meaning,answer:it.tone,options:[1,2,3,4,0],explain:it.note||it.say};
    if(it.kind==='sentence'){const good=[];for(const tile of it.tiles||[]){if(/^[\p{P}\p{Z}]+$/u.test(tile.hanzi)&&good.length)good[good.length-1]={...good[good.length-1],hanzi:good[good.length-1].hanzi+tile.hanzi};else good.push({...tile});}return {...base,type:'tiles',prompt:it.meaning,hanzi:it.hanzi,pinyin:it.pinyin,meaning:it.meaning,tiles:shuffle([...good,...(it.distractors||[])].map((tile,i)=>({...tile,key:i})),r),answer:good.map(t=>t.hanzi),explain:it.say,transfer:!!it.transfer};}
    if(it.kind==='grammar'||it.kind==='culture'){const q=it.quiz||{};return {...base,type:'choice',prompt:q.q||it.title,title:it.title,options:shuffle(q.options||[],r),answer:q.answer,explain:q.why||it.say};}
    if(it.kind==='scenario'){const options=shuffle((it.options||[]).map((o,i)=>({...o,original:i})),r);return {...base,type:'scenario',prompt:it.q,title:it.title,scene:it.scene,options,answer:options.findIndex(o=>o.original===it.answer),explain:it.say,phrase:it.phrase,transfer:true};}
    if(it.kind==='pairs')return {...base,type:'match',prompt:it.title,title:it.title,pairs:shuffle((it.pairs||[]).map((p,i)=>({...p,key:i})),r),explain:it.say};
    if(it.kind==='sort')return {...base,type:'sort',prompt:it.q||it.title,title:it.title,buckets:it.buckets,entries:shuffle((it.entries||[]).map((e,i)=>({...e,key:i})),r),explain:it.say};
    return null;
  }
  function teachable(it){return !it.transfer&&it.kind!=='scenario';}
  function quizzable(it){return it&&it.status!=='unsure'&&KINDS.includes(it.kind);}
  function lessonSittings(ix,lessonId){const lesson=ix.lessonById.get(lessonId);if(!lesson)return[];const items=lesson.items||[],n=Math.ceil(items.length/5),chunks=[];let at=0;for(let i=0;i<n;i++){const size=Math.ceil((items.length-at)/(n-i));chunks.push(items.slice(at,at+size).map(x=>x.id));at+=size;}return chunks;}
  function buildLesson(ix,s,lessonId,seed=1,sitting=0){
    const ids=lessonSittings(ix,lessonId)[sitting]||[], r=rng(seed),steps=[];let typedAdded=false;
    for(let i=0;i<ids.length;i++){
      const it=ix.items.get(ids[i]);if(!it)continue;
      if(i===0&&teachable(it))steps.push({...question(it,r,'guess'),guess:true});
      if(teachable(it))steps.push({type:'teach',itemId:it.id,kind:it.kind});
      const q=question(it,r,it.transfer?'transfer':'lesson');if(q)steps.push(q);if(!typedAdded&&['word','character'].includes(it.kind)&&!it.transfer){steps.push({type:'pinyin',itemId:it.id,kind:it.kind,label:'Write the sound',prompt:'Type the pinyin with tone marks or tone numbers',hanzi:it.hanzi,answer:it.pinyin,say:it.say,note:it.note||''});typedAdded=true;}
      // Immediate retrieval, separated by another card where possible.
      if(i>=1){const prev=ix.items.get(ids[i-1]);if(prev&&quizzable(prev))steps.push({...question(prev,r,'review'),retrieval:true});}
    }
    return steps;
  }
  function learn(s,id,today){if(!s.items[id])s.items[id]={box:1,due:addDays(today,1),right:0,wrong:0};}
  function grade(s,id,correct,today){
    if(!id)return;const pre=s.items[id];const due=!!pre&&pre.due<=today;learn(s,id,today);const card=s.items[id];
    if(correct){card.right++;if(due)card.box=Math.min(6,card.box+1);}
    else{card.wrong++;card.box=1;s.mistakes[id]=(Number(s.mistakes[id])||0)+1;}
    if(!correct||due||!pre)card.due=addDays(today,INTERVALS[card.box-1]);s.answered++;if(correct)s.correct++;
  }
  function dueItems(s,today){return Object.entries(s.items).filter(([,v])=>v&&v.due<=today).sort((a,b)=>a[1].due.localeCompare(b[1].due)).map(([id])=>id);}
  function learned(ix,s){return Object.keys(s.items).filter(id=>ix.items.has(id)&&!ix.assessmentItems.has(id)&&quizzable(ix.items.get(id)));}
  function fallback(ix){const first=ix.lessons[0];return first?(first.items||[]).filter(quizzable).map(x=>x.id):[];}
  function pool(ix,s,today,dueOnly=false){const ids=dueOnly?dueItems(s,today).filter(id=>ix.items.has(id)&&!ix.assessmentItems.has(id)&&quizzable(ix.items.get(id))):learned(ix,s);return ids.length?ids:(dueOnly?[]:fallback(ix));}
  function fromIds(ix,ids,seed,mode,limit){const r=rng(seed);return shuffle(ids,r).slice(0,limit).map(id=>question(ix.items.get(id),r,mode)).filter(Boolean);}
  function buildReview(ix,s,today,seed=1,limit=12){return fromIds(ix,pool(ix,s,today,true),seed,'review',limit);}
  function buildDaily(ix,s,today){const ids=pool(ix,s,today,true);const chosen=ids.length?ids:pool(ix,s,today,false);const seed=Number(today.replace(/-/g,''));return fromIds(ix,chosen,seed,'review',5);}
  function buildSpeed(ix,s,today,seed=1){return fromIds(ix,pool(ix,s,today,false).filter(id=>['word','character','tone'].includes(ix.items.get(id).kind)),seed,'review',10);}
  function buildListening(ix,s,seed=1){const r=rng(seed);return shuffle(learned(ix,s).filter(id=>['word','character'].includes(ix.items.get(id).kind)),r).slice(0,8).map(id=>({...question(ix.items.get(id),r,'review'),type:'listen',label:'Listen and understand'}));}
  function buildAssessment(ix,s,unitId,seed=1){const u=ix.unitById.get(unitId);if(!u)return[];const source=(u.assessment&&u.assessment.length?u.assessment:u.lessons.flatMap(l=>l.items||[]));const ids=source.filter(it=>it.kind==='scenario'&&quizzable(it)).map(it=>it.id);return fromIds(ix,ids,seed,'transfer',10);}
  function buildMatch(ix,s,today,seed=1){const r=rng(seed),words=[],hanzi=new Set(),meanings=new Set();for(const it of shuffle(learned(ix,s).map(id=>ix.items.get(id)).filter(it=>['word','character'].includes(it.kind)),r)){const h=norm(it.hanzi),m=norm(it.meaning);if(hanzi.has(h)||meanings.has(m))continue;hanzi.add(h);meanings.add(m);words.push(it);if(words.length===5)break;}return words.length>=3?{type:'match',itemId:null,kind:'pairs',label:'Match',prompt:'Match the words',pairs:words.map((it,i)=>({key:i,hanzi:it.hanzi,pinyin:it.pinyin,meaning:it.meaning})),say:'Match the words you have learned.'}:null;}
  function recommended(ix,s){return ix.lessons.find(l=>!s.done[l.id])||ix.lessons[0]||null;}
  function progress(ix,s){const done=ix.lessons.filter(l=>!!s.done[l.id]).length;return {done,total:ix.lessons.length,percent:ix.lessons.length?Math.round(done/ix.lessons.length*100):0,learned:learned(ix,s).length};}
  function awardBadges(ix,s,today){const p=progress(ix,s),got=[];const conditions={first_step:p.done>=1,five_lessons:p.done>=5,first_review:s.reviewSessions>0,week:s.streak>=7,halfway:p.done>=35,all_lessons:p.total>0&&p.done>=p.total,scenario:s.assessments.length>0};for(const b of BADGES)if(conditions[b.id]&&!s.badges[b.id]){s.badges[b.id]=today;got.push(b);}return got;}
  function recordLesson(ix,s,lessonId,today,perfect=false){s.done[lessonId]={at:today,perfect:!!perfect};touchStreak(s,today);addXp(s,today,10);return awardBadges(ix,s,today);}
  function recordPractice(ix,s,today,xp=5){touchStreak(s,today);addXp(s,today,xp);return awardBadges(ix,s,today);}
  function recordAssessment(ix,s,unitId,today,score,total){s.assessments.push({unitId,at:today,score,total});s.assessments=s.assessments.slice(-100);return recordPractice(ix,s,today,Math.max(5,score*2));}
  return {KINDS,INTERVALS,GOALS,RANKS,BADGES,dayKey,parseDay,addDays,daysBetween,weekKey,missedWeekdays,freshState,repairState,touchStreak,liveStreak,addXp,rankOf,indexCourse,norm,pinyinKey,acceptsPinyin,rng,shuffle,uniqueOptions,question,teachable,quizzable,lessonSittings,buildLesson,learn,grade,dueItems,learned,pool,buildReview,buildDaily,buildSpeed,buildListening,buildAssessment,buildMatch,recommended,progress,awardBadges,recordLesson,recordPractice,recordAssessment};
})();
if(typeof module!=='undefined')module.exports={Engine};
