const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();
tg.setHeaderColor('bg_color');
tg.setBottomBarColor('bg_color');
tg.onEvent('themeChanged', () => tg.setHeaderColor('#0D1117'));
//tg.onEvent('viewportChanged', () => {
//  document.getElementById('app-container').style.height = tg.viewportStableHeight + 'px';
//});
  

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
    if (a.picked) {
      a.btn.classList.add(`${q.type}-selected`);
    }
    a.btn.onclick = () => tapAnswer(q, a);
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

showQuestion(qPresent);