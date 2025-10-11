


const qSize = [0,20];
const aSize = [0,18];
const nSize = [0,20];


const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();
tg.setHeaderColor('bg_color');
tg.setBottomBarColor('bg_color');
tg.onEvent('themeChanged', () => tg.setHeaderColor('#0D1117'));
//tg.onEvent('viewportChanged', () => {
//  document.getElementById('app-container').style.height = tg.viewportStableHeight + 'px';
//});

//let v = document.getElementById("v");
//v.innerText = 'v28';
//v.style.fontSize = '18px';

const profile = {
  yourGender: {
    text: 'Who are you?',
    type: 'single', 
    answers: {
      '♀': { row:1 },
      '♂': { row:1 },
      
    },
  },
  theirGender: {
    text: 'Who would you like to chat with?',
    type: 'multi', 
    answers: {
      '♀': { row:1 },
      '♂': { row:1 },
      
    },
  },
  yourAge: {
    text: 'Your age',
    type: 'single', 
    answers: {
      '18-21': { row:1 },
      '22-25': { row:1 },
      '26-29': { row:1 },
        '30-34': { row:2 },
        '35-39': { row:2 },
        '40-44': { row:2 },
      '45-49': { row:3 },
      '50-54': { row:3 },
      '55-59': { row:3 },
        '60-64': { row:4 },
        '64-69': { row:4 },
        '70+': { row:4 },       
    },
  },
  theirAge: {
    text: 'Their age',
    type: 'multi', 
    answers: {
      '18-21': { row:1 },
      '22-25': { row:1 },
      '26-29': { row:1 },
        '30-34': { row:2 },
        '35-39': { row:2 },
        '40-44': { row:2 },
      '45-49': { row:3 },
      '50-54': { row:3 },
      '55-59': { row:3 },
        '60-64': { row:4 },
        '64-69': { row:4 },
        '70+': { row:4 },       
    },
  },
  whereAreYouFrom: {
    text: 'Where are you from?',
    type: 'single',
    answers: {
      "I prefer not to say": { row:1, next:['yourOceania'] },
      'North America': { row:2, next:['yourAmerica'] },
      'Latin America': { row:2, next:['yourAmerica'] },
      'Africa': { row:3, next:['yourAfrica']},
      'Europe': { row:3, next:['yourEurope']},
      'Asia': { row:3, next:['yourAsia'] },
      
      'Caucasus': { row:4, next:['yourMENA']},
      'Middle East': { row:4, next:['yourMENA']},
      'Australia': { row:5, next:['yourOceania'] },
      'N.Zeland': { row:5, next:['yourOceania'] },
      'Pacific': { row:5, next:['yourAfrica']},
      
      
      
      
      
      
      
      
      
      
      
      
      
    },
  }, 
  yourPartOfWorld: {
    text: 'Which part of the world\ndo you live in?',
    type: 'single',
    answers: {
      'Asia': { row:1, next:['yourAsia'] },
      'The Americas': { row:2, next:['yourAmerica'] },
      'Europe & Caucasus': { row:3, next:['yourEurope']},
      'Middle East & North Africa': { row:4, next:['yourMENA']},
      'Sub-Saharan Africa': { row:5, next:['yourAfrica']},
      'Australia & Oceania': { row:6, next:['yourOceania'] },
      "I'm a global nomad": { row:7, next:['yourOceania'] },
      "I prefer not to say": { row:8, next:['yourOceania'] },
    },
  },  
  yourWorld: {
    text: 'Where do you live?',
    type: 'single',
    answers: {
      'ASIA': { row:1, next:['yourAsia'] },
      'AMERICA': { row:2, next:['yourAmerica'] },
      'EUROPE & EX-USSR': { row:3, next:['yourEurope']},
      'MIDDLE EAST & NORTH AFRICA': { row:4, next:['yourMENA']},
      'SUB-SAHARAN AFRICA': { row:5, next:['yourAfrica']},
      'OCEANIA': { row:6, next:['yourOceania'] },
    },
  },
  yourAsia: {
    text: 'Which part of Asia do you live in?',
    type: 'single',
    answers: {
      'Central Asia': { row:1, next:['']},
      'South Asia': { row:2, },
      'Southeast Asia': { row:3, },
      'East Asia': { row:4, },
    },
  },
  yourAmerica: {
    text: 'Which of the Americas do you live in?',
    type: 'single',
    answers: {
      'North America': { row:1, },
      'Latin America': { row:2, },
    },
  },
  yourEurope: {
    text: 'Which country do you live in?',
    type: 'single',
    answers: {
      '1': { row:1, flag:''},
      '2': { row:2, flag:''},
    },
  }, 
  yourMENA: {
    text: 'Which country do you live in?',
    type: 'single',
    answers: {
      '1': { row:1, flag:''},
      '2': { row:2, flag:''},
    },
  },
  yourAfrica: {
    text: 'Which country do you live in?',
    type: 'single',
    answers: {
      '1': { row:1, flag:''},
      '2': { row:2, flag:''},
    },  
  },
  yourOceania: {
    text: 'Which country do you live in?',
    type: 'single',
    answers: {
      '1': { row:1, flag:''},
      '2': { row:2, flag:''},
    },  
  },
};

