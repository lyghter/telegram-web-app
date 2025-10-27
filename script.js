

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

let startX = 0;
let isDragging = false;

function updateCarousel() {
  const itemWidth = items[0].offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  
  items.forEach(item => item.classList.remove('active'));
  items[currentIndex].classList.add('active');
}

// События для сенсорного экрана
carousel.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

carousel.addEventListener('touchmove', e => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const diff = currentX - startX;
  carousel.style.transform = `translateX(${-currentIndex * items[0].offsetWidth + diff}px)`;
});

carousel.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (diff > 50) {
    currentIndex = Math.max(0, currentIndex - 1);
  } else if (diff < -50) {
    currentIndex = Math.min(items.length - 1, currentIndex + 1);
  }
  updateCarousel();
  isDragging = false;
});

// Инициализация
updateCarousel();



const btn = document.getElementById('ipButton');

fetch('https://ipinfo.io?token=f8403e031dcb69')
  .then(res => res.json())
  .then(data => {
    btn.textContent = `${data.ip} — ${data.country}, ${data.region}`;
  })
  .catch(err => {
    btn.textContent = "Не удалось определить IP";
    console.error(err);
  });

const ver = 'v54';

const tg = window.Telegram.WebApp;

tg.expand();
tg.setHeaderColor('#0D1117');
tg.setBottomBarColor('#0D1117');
tg.onEvent('themeChanged', () => {
    tg.setHeaderColor('#0D1117');
    tg.setBottomBarColor('#0D1117');  
});
tg.ready();

const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');
const vButton = document.getElementById('vButton');
const hwButton = document.getElementById('hwButton');
vButton.textContent = ver;

const maxRow = 10;

const qPast = [];
let qPresent = 'whereDoYouLive';
const qFuture = [];

const profile = {
  
  yourCountry: {
    text: 'Your location',
    type: 'single',
    answers: {
      'AA': { row:1, next:'yourProvince' },
      'BB': { row:1, next:'yourProvince' },
      'CC': { row:1, next:'yourProvince' },
      'DD': { row:1, next:'yourProvince' },
      'EE': { row:1, next:'yourProvince' },
        'FF': { row:2, next:'yourProvince' },
        'GG': { row:2, next:'yourProvince' },
        'HH': { row:2, next:'yourProvince' },
        'II': { row:2, next:'yourProvince' },
        'JJ': { row:2, next:'yourProvince' },  
      'KK': { row:3, next:'yourProvince' },
      'LL': { row:3, next:'yourProvince' },
      'MM': { row:3, next:'yourProvince' },
      'NN': { row:3, next:'yourProvince' },
      'OO': { row:3, next:'yourProvince' },
        'PP': { row:4, next:'yourProvince' },
        'QQ': { row:4, next:'yourProvince' },
        'RR': { row:4, next:'yourProvince' },
        'SS': { row:4, next:'yourProvince' },
        'TT': { row:4, next:'yourProvince' }, 
      'UU': { row:5, next:'yourProvince' },
      'VV': { row:5, next:'yourProvince' },
      'WW': { row:5, next:'yourProvince' },
      'XX': { row:5, next:'yourProvince' },
      'YY': { row:5, next:'yourProvince' }, 
    },
  },
  yourProvince: {
    text: 'Your location',
    type: 'single',
    answers: {
      'a': { row:1, },
      'b': { row:2, },
      'c': { row:3, },
      'd': { row:4, },
      'e': { row:5, },
    },
  },
};

function resetAnswers(parent) {
  Object.values(parent.answers).forEach(child => {
    child.picked = false;
    if ('answers' in child) resetAnswers(child);
  });
}
//function resetAnswers(q) {
//  Object.values(q.answers).forEach(a => {
//    a.picked = false;
//    if ('answers' in a) {
//      Object.values(a.answers).forEach(b => {
//        b.picked = false;
//        if ('answers' in b) {
//          Object.values(b.answers).forEach(c => {
//            c.picked = false;
//          });
//        }
//      });
//    }
//  }); 
//}
  
function resetProfile(profile) {
  Object.values(profile).forEach(q => {
    resetAnswers(q);
  });
}  

