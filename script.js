const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();
tg.setHeaderColor('bg_color');
tg.setBottomBarColor('bg_color');
tg.onEvent('themeChanged', () => tg.setHeaderColor('#0D1117'));
//tg.onEvent('viewportChanged', () => {
//  document.getElementById('app-container').style.height = tg.viewportStableHeight + 'px';
//});

let v = document.getElementById("v");
v.innerText = 'v25';
v.style.fontSize = '18px';

let hw = document.getElementById("hw");
hw.innerText = window.innerHeight+'x'+window.innerWidth;
hw.style.fontSize = '18px'; 

function guess() {}

  
  //'theirGender'
  //'theirAge'



function isPicked(q) {
  let status = false;
  Object.values(q.answers).forEach(a => {
    if (a.picked) {
      status = true;
    }
  });
  return status;
}
  
function resetAnswers(q) {
  Object.values(q.answers).forEach(a => {
    a.picked = false;
  }); 
}
  
function resetProfile() {
  Object.values(profile).forEach(q => {
    resetAnswers(q);
  });
}  
  
resetProfile();
  
  
const qPast = [];
let qPresent = 'yourPartOfWorld';
const qFuture = [
  
  //'yourAge',

  //
  //'theirGender',
  //'theirAge'
  
];
  


const nextButton = document.getElementById('nextButton');
const backButton = document.getElementById('backButton');
const questionText = document.getElementById('questionText');

function showQuestion(qLabel) {
  const q = profile[qLabel];
  questionText.textContent = q.text;
  const answersContainer = document.getElementById('answersContainer');
  answersContainer.innerHTML = '';
  nextButton.disabled = !isPicked(q);
  
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
    a.btn.onclick = () => tapAnswer(q, a);
    fitTextToButton(a.btn);
    if (row == a.row) {} else {
      answersContainer.appendChild(rowDiv);
      rowDiv = document.createElement('div');
      rowDiv.className = 'row';
    }
    rowDiv.appendChild(a.btn);
    row = a.row;
  });
  answersContainer.appendChild(rowDiv);
}

function tapAnswer(q, a) {
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
  nextButton.disabled = !isPicked(q);
  //tg.sendData(JSON.stringify(answers));
}

function analyseSelection(qLabel) {
  const q = profile[qLabel];

  
}
  
nextButton.onclick = () => {
  analyseSelection(qPresent);
  if (qFuture.length) {
    qPast.push(qPresent);
    qPresent = qFuture.shift();
    showQuestion(qPresent);
  } else {
    //tg.sendData(JSON.stringify(profile));
    tg.close();
  }
};

backButton.onclick = () => {
  if (qPast.length) {
    qFuture.unshift(qPresent);
    qPresent = qPast.pop();
    showQuestion(qPresent);
  } else {
    tg.close();    
  }
};


function fitTextToButton(button, maxFontSize) {
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

  const minFont = 1;
  const maxFont = maxFontSize; // ограничим разумный максимум

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

function fitTextByLongestLine(el, maxFontSize) {
  const style = window.getComputedStyle(el);
  let fontSize = parseFloat(style.fontSize);
  const minFont = 0;
  const maxFont = maxFontSize || fontSize;

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




showQuestion(qPresent);

fitTextByLongestLine(questionText, 20);
window.addEventListener(
  "resize", () => fitTextByLongestLine(questionText, 20));

const answers = document.querySelectorAll('#answersContainer .answer-button');
answers.forEach(ans => fitTextToButton(ans, 18));
window.addEventListener(
  "resize", () => answers.forEach(ans => fitTextToButton(ans, 18)));

fitTextToButton(backButton);
window.addEventListener(
  "resize", () => fitTextToButton(backButton, 20));

fitTextToButton(nextButton);
window.addEventListener(
  "resize", () => fitTextToButton(nextButton, 20));















