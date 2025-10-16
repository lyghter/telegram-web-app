const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();
tg.setHeaderColor('#0D1117');
tg.setBottomBarColor('#0D1117');
tg.onEvent('themeChanged', () => {
  tg.setHeaderColor('#0D1117');
});

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

const container = document.querySelector('.app-container');
const hw = document.getElementById('hw');

const observer = new ResizeObserver(entries => {
  for (let entry of entries) {
    const { width, height } = entry.contentRect;
    hw.innerText = `${Math.round(width)}x${Math.round(height)}`;
  }
});

observer.observe(container);

//let hw = document.getElementById("hw");
//hw.innerText = window.innerHeight+'x'+window.innerWidth;
//hw.style.fontSize = '5vw'; 

resetProfile(profile);

const { qT, bB, nB } = show(
  profile, qPresent, aSize, qFuture);


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
  
