function isPicked(parent) {
  let status = false;
  Object.values(parent.answers).forEach(child => {
    if (child.picked) {
      status = true;
    } else {
      if ('answers' in child) {
        status = isPicked(child);
      }
    }
  });
  return status;
}

function unhideChilds(parent) {
  if ('answers' in parent) {
    Object.values(parent.answers).forEach(child => {
      unhide(child);
    });
  }
}
function hideChilds(parent) {
  if ('answers' in parent) {
    Object.values(parent.answers).forEach(child => {
      if ('answers' in child) hideChilds(child);
      hide(child);
    });
  }
}
function unpickChilds(parent) {
  Object.values(parent.answers).forEach(child => {
    if ('answers' in child) unpickChilds(child);
    unpick(child);
  });
}
function unpick(child) {
  if ('answers' in child) {
    child.btn.classList.remove('active'); 
  } else {
    child.btn.classList.remove('selected');
  }
  child.picked = false;
}

function pick(child) {
  //let level = parseInt(child.btn.classList[0].split('-').at(-1), 10);
  if ('answers' in child) {
    child.btn.classList.add('active'); 
  } else {
    child.btn.classList.add('selected'); 
  }
  child.picked = true;
}

function unhide(child) {
  child.btn.parentElement.classList.remove('hidden'); 
}
function hide(child) {
  child.btn.parentElement.classList.add('hidden'); 
}




function tapAnswer(parent, child) {
  if (!('type' in parent)||(parent.type==='single')) {
    if (child.picked) {
      hideChilds(child);
      unpick(child);
      //qFuture.shift();
    } else {
      hideChilds(parent);
      unpickChilds(parent);
      unhideChilds(parent);
      pick(child);
      unhideChilds(child);
      //qFuture.unshift(child.next);
    }
  } else {
    if (child.picked) {
      unpick(child);
      //qFuture.shift();
    } else {
      pick(child);
      //qFuture.unshift(child.next);
    } 
  }
  //nextButton.disabled = !isPicked(parent);
  //tg.sendData(JSON.stringify(answers));
}

function getType(q) {
  let x = 'multi';
  if (!('type' in q) || q.type === 'single') {
    x = 'single';
  }
  return x;
}

function addSVG(button, text, size) {
  const targetVisualSize = size;  // Целевой визуальный размер шрифта (px) — одинаково везде
  const viewBoxHeightFactor = 1.5;  // viewBoxHeight = targetVisualSize * factor (для baseline)
  const charWidth = 8;  // Fallback для ширины, если bbox не сработает

  // 1. Получаем реальную высоту кнопки (в px)
  const buttonHeight = button.offsetHeight || parseFloat(getComputedStyle(button).height) || 40;  // Fallback 40px
  const viewBoxHeight = targetVisualSize * viewBoxHeightFactor;  // ~18 для 12px

  // 2. Рассчитываем fontSize в viewBox для фиксированного визуального размера
  const scale = buttonHeight / viewBoxHeight;
  const fontSize = targetVisualSize / scale;  // Инверсия: visual = fontSize * scale = targetVisualSize

  // 3. Точная ширина через getBBox (без отступов)
  const tempSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  tempSvg.style.position = 'absolute';
  tempSvg.style.visibility = 'hidden';
  tempSvg.style.width = '0';
  tempSvg.style.height = '0';
  document.body.appendChild(tempSvg);

  const tempText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  tempText.setAttribute('font-size', fontSize);
  tempText.setAttribute('font-family', 'InterLocal');
  tempText.setAttribute('font-weight', '400');
  tempText.textContent = text;
  tempSvg.appendChild(tempText);

  let viewBoxWidth = tempText.getBBox().width;  // Точная ширина текста
  if (viewBoxWidth === 0) viewBoxWidth = text.length * charWidth;  // Fallback

  document.body.removeChild(tempSvg);

  // 4. Генерируем SVG (твой код + фиксы)
  const svg = `
    <svg width="100%" height="100%" viewBox="0 0 ${viewBoxWidth} ${viewBoxHeight}" 
         preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <text x="${viewBoxWidth / 2}" y="${viewBoxHeight / 2}" 
            text-anchor="middle" dominant-baseline="central" 
            fill="white" font-size="${fontSize}" font-family="InterLocal" font-weight="400">
        ${text}
      </text>
    </svg>
  `;
  button.innerHTML = svg;
}