function resetAnswers(q) {
  Object.values(q.answers).forEach(a => {
    a.picked = false;
  }); 
}
  
function resetProfile(profile) {
  Object.values(profile).forEach(q => {
    resetAnswers(q);
  });
}  

function fitTextByLongestLine(el, size) {
  const style = window.getComputedStyle(el);
  let fontSize = parseFloat(style.fontSize);
  const minFont = size[0];
  const maxFont = size[1] || fontSize;

  const tempContainer = document.createElement("div");
  tempContainer.style.position = "absolute";
  tempContainer.style.visibility = "hidden";
  tempContainer.style.width = el.offsetWidth + "px";
  tempContainer.style.font = style.font;
  tempContainer.style.lineHeight = style.lineHeight;
  tempContainer.style.whiteSpace = "pre"; // сохраняем заранее заданные переносы
  tempContainer.style.wordBreak = "normal";
  document.body.appendChild(tempContainer);

  const lines = el.textContent.split('\n');

  let fits = false;

  // Уменьшаем шрифт, если не помещается
  while (!fits && fontSize > minFont) {
    tempContainer.innerHTML = '';
    tempContainer.style.fontSize = fontSize + "px";

    fits = true;
    lines.forEach(line => {
      const span = document.createElement("span");
      span.textContent = line;
      tempContainer.appendChild(span);
      if (span.offsetWidth > el.offsetWidth) fits = false;
    });

    if (!fits) fontSize -= 0.5;
  }

  // Увеличиваем шрифт, если есть место
  let canIncrease = true;
  while (canIncrease && fontSize < maxFont) {
    fontSize += 0.5;
    tempContainer.innerHTML = '';
    tempContainer.style.fontSize = fontSize + "px";

    canIncrease = true;
    lines.forEach(line => {
      const span = document.createElement("span");
      span.textContent = line;
      tempContainer.appendChild(span);
      if (span.offsetWidth > el.offsetWidth) canIncrease = false;
    });

    if (!canIncrease) fontSize -= 0.5; // откат до последнего подходящего размера
  }

  el.style.fontSize = fontSize + "px";
  document.body.removeChild(tempContainer);
}

function fitTextToButton(button, size) {
  const span = document.createElement("span");
  span.style.visibility = "hidden";
  span.style.whiteSpace = "nowrap";
  span.style.position = "absolute";
  span.style.font = window.getComputedStyle(button).font;
  span.textContent = button.textContent;
  document.body.appendChild(span);

  const parentWidth = button.offsetWidth;
  const style = window.getComputedStyle(button);
  let fontSize = parseFloat(style.fontSize);

  const minFont = size[0];
  const maxFont = size[1]; // ограничим разумный максимум

  // если текст не помещается — уменьшаем шрифт
  while (span.offsetWidth > parentWidth - 10 && fontSize > minFont) {
    fontSize -= 0.5;
    span.style.fontSize = fontSize + "px";
  }

  // если текст влезает и есть место — увеличиваем шрифт
  while (span.offsetWidth < parentWidth - 20 && fontSize < maxFont) {
    fontSize += 0.5;
    span.style.fontSize = fontSize + "px";
    if (span.offsetWidth > parentWidth - 10) {
      fontSize -= 0.5;
      break;
    }
  }

  button.style.fontSize = fontSize + "px";
  span.remove();
  button.style.visibility = 'visible';
}

