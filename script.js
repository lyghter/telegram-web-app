

const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();
tg.setHeaderColor('#0D1117');
tg.setBottomBarColor('#0D1117');
tg.onEvent('themeChanged', () => tg.setHeaderColor('#0D1117'));
//tg.onEvent('viewportChanged', () => {
//  document.getElementById('app-container').style.height = tg.viewportStableHeight + 'px';
//});

//let v = document.getElementById("v");
//v.innerText = 'v28';
//v.style.fontSize = '18px';

const qSize = [0,6];
const aSize = [0,5];
const nSize = [0,6];

const qPast = [];
let qPresent = 'whereDoYouLive';
const qFuture = [];

const profile = {
  whereDoYouLive1: {
    text: 'Where do you live?',
    type: 'single',
    answers: {
      'Africa': { row:1, next:'yourAfrica'},
      'America': { row:2, next:'yourAmerica' },
      'Eurasia': { row:3, next:'yourEurasia'},
      'Oceania': { row:4, next:'yourOceania' },
      "I'm global nomad": { row:5, next:'q'},
      //"I prefer not to say": { row:6, next:'q' },  
    },
  }, 
  whereDoYouLive: {
    text: 'Your location',
    type: 'single',
    answers: {
      "Prefer not to say": { row:1, next:'q' },  
      'Africa': { row:2, next:'yourAfrica'},
      'America': { row:2, next:'yourAmerica' },
      'Eurasia': { row:2, next:'yourEurasia'},
      'Oceania': { row:2, next:'yourOceania' },
      //"I'm global nomad": { row:5, next:'q'},
      
    },
  }, 
  yourAfrica: {
    text: 'Which part of Africa\ndo you live in?',
    type: 'multi',
    answers: {
      'Eastern Africa': { row:1, next:'yourEasternAfrica'},
      'Middle Africa': { row:2, next:'yourMiddleAfrica'},
      'Northern Africa': { row:3, },
      'Southern Africa': { row:4, },
      'Western Africa': { row:5, },
      "I prefer not to say": { row:6, next:'q' },  
    },
  },
  yourEasternAfrica: {
    text: 'Which country\ndo you live in?',
    type: 'single',
    answers: {
      'a': { row:1, },
      'b': { row:2, },
      'c': { row:3, },
    },
  },
yourMiddleAfrica: {
    text: 'Which country\ndo you live in?',
    type: 'single',
    answers: {
      'a': { row:1, },
      'b': { row:2, },
      'c': { row:3, },
    },
  }, 
  yourAmerica: {
    text: 'Which part of America\ndo you live in?',
    type: 'single',
    answers: {
      'Carribean': { row:1, },
      'Central America': { row:2, },
      'Northern America': { row:3, },
      'South America': { row:4, },
      "I prefer not to say": { row:5, next:'q' },  
    },
  },
  yourEurasia: {
    text: 'Which part of Eurasia\ndo you live in?',
    type: 'single',
    answers: {
      'Asia': { row:1, },
      'Europe': { row:2, },
      'Middle East': { row:3, },
      'Russia': { row:4, },
      'South Caucasus': { row:5, },
      "I prefer not to say": { row:6, next:'q' },  
    },
  },
  yourOceania: {
    text: 'Which part of Oceania\ndo you live in?',
    type: 'single',
    answers: {
      'Australia': { row:1, },
      'Melanesia': { row:3, },
      'Micronesia': { row:4, },
      'New Zealand': { row:2, },
      'Polynesia': { row:5, },
      "I prefer not to say": { row:6, next:'q' },  
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

//function fitTextByLongestLine(el, size) {
//  const style = window.getComputedStyle(el);
//  let fontSize = parseFloat(style.fontSize);
//  const minFont = size[0];
//  const maxFont = size[1] || fontSize;
//
//  const tempContainer = document.createElement("div");
//  tempContainer.style.position = "absolute";
//  tempContainer.style.visibility = "hidden";
//  tempContainer.style.width = (el.offsetWidth / window.innerWidth)*100 + "vw";
//  tempContainer.style.font = style.font;
//  tempContainer.style.lineHeight = style.lineHeight;
//  tempContainer.style.whiteSpace = "pre"; // сохраняем заранее заданные переносы
//  tempContainer.style.wordBreak = "normal";
//  document.body.appendChild(tempContainer);
//
//  const lines = el.textContent.split('\n');
//
//  let fits = false;
//
//  // Уменьшаем шрифт, если не помещается
//  while (!fits && fontSize > minFont) {
//    tempContainer.innerHTML = '';
//    tempContainer.style.fontSize = fontSize + "vw";
//
//    fits = true;
//    lines.forEach(line => {
//      const span = document.createElement("span");
//      span.textContent = line;
//      tempContainer.appendChild(span);
//      if (span.offsetWidth > el.offsetWidth) fits = false;
//    });
//
//    if (!fits) fontSize -= 0.5;
//  }
//
//  // Увеличиваем шрифт, если есть место
//  let canIncrease = true;
//  while (canIncrease && fontSize < maxFont) {
//    fontSize += 0.5;
//    tempContainer.innerHTML = '';
//    tempContainer.style.fontSize = fontSize + "vw";
//
//    canIncrease = true;
//    lines.forEach(line => {
//      const span = document.createElement("span");
//      span.textContent = line;
//      tempContainer.appendChild(span);
//      if (span.offsetWidth > el.offsetWidth) canIncrease = false;
//    });
//
//    if (!canIncrease) fontSize -= 0.5; // откат до последнего подходящего размера
//  }
//
//  el.style.fontSize = fontSize + "vw";
//  document.body.removeChild(tempContainer);
//}

//function fitTextToButton(button, size) {
//  const span = document.createElement("span");
//  span.style.visibility = "hidden";
//  span.style.whiteSpace = "nowrap";
//  span.style.position = "absolute";
//  span.style.font = window.getComputedStyle(button).font;
//  span.textContent = button.textContent;
//  document.body.appendChild(span);
//
//  const parentWidth = (button.offsetWidth / window.innerWidth) * 100;
//  const style = window.getComputedStyle(button);
//  let fontSize = parseFloat(style.fontSize);
//
//  const minFont = size[0];
//  const maxFont = size[1]; // ограничим разумный максимум
//
//  // если текст не помещается — уменьшаем шрифт
//  while ((span.offsetWidth/window.innerWidth)*100 > parentWidth - 4 && fontSize > minFont) {
//    fontSize -= 0.5;
//    span.style.fontSize = fontSize + "vw";
//  }
//  // если текст влезает и есть место — увеличиваем шрифт
//  while ((span.offsetWidth/window.innerWidth)*100 < parentWidth - 6 && fontSize < maxFont) {
//    fontSize += 0.5;
//    span.style.fontSize = fontSize + "vw";
//    if ((span.offsetWidth/window.innerWidth)*100 > parentWidth - 4) {
//      fontSize -= 0.5;
//      break;
//    }
//  }
//
//  button.style.fontSize = fontSize + "vw";
//  span.remove();
//  button.style.visibility = 'visible';
//}

function isPicked(q) {
  let status = false;
  Object.values(q.answers).forEach(a => {
    if (a.picked) {
      status = true;
    }
  });
  return status;
}

function tapAnswer(q, a, nButton, qFuture) {
  if (q.type === 'single') {
    if (a.picked) {
      a.btn.classList.remove('selected');
      a.picked = false;
      qFuture.shift();
    } else {
      Object.keys(q.answers).forEach(aLabel => {
        const ans = q.answers[aLabel];
        if (ans.picked) {
          ans.btn.classList.remove('selected');
          ans.picked = false;
        }
      });
      a.btn.classList.add('selected');
      a.picked = true;
      qFuture.unshift(a.next);
    }
  } else {
    if (a.picked) {
      a.btn.classList.remove('selected');
      a.picked = false;
      qFuture.shift();
    } else {
      a.btn.classList.add('selected');
      a.picked = true; 
      qFuture.unshift(a.next);
    } 
  }
  nButton.disabled = !isPicked(q);
  //tg.sendData(JSON.stringify(answers));
}

function show(profile, qLabel, aSize, qFuture) {
  
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
    a.btn.className = `answer-button-${q.type}`;
    //a.btn.style.visibility = 'hidden';
    a.btn.disabled = !a.next;
    if (a.picked) {
      a.btn.classList.add('selected');
    }
    a.btn.onclick = () => tapAnswer(q, a, nB, qFuture);
    //fitTextToButton(a.btn, aSize);
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

function handleOrientation() {
  const app = document.querySelector('.app-container');
  const root = document.documentElement;

  // 1. Скрываем контейнер
  app.style.visibility = 'hidden';

  // 2. Расчёты
  if (window.innerWidth > window.innerHeight) {
    // альбомная ориентация
    app.style.transform = 'rotate(-90deg) scale(1)';
    root.style.setProperty('--vw', window.innerHeight + 'px');
    root.style.setProperty('--vh', window.innerWidth + 'px');
  } else {
    // портретная ориентация
    app.style.transform = 'rotate(0deg)';
    root.style.setProperty('--vw', window.innerWidth + 'px');
    root.style.setProperty('--vh', window.innerHeight + 'px');
  }

  // 3. Показываем контейнер после расчётов
  requestAnimationFrame(() => {
    app.style.visibility = 'visible';
  });
}

window.addEventListener('resize', handleOrientation);
window.addEventListener('orientationchange', handleOrientation);
handleOrientation();

let hw = document.getElementById("hw");
hw.innerText = window.innerHeight+'x'+window.innerWidth;
hw.style.fontSize = '5vw'; 

resetProfile(profile);

const { qT, bB, nB } = show(profile, qPresent, aSize, qFuture);

//window.addEventListener("load", () => {
//  fitTextByLongestLine(qT, qSize);
//  const aa = document.querySelectorAll('#answersContainer .answer-button');
//  aa.forEach(a => fitTextToButton(a, aSize));
//  fitTextToButton(bB, nSize);
//  fitTextToButton(nB, nSize);
//}); 

//window.addEventListener("resize", () => {
//  fitTextByLongestLine(qT, qSize);
//  const aa = document.querySelectorAll('#answersContainer .answer-button');
//  aa.forEach(a => fitTextToButton(a, aSize));
//  fitTextToButton(bB, nSize);
//  fitTextToButton(nB, nSize);
//}); 

bB.onclick = () => {
  if (qPast.length) {
    qFuture.unshift(qPresent);
    qPresent = qPast.pop();
    show(profile, qPresent, aSize, qFuture);
  } else {
    tg.close();    
  }
};

nB.onclick = () => {
  if (qFuture.length) {
    qPast.push(qPresent);
    qPresent = qFuture.shift();
    show(profile, qPresent, aSize, qFuture);
  } else {
    //tg.sendData(JSON.stringify(profile));
    tg.close();
  }
};
  
