function addButtons(object, mode='') {
  Object.keys(object).forEach(parentText => {
    Object.keys(object[parentText]).forEach(r => { 
      let div = document.createElement('div');
      div.className = 'row';
      if (mode==='hiden') div.classList.add('hidden');
      for (const b of object[parentText][r]) { 
        div.appendChild(b); 
      }
      answersContainer.appendChild(div);
    });
    
    //Object.keys(R2BB).forEach(R => {
//
    //  //div.classList.add('hidden');
    //  for (const b of R2BB[R]) div.appendChild(b);   
    //  answersContainer.appendChild(div);
    //});
  });
}

function push(object, r, parent, child, parentText, childText, level) {
  child.btn = document.createElement('button');
  //addSVG(child.btn, childText, 16);
  //child.btn.textContent = level; 
  child.btn.textContent = childText;
  child.btn.className = `answer-${getType(parent)}`;
  child.btn.classList.add(`level-${level}`); 
  //a.btn.disabled = !a.next;
  if (child.picked) child.btn.classList.add('selected');
  child.btn.onclick = () => tapAnswer(parent, child);
  if (parentText in object) {
    if (r in object[parentText]) {
      
    } else {
      object[parentText][r] = [];
    }
  } else {
    object[parentText] = {};
    object[parentText][r] = [];
  }
  object[parentText][r].push(child.btn);
}

function show() {
  const q = profile[qPresent];
  //addSVG(questionText, q.text);
  questionText.textContent = q.text;
  nextButton.disabled = !isPicked(q);
  answersContainer.innerHTML = '';
  const dA = {};
  const dB = {};
  const dC = {};
  const dD = {};
  for (let r1 = 1; r1 <= maxRow; r1++) {
    Object.keys(q.answers).forEach(aText => {
      const a = q.answers[aText];
      if (a.row == r1) {
        const text = qPresent;
        push(dA,r1,q,a,text,aText,1);
        if ('answers' in a) {
          for (let r2 = 1; r2 <= maxRow; r2++) {
            Object.keys(a.answers).forEach(bText => {
              const b = a.answers[bText];
              if (b.row == r2) {
                const text = `${qPresent}:${aText}`;
                push(dB,r2,a,b,text,bText,2);
                if ('answers' in b) {
                  for (let r3 = 1; r3 <= maxRow; r3++) {
                    Object.keys(b.answers).forEach(cText => {
                      const c = b.answers[cText];
                      if (c.row == r3) {
                        const text = `${qPresent}:${aText}:${bText}`;
                        push(dC,r3,b,c,text,cText,3);
                        if ('answers' in c) {
                          for (let r4 = 1; r4 <= maxRow; r4++) {
                            Object.keys(c.answers).forEach(dText => {
                              const d = c.answers[dText];
                              if (d.row == r4) {
                                const text = `${qPresent}:${aText}:${bText}:${cText}`;
                                push(dD,r4,c,d,text,dText,4);
                              }
                            });
                          }
                        }
                      } 
                    });
                  }
                } 
            }
          });
        }
        }
      }
    });
  }
  addButtons(dA);
  addButtons(dB,'hiden');
  addButtons(dC,'hiden');
  addButtons(dD,'hiden');
}




const container = document.querySelector('.app-container');
const hw = document.getElementById('hw');
const observer = new ResizeObserver(entries => {
  for (let entry of entries) {
    const { width, height } = entry.contentRect;
    hwButton.textContent = `${Math.round(width)}x${Math.round(height)}`;
  }
});
observer.observe(container);

resetProfile(profile);

show();

backButton.onclick = () => {
  if (qPast.length) {
    qFuture.unshift(qPresent);
    qPresent = qPast.pop();
    show();
  } else {
    tg.close();    
  }
};

nextButton.onclick = () => {
  if (qFuture.length) {
    qPast.push(qPresent);
    qPresent = qFuture.shift();
    show();
  } else {
    //tg.sendData(JSON.stringify(profile));
    tg.close();
  }
};
  
