function isPicked(q) {
  let status = false;
  Object.values(q.answers).forEach(a => {
    if (a.picked) {
      status = true;
    }
  });
  return status;
}

function tapAnswer(q, a, nButton) {
  if (q.type === 'single') {
    if (a.picked) {
      a.btn.classList.remove('single-selected');
      a.picked = false;
    } else {
      Object.keys(q.answers).forEach(aLabel => {
        const ans = q.answers[aLabel];
        if (ans.picked) {
          ans.btn.classList.remove('single-selected');
          ans.picked = false;
        }
      });
      a.btn.classList.add('single-selected');
      a.picked = true;                               
    }
  } else {
    if (a.picked) {
      a.btn.classList.remove('multi-selected');
      a.picked = false;
    } else {
      a.btn.classList.add('multi-selected');
      a.picked = true;  
    } 
  }
  nButton.disabled = !isPicked(q);
  //tg.sendData(JSON.stringify(answers));
}

function show(profile, qLabel, aSize) {
  
  const q = profile[qLabel];
  
  const qT = document.getElementById('questionText');
  qT.textContent = q.text;
  
  const bB = document.getElementById('backButton');
  
  const nB = document.getElementById('nextButton');
  nB.disabled = !isPicked(q);
  
  const aContainer = document.getElementById('answersContainer');
  aContainer.innerHTML = '';
  
  let row = 1;
  let rowDiv = document.createElement('div');
  rowDiv.className = 'row';
  Object.keys(q.answers).forEach(aText => {
    const a = q.answers[aText];
    a.btn = document.createElement('button');
    a.btn.textContent = aText;
    a.btn.className = 'answer-button';
    a.btn.style.visibility = 'hidden';
    if (a.picked) {
      a.btn.classList.add(`${q.type}-selected`);
    }
    a.btn.onclick = () => tapAnswer(q, a, nB);
    fitTextToButton(a.btn, aSize);
    if (row == a.row) {} else {
      aContainer.appendChild(rowDiv);
      rowDiv = document.createElement('div');
      rowDiv.className = 'row';
    }
    rowDiv.appendChild(a.btn);
    row = a.row;
  });
  aContainer.appendChild(rowDiv);
  return { qT, bB, nB };
}


let hw = document.getElementById("hw");
hw.innerText = window.innerHeight+'x'+window.innerWidth;
hw.style.fontSize = '18px'; 

//import { profile, resetProfile } from './profile.js';
resetProfile(profile);
  
const qPast = [];
let qPresent = 'whereAreYouFrom';
const qFuture = [
  //'yourAge',
  //'theirGender',
  //'theirAge'
];

const { qT, bB, nB } = show(profile, qPresent, aSize);

window.addEventListener("load", () => {
  fitTextByLongestLine(qT, qSize);
  const aa = document.querySelectorAll('#answersContainer .answer-button');
  aa.forEach(a => fitTextToButton(a, aSize));
  fitTextToButton(bB, nSize);
  fitTextToButton(nB, nSize);
}); 

window.addEventListener("resize", () => {
  fitTextByLongestLine(qT, qSize);
  const aa = document.querySelectorAll('#answersContainer .answer-button');
  aa.forEach(a => fitTextToButton(a, aSize));
  fitTextToButton(bB, nSize);
  fitTextToButton(nB, nSize);
}); 

bB.onclick = () => {
  if (qPast.length) {
    qFuture.unshift(qPresent);
    qPresent = qPast.pop();
    showQuestionAndAnswers(profile, qPresent);
  } else {
    tg.close();    
  }
};

nB.onclick = () => {
  //analyseSelection(qPresent);
  if (qFuture.length) {
    qPast.push(qPresent);
    qPresent = qFuture.shift();
    showQuestionAndAnswers(profile, qPresent);
  } else {
    //tg.sendData(JSON.stringify(profile));
    tg.close();
  }
};
  
















