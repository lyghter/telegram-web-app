const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();
tg.setHeaderColor('#0D1117');
tg.setBottomBarColor('#0D1117');
tg.onEvent('themeChanged', () => {
  tg.setHeaderColor('#0D1117');
});

const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');

const qPast = [];
let qPresent = 'whereDoYouLive';
const qFuture = [];

const profile = {
  whereDoYouLive: {
    text: 'Your location',
    type: 'single',
    answers: {
      //"Prefer not to say": { row:1, next:'q' },  
      'Africa': { row:1, next:'yourAfrica'},
      'America': { row:1, next:'yourAmerica' },
      'Eurasia': { row:1, next:'yourEurasia'},
      'Oceania': { row:1, next:'yourOceania' },
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

function isPicked(q) {
  let status = false;
  Object.values(q.answers).forEach(a => {
    if (a.picked) {
      status = true;
    }
  });
  return status;
}

function tapAnswer(q, a, qFuture) {
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
  nextButton.disabled = !isPicked(q);
  //tg.sendData(JSON.stringify(answers));
}

function show(profile, qLabel, qFuture) {
  
  const q = profile[qLabel];
  questionText.textContent = q.text;
  nextButton.disabled = !isPicked(q);
  answersContainer.innerHTML = '';
  
  let row = 1;
  let rowDiv = document.createElement('div');
  rowDiv.className = 'row';
  Object.keys(q.answers).forEach(aText => {
    const a = q.answers[aText];
    a.btn = document.createElement('button');
    a.btn.textContent = aText;
    a.btn.className = `answer-button-${q.type}`;
    a.btn.disabled = !a.next;
    if (a.picked) {
      a.btn.classList.add('selected');
    }
    a.btn.onclick = () => tapAnswer(q, a, qFuture);
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

const container = document.querySelector('.app-container');
const hw = document.getElementById('hw');
const observer = new ResizeObserver(entries => {
  for (let entry of entries) {
    const { width, height } = entry.contentRect;
    hw.innerText = `${Math.round(width)}x${Math.round(height)}`;
  }
});
observer.observe(container);

resetProfile(profile);

show(profile, qPresent, qFuture);

backButton.onclick = () => {
  if (qPast.length) {
    qFuture.unshift(qPresent);
    qPresent = qPast.pop();
    show(profile, qPresent, qFuture);
  } else {
    tg.close();    
  }
};

nextButton.onclick = () => {
  if (qFuture.length) {
    qPast.push(qPresent);
    qPresent = qFuture.shift();
    show(profile, qPresent, qFuture);
  } else {
    //tg.sendData(JSON.stringify(profile));
    tg.close();
  }
};
  
















