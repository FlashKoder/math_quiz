// script.js
// 5th class maths quiz (Hindi) — Updated with 10 chapters × 15 questions = 150 questions
(function(){
  // ---------- QUESTION BANK (10 chapters, each 15 questions) ----------
  const QUIZ_BANK = {
    "संख्याएँ": [
      {q:"दिए गए संख्या 7 और 9 का योग क्या है?", options:["16","15","17","14"], a:"16"},
      {q:"अगला पूर्णांक जो 129 के बाद आता है:", options:["130","129","128","131"], a:"130"},
      {q:"किस संख्या में 3 अंक हैं और यह 100 और 999 के बीच है?", options:["237","50","9","1000"], a:"237"},
      {q:"एक द्वि-अंकीय सम संख्या का उदाहरण कौन-सा है?", options:["48","35","57","101"], a:"48"},
      {q:"5 की एंटरग्रिटी (place value) में '5' का मान क्या है जब यह 350 में है?", options:["50","5","500","350"], a:"50"},
      {q:"संख्या 204 में शून्य की मात्रा कितनी है?", options:["1","0","2","3"], a:"1"},
      {q:"10 हजार से एक कम संख्या क्या है?", options:["9999","10000","10001","9000"], a:"9999"},
      {q:"यदि एक संख्या 2 से विभाज्य है तो वह क्या होती है?", options:["सम (even)","विषम (odd)","प्राइम","0"], a:"सम (even)"},
      {q:"7 का 10 गुना क्या है?", options:["70","17","700","7"], a:"70"},
      {q:"संख्या 305 को रिवर्स करने पर क्या बनती है?", options:["503","305","350","530"], a:"503"},
      {q:"यदि 1 दर्जन में कितने हुए?", options:["12","10","100","6"], a:"12"},
      {q:"सावधानी: 100 के निकटवर्ती दस का गुणा 100 × 3 = ?", options:["300","130","30","3"], a:"300"},
      {q:"किस संख्या को 0 से गुणा करने पर परिणाम क्या होता है?", options:["0","1","निरुप्य","वर्णन नहीं"], a:"0"},
      {q:"संख्या 999 का अगला निचला सौ का अंक क्या होगा (round down to nearest hundred)?", options:["900","990","1000","999"], a:"900"},
      {q:"दो अंकों वाली सबसे बड़ी संख्या कौन-सी है?", options:["99","100","98","90"], a:"99"}
    ],

    "जोड़ - घटाना": [
      {q:"125 + 376 = ?", options:["501","495","499","511"], a:"501"},
      {q:"1000 - 257 = ?", options:["743","753","733","763"], a:"743"},
      {q:"45 + 38 = ?", options:["83","82","84","80"], a:"83"},
      {q:"600 - 275 = ?", options:["325","335","315","345"], a:"325"},
      {q:"88 + 17 = ?", options:["105","104","103","115"], a:"105"},
      {q:"2500 - 1250 = ?", options:["1250","1200","1350","1150"], a:"1250"},
      {q:"99 + 1 = ?", options:["100","99","101","110"], a:"100"},
      {q:"430 - 127 = ?", options:["303","313","293","323"], a:"303"},
      {q:"27 + 73 = ?", options:["100","90","110","95"], a:"100"},
      {q:"500 - 499 = ?", options:["1","0","2","5"], a:"1"},
      {q:"349 + 151 = ?", options:["500","450","600","400"], a:"500"},
      {q:"720 - 205 = ?", options:["515","505","525","495"], a:"515"},
      {q:"64 + 36 = ?", options:["100","90","200","80"], a:"100"},
      {q:"100 - 58 = ?", options:["42","52","32","62"], a:"42"},
      {q:"157 + 843 = ?", options:["1000","900","999","1100"], a:"1000"}
    ],

    "गुणा - भाग": [
      {q:"7 × 8 = ?", options:["56","48","49","64"], a:"56"},
      {q:"9 × 6 = ?", options:["54","45","63","59"], a:"54"},
      {q:"12 × 12 = ?", options:["144","124","132","154"], a:"144"},
      {q:"56 ÷ 7 = ?", options:["8","7","6","9"], a:"8"},
      {q:"81 ÷ 9 = ?", options:["9","8","7","6"], a:"9"},
      {q:"25 × 4 = ?", options:["100","90","80","110"], a:"100"},
      {q:"14 × 5 = ?", options:["70","60","75","65"], a:"70"},
      {q:"100 ÷ 25 = ?", options:["4","5","2","3"], a:"4"},
      {q:"8 × 7 = ?", options:["56","55","54","49"], a:"56"},
      {q:"45 ÷ 5 = ?", options:["9","8","7","10"], a:"9"},
      {q:"15 × 3 = ?", options:["45","40","35","50"], a:"45"},
      {q:"72 ÷ 8 = ?", options:["9","8","10","6"], a:"9"},
      {q:"6 × 11 = ?", options:["66","60","56","76"], a:"66"},
      {q:"30 ÷ 6 = ?", options:["5","6","4","10"], a:"5"},
      {q:"13 × 4 = ?", options:["52","48","56","50"], a:"52"}
    ],

    "महत्तम समापवर्तक और लघुत्तम समापवर्त्य": [
      {q:"GCD(12, 18) = ?", options:["6","3","12","18"], a:"6"},
      {q:"LCM(4, 6) = ?", options:["12","10","8","24"], a:"12"},
      {q:"GCD(8, 14) = ?", options:["2","4","6","8"], a:"2"},
      {q:"LCM(3, 5) = ?", options:["15","8","10","5"], a:"15"},
      {q:"GCD(21, 14) = ?", options:["7","3","14","21"], a:"7"},
      {q:"LCM(7, 3) = ?", options:["21","10","14","7"], a:"21"},
      {q:"यदि दो संख्याएँ 9 और 12 हों, उनका GCD क्या होगा?", options:["3","6","9","12"], a:"3"},
      {q:"यदि दो संख्याएँ 10 और 15 हों, LCM क्या होगा?", options:["30","25","15","10"], a:"30"},
      {q:"GCD(16, 24) = ?", options:["8","4","16","12"], a:"8"},
      {q:"LCM(8, 12) = ?", options:["24","20","16","12"], a:"24"},
      {q:"GCD(18, 27) = ?", options:["9","3","6","18"], a:"9"},
      {q:"LCM(5, 2) = ?", options:["10","7","5","2"], a:"10"},
      {q:"GCD(14, 49) = ?", options:["7","14","49","1"], a:"7"},
      {q:"LCM(9, 6) = ?", options:["18","15","9","36"], a:"18"},
      {q:"GCD(20, 30) = ?", options:["10","5","20","30"], a:"10"}
    ],

    "भिन्नों की गुणा": [
      {q:"(1/2) × (1/3) = ?", options:["1/6","1/5","2/5","1/3"], a:"1/6"},
      {q:"(2/3) × (3/4) = ?", options:["1/2","2/7","5/6","6/7"], a:"1/2"},
      {q:"(3/5) × (5/6) = ?", options:["1/2","3/11","15/30","4/5"], a:"1/2"},
      {q:"(4/7) × (7/8) = ?", options:["1/2","11/14","28/56","4/8"], a:"1/2"},
      {q:"(2/5) × (3/10) = ?", options:["6/50","1/5","6/5","1/50"], a:"6/50"},
      {q:"(1/4) × 8 = ?", options:["2","1/2","4","8"], a:"2"},
      {q:"(3/8) × (4/9) = ?", options:["1/6","3/18","12/72","1/3"], a:"1/6"},
      {q:"(5/6) × (6/5) = ?", options:["1","6/25","11/30","5/6"], a:"1"},
      {q:"(7/10) × (10/7) = ?", options:["1","7/100","17/70","10/7"], a:"1"},
      {q:"(2/9) × (9/2) = ?", options:["1","4/9","2","9"], a:"1"},
      {q:"(3/4) × (2/3) = ?", options:["1/2","3/7","5/12","6/12"], a:"1/2"},
      {q:"(5/8) × 0 = ?", options:["0","5/8","1","8"], a:"0"},
      {q:"(1/3) × 3 = ?", options:["1","3","1/3","0"], a:"1"},
      {q:"(4/5) × (5/2) = ?", options:["2","1","4/10","5/4"], a:"2"},
      {q:"(6/7) × (7/12) = ?", options:["1/2","7/84","13/19","6/12"], a:"1/2"}
    ],

    "भिन्नों का भाग": [
      {q:"(1/2) ÷ (1/4) = ?", options:["2","1/2","4","3"], a:"2"},
      {q:"(3/4) ÷ (1/2) = ?", options:["3/2","2/3","1/2","4/3"], a:"3/2"},
      {q:"(2/3) ÷ (4/9) = ?", options:["3/2","1/2","9/8","8/9"], a:"3/2"},
      {q:"(5/6) ÷ (5/12) = ?", options:["2","1/2","5/24","12/5"], a:"2"},
      {q:"(3/5) ÷ (1/5) = ?", options:["3","5","15","1"], a:"3"},
      {q:"(4/7) ÷ (2/7) = ?", options:["2","1/2","4/2","7/2"], a:"2"},
      {q:"(2/5) ÷ (1/10) = ?", options:["4","2","1/5","10"], a:"4"},
      {q:"(9/10) ÷ (3/5) = ?", options:["3/2","6/5","3/5","1"], a:"3/2"},
      {q:"(1/6) ÷ (1/3) = ?", options:["1/2","3","2","1/18"], a:"1/2"},
      {q:"(7/8) ÷ (7/16) = ?", options:["2","1/2","16/7","7/2"], a:"2"},
      {q:"(5/9) ÷ (1/3) = ?", options:["5/3","5/27","3/5","15/9"], a:"5/3"},
      {q:"(2/7) ÷ (4/7) = ?", options:["1/2","2","4","7/2"], a:"1/2"},
      {q:"(6/11) ÷ (3/11) = ?", options:["2","1/2","11/6","3"], a:"2"},
      {q:"(8/9) ÷ (4/9) = ?", options:["2","1","4/9","8/9"], a:"2"},
      {q:"(3/10) ÷ (3/5) = ?", options:["1/10","1/2","1","1/5"], a:"1/10"}
    ],

    "दशमलव": [
      {q:"0.5 + 0.25 = ?", options:["0.75","0.7","0.8","1.0"], a:"0.75"},
      {q:"1.2 + 0.8 = ?", options:["2.0","1.0","2.2","1.8"], a:"2.0"},
      {q:"2.5 - 1.25 = ?", options:["1.25","1.0","2.0","0.75"], a:"1.25"},
      {q:"0.75 × 4 = ?", options:["3.0","2.75","3.5","4.0"], a:"3.0"},
      {q:"0.6 ÷ 3 = ?", options:["0.2","0.3","0.06","2.0"], a:"0.2"},
      {q:"3.4 - 1.1 = ?", options:["2.3","2.1","1.3","3.5"], a:"2.3"},
      {q:"0.25 × 8 = ?", options:["2.0","1.5","0.5","3.0"], a:"2.0"},
      {q:"5.0 ÷ 2 = ?", options:["2.5","2.0","3.0","1.5"], a:"2.5"},
      {q:"0.9 + 0.09 = ?", options:["0.99","0.9","0.98","1.0"], a:"0.99"},
      {q:"1.75 - 0.75 = ?", options:["1.0","0.9","0.85","2.0"], a:"1.0"},
      {q:"0.33 approx + 0.67 = ?", options:["1.0","0.99","0.0","0.33"], a:"1.0"},
      {q:"4.2 ÷ 7 = ?", options:["0.6","0.7","0.5","0.3"], a:"0.6"},
      {q:"2.25 × 4 = ?", options:["9.0","8.0","10.0","6.0"], a:"9.0"},
      {q:"0.4 + 0.6 = ?", options:["1.0","0.9","1.1","0.8"], a:"1.0"},
      {q:"3.33 - 1.33 = ?", options:["2.0","1.9","2.1","1.0"], a:"2.0"}
    ],

    "दशमलव संख्या और भिन्न": [
      {q:"0.5 को भिन्न में लिखें:", options:["1/2","5/10","1/5","2/1"], a:"1/2"},
      {q:"0.25 = ?", options:["1/4","1/3","1/2","2/5"], a:"1/4"},
      {q:"0.75 = भिन्न में ?", options:["3/4","1/4","7/10","2/3"], a:"3/4"},
      {q:"0.2 = भिन्न में ?", options:["1/5","1/2","2/5","1/10"], a:"1/5"},
      {q:"1.5 = ?", options:["3/2","1/2","15/10","5/3"], a:"3/2"},
      {q:"2.25 = भिन्न में ?", options:["9/4","2/25","2/4","4/9"], a:"9/4"},
      {q:"0.125 = ?", options:["1/8","1/4","1/16","1/2"], a:"1/8"},
      {q:"0.333 approx = सबसे निकट भिन्न ?", options:["1/3","2/3","1/4","3/4"], a:"1/3"},
      {q:"0.6 = भिन्न में ?", options:["3/5","6/10","1/5","2/3"], a:"3/5"},
      {q:"1.25 = भिन्न में ?", options:["5/4","4/5","1/4","6/5"], a:"5/4"},
      {q:"0.4 = भिन्न ?", options:["2/5","1/4","4/10","1/5"], a:"2/5"},
      {q:"0.05 = भिन्न में ?", options:["1/20","1/10","5/100","1/2"], a:"1/20"},
      {q:"2.5 = भिन्न में ?", options:["5/2","25/10","2/5","1/2"], a:"5/2"},
      {q:"0.875 = भिन्न में ?", options:["7/8","8/7","1/8","3/4"], a:"7/8"},
      {q:"0.02 = भिन्न में ?", options:["1/50","1/20","2/100","1/5"], a:"1/50"}
    ],

    "प्रतिशत": [
      {q:"10% का मतलब है 10 में से कितने हिस्से?", options:["100 में 10","10 में 1","1 में 10","1000 में 10"], a:"100 में 10"},
      {q:"50% का आधा क्या है (संख्या 100 का)?", options:["50","25","75","10"], a:"50"},
      {q:"20% of 200 = ?", options:["40","20","200","60"], a:"40"},
      {q:"25% of 400 = ?", options:["100","75","125","50"], a:"100"},
      {q:"5% of 1000 = ?", options:["50","5","500","100"], a:"50"},
      {q:"क्या 30% = 3/10? (हाँ/नहीं)", options:["हाँ","नहीं","कभी-कभी","निश्‍चित नहीं"], a:"हाँ"},
      {q:"15% of 200 = ?", options:["30","20","40","15"], a:"30"},
      {q:"100% of 45 = ?", options:["45","0","450","4.5"], a:"45"},
      {q:"1% of 300 = ?", options:["3","30","0.3","300"], a:"3"},
      {q:"75% of 80 = ?", options:["60","40","20","80"], a:"60"},
      {q:"क्या 50% बराबर है आधे के?", options:["हाँ","नहीं","37%","100%"], a:"हाँ"},
      {q:"40% of 50 = ?", options:["20","15","25","10"], a:"20"},
      {q:"60% of 50 = ?", options:["30","20","25","10"], a:"30"},
      {q:"12.5% of 80 = ?", options:["10","12","8","20"], a:"10"},
      {q:"अपनी कीमत में 10% जोड़ने पर क्या होगा (उदाहरण 200)?", options:["220","210","200","240"], a:"220"}
    ],

    "लाभ – हानि": [
      {q:"एक वस्तु 200 में खरीदी और 250 में बेची — लाभ क्या है?", options:["50","40","60","30"], a:"50"},
      {q:"लाभ प्रतिशत = (लाभ/कृय)×100; अगर क्रय 100 और लाभ 25 तो %?", options:["25%","20%","30%","15%"], a:"25%"},
      {q:"वस्तु की कीमत 500 है; 10% छूट के बाद विक्रय मूल्य क्या होगा?", options:["450","400","490","500"], a:"450"},
      {q:"यदि किसी ने 120 में खरीदा और 90 में बेचा तो क्या हुआ?", options:["नुकसान 30","लाभ 30","नुकसान 20","लाभ 20"], a:"नुकसान 30"},
      {q:"अगर क्रय = 400 और विक्रय = 480, लाभ प्रतिशत = ?", options:["20%","10%","15%","25%"], a:"20%"},
      {q:"वस्तु 800 में खरीदी; 25% लाभ पर विक्रय मूल्य = ?", options:["1000","900","800","1020"], a:"1000"},
      {q:"यदि छूट 20% है और मूल मूल्य 250, छूट = ?", options:["50","40","25","20"], a:"50"},
      {q:"क्रय 150, लाभ 10% — विक्रय मूल्य = ?", options:["165","160","170","150"], a:"165"},
      {q:"यदि विक्रय मूल्य 300 और लाभ 20% तो लागत कितनी थी?", options:["250","240","260","270"], a:"250"},
      {q:"नुकसान प्रतिशत = (नुकसान/कृय)×100; खरीदी 200, बेची 150 => %?", options:["25%","20%","33%","30%"], a:"25%"},
      {q:"यदि किसी वस्तु की कीमत 1000 हो और 30% छूट पर बेची जाती है, विक्रय मूल्य = ?", options:["700","800","600","900"], a:"700"},
      {q:"किसी वस्तु पर 50% लाभ हुआ; यदि लागत 200 हो, विक्रय = ?", options:["300","250","400","200"], a:"300"},
      {q:"यदि कोई दुकानदार 10% बढ़ा कर बेचता है और फिर 10% छूट देता है तो कुल प्रभाव?", options:["लगभग 1% घटेगा","0 रहेगा","10% बढ़ेगा","10% घटेगा"], a:"लगभग 1% घटेगा"},
      {q:"क्रय = 360, विक्रय = 450, लाभ प्रतिशत = ?", options:["25%","20%","15%","10%"], a:"25%"},
      {q:"यदि लागत 80 और विक्रय 96, लाभ % = ?", options:["20%","16%","25%","18%"], a:"20%"}
    ]
  };

  // ---------- DOM ----------
  const chaptersDiv = document.getElementById('chapters');
  const chapterScreen = document.getElementById('chapter-screen');
  const quizScreen = document.getElementById('quiz-screen');
  const resultScreen = document.getElementById('result-screen');

  const chapterNameEl = document.getElementById('chapter-name');
  const qcountEl = document.getElementById('qcount');
  const timerEl = document.getElementById('timer');
  const progressEl = document.getElementById('progress');
  const questionTextEl = document.getElementById('question-text');
  const optionsDiv = document.getElementById('options');
  const liveScoreEl = document.getElementById('live-score');

  const finalScoreEl = document.getElementById('final-score');
  const bestLineEl = document.getElementById('best-line');

  const btnChange = document.getElementById('change-chapter');
  const btnSkip = document.getElementById('skip-btn');
  const btnRetry = document.getElementById('retry');
  const btnBack = document.getElementById('back');

  // ---------- STATE ----------
  let currentChapter = null;
  let questions = [];
  let currentIndex = 0;
  let score = 0;
  let timer = null;
  let timeLeft = 60;
  let answered = false;

  // ---------- HELPERS ----------
  function shuffle(arr){
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function pick15(bank){
    const s = shuffle(bank);
    return s.slice(0, Math.min(15, s.length));
  }

  // ---------- RENDER CHAPTERS ----------
  function renderChapters(){
    chaptersDiv.innerHTML = '';
    Object.keys(QUIZ_BANK).forEach(ch => {
      const card = document.createElement('div');
      card.className = 'chapter';
      card.innerHTML = `<div class="title">${ch}</div><div class="meta">${QUIZ_BANK[ch].length} प्रश्न</div>`;
      card.onclick = () => startChapter(ch);
      chaptersDiv.appendChild(card);
    });
  }

  // ---------- START ----------
  function startChapter(ch){
    currentChapter = ch;
    questions = pick15(QUIZ_BANK[ch]);
    currentIndex = 0;
    score = 0;
    answered = false;
    showScreen('quiz');
    renderQuestion();
    updateLive();
  }

  function showScreen(name){
    chapterScreen.classList.toggle('hidden', name !== 'chapters');
    quizScreen.classList.toggle('hidden', name !== 'quiz');
    resultScreen.classList.toggle('hidden', name !== 'result');
  }

  // ---------- QUESTION RENDER ----------
  function renderQuestion(){
    clearInterval(timer);
    answered = false;
    const qObj = questions[currentIndex];
    chapterNameEl.textContent = currentChapter;
    qcountEl.textContent = `${currentIndex+1} / ${questions.length}`;
    questionTextEl.textContent = qObj.q;
    liveScoreEl.textContent = score;

    // options
    optionsDiv.innerHTML = '';
    const opts = shuffle(qObj.options);
    opts.forEach(opt => {
      const b = document.createElement('button');
      b.className = 'option';
      b.textContent = opt;
      b.onclick = ()=> selectOption(opt, b);
      optionsDiv.appendChild(b);
    });

    // timer start
    timeLeft = 60;
    timerEl.textContent = `${timeLeft}s`;
    progressEl.style.width = '0%';
    timer = setInterval(() => {
      timeLeft--;
      timerEl.textContent = `${timeLeft}s`;
      const percent = Math.round(((60-timeLeft)/60)*100);
      progressEl.style.width = percent + '%';
      if(timeLeft <= 0){
        clearInterval(timer);
        handleTimeout();
      }
    }, 1000);
  }

  // ---------- SELECT OPTION ----------
  function selectOption(opt, btn){
    if(answered) return;
    answered = true;
    clearInterval(timer);
    const qObj = questions[currentIndex];
    const correct = qObj.a === opt;
    // disable all & mark
    Array.from(optionsDiv.children).forEach(el=>{
      el.disabled = true;
      if(el.textContent === qObj.a) el.classList.add('correct');
    });
    if(!correct){
      btn.classList.add('wrong');
    } else {
      score++;
      liveScoreEl.textContent = score;
    }
    // next after short delay
    setTimeout(()=> nextQuestion(), 800);
  }

  function handleTimeout(){
    answered = true;
    // show correct & disable
    const qObj = questions[currentIndex];
    Array.from(optionsDiv.children).forEach(el=>{
      el.disabled = true;
      if(el.textContent === qObj.a) el.classList.add('correct');
      else el.classList.add('wrong');
    });
    setTimeout(()=> nextQuestion(), 900);
  }

  function nextQuestion(){
    currentIndex++;
    if(currentIndex >= questions.length){
      finishQuiz();
    } else {
      renderQuestion();
    }
  }

  // ---------- FINISH ----------
  function finishQuiz(){
    clearInterval(timer);
    showScreen('result');
    finalScoreEl.textContent = `आपका स्कोर: ${score} / ${questions.length}`;
    // best score store
    const key = `best_${currentChapter}`;
    const prev = parseInt(localStorage.getItem(key) || '0', 10);
    if(score > prev){
      localStorage.setItem(key, score);
      bestLineEl.textContent = `सर्वश्रेष्ठ: ${score} (नया!)`;
    } else {
      bestLineEl.textContent = prev > 0 ? `सर्वश्रेष्ठ: ${prev}` : `सर्वश्रेष्ठ: -`;
    }
  }

  // ---------- UI Buttons ----------
  btnChange.onclick = ()=> showScreen('chapters');
  btnSkip.onclick = ()=> {
    // force timeout for current question
    clearInterval(timer);
    handleTimeout();
  };
  btnRetry.onclick = ()=> {
    if(!currentChapter) { showScreen('chapters'); return; }
    questions = pick15(QUIZ_BANK[currentChapter]);
    currentIndex = 0;
    score = 0;
    showScreen('quiz');
    renderQuestion();
    updateLive();
  };
  btnBack.onclick = ()=> showScreen('chapters');

  function updateLive(){
    liveScoreEl.textContent = score;
  }

  // ---------- INIT ----------
  function init(){
    renderChapters();
    showScreen('chapters');
  }
  init();

})();
