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
      'Africa': { row:1, answers: {
        'East': { row:1, answers: {
          'BI': { row:1, name:'Burundi' },
          'DJ': { row:1, name:'Djibouti' },
          'ER': { row:1, name:'Eritrea' },
          'ET': { row:1, name:'Ethiopia' },
          'KE': { row:1, name:'Kenya' },
            'KM': { row:2, name:'Comoros' },
            'MG': { row:2, name:'Madagascar' },
            'MU': { row:2, name:'Mauritius' }, 
            'MW': { row:2, name:'Malawi' },
            'MZ': { row:2, name:'Mozambique' }, 
          'RE': { row:3, name:'Réunion (France)' },
          'RW': { row:3, name:'Rwanda' },
          'SC': { row:3, name:'Seychelles' },
          'SO': { row:3, name:'Somalia' },
          'SS': { row:3, name:'South Sudan' }, 
            'TZ': { row:4, name:'Tanzania' },
            'UG': { row:4, name:'Uganda' },
            'YT': { row:4, name:'Mayotte (France)' },
            'ZM': { row:4, name:'Zambia' },
            'ZW': { row:4, name:'Zimbabwe' },
        } },
        'Middle': { row:1, answers: {
          'AO': { row:1, name:'Angola' },
          'CD': { row:1, name:'Democratic Republic of the Congo' },
          'CF': { row:1, name:'Central African Republic' },
          'CG': { row:1, name:'Republic of the Congo' },
          'CM': { row:1, name:'Cameroon' },
            'GA': { row:2, name:'Gabon' },
            'GQ': { row:2, name:'Equatorial Guinea' },
            'ST': { row:2, name:'São Tomé and Príncipe' },
            'TD': { row:2, name:'Chad' },
        } },
        'North': { row:1, answers: {
          'DZ': { row:1, name:'Algeria' },
          'EG': { row:1, name:'Egypt' },
          'EH': { row:1, name:'Western Sahara (disputed territory)' },
          'LY': { row:1, name:'Libya' },
          'MA': { row:1, name:'Morocco' },
          'MR': { row:1, name:'Mauritania' },
          'SD': { row:1, name:'Sudan' },
          'TN': { row:1, name:'Tunisia' },
        } },
        'South': { row:1, answers: {
          'BW': { row:1, name:'Botswana' },
          'LS': { row:1, name:'Lesotho' },
          'NA': { row:1, name:'Namibia' },
          'SZ': { row:1, name:'Eswatini (Swaziland)' },
          'ZA': { row:1, name:'South Africa' },
        } },
        'West': { row:1, answers: {
          'BJ': { row:1, name:'Benin' },
          'BF': { row:1, name:'Burkina Faso' },
          'CV': { row:1, name:'Cabo Verde' },
          'CI': { row:1, name:'Côte d’Ivoire' },
          'GH': { row:1, name:'Ghana' },
          'GM': { row:1, name:'Gambia' },
          'GN': { row:1, name:'Guinea' },
          'GW': { row:1, name:'Guinea-Bissau' },
          'LR': { row:1, name:'Liberia' },
          'ML': { row:2, name:'Mali' },
          'NE': { row:2, name:'Niger' },
          'NG': { row:2, name:'Nigeria' },
          'SH': { row:2, name:'Saint Helena (UK)' },
          'SN': { row:2, name:'Senegal' },
          'SL': { row:2, name:'Sierra Leone' },
          'TG': { row:2, name:'Togo' },
        } },
      }},
      'America': { row:1, answers: {
        'Carribean': { row:1, answers: {
          'AG': { row:1, name:'Antigua and Barbuda' },
          'AI': { row:1, name:'Anguilla (UK)' },
          'AW': { row:1, name:'Aruba (Netherlands)' },
          'BS': { row:1, name:'Bahamas' },
          'BB': { row:1, name:'Barbados' },
          'BM': { row:1, name:'Bermuda (UK)' },
          'BQ': { row:1, name:'Bonaire, Sint Eustatius and Saba (Netherlands)' },
          'VG': { row:1, name:'British Virgin Islands (UK)' },
          'KY': { row:1, name:'Cayman Islands (UK)' },
          'CU': { row:1, name:'Cuba' },
          'CW': { row:1, name:'Curaçao (Netherlands)' },
          'DM': { row:1, name:'Dominica' },
          'DO': { row:1, name:'Dominican Republic' },
          'GD': { row:1, name:'Grenada' },
          'GP': { row:1, name:'Guadeloupe (France)' },
          'HT': { row:1, name:'Haiti' },
          'JM': { row:1, name:'Jamaica' },
          'MQ': { row:1, name:'Martinique (France)' },
          'MS': { row:1, name:'Montserrat (UK)' },
          'PR': { row:1, name:'Puerto Rico (US)' },
          'BL': { row:1, name:'Saint Barthélemy (France)' },
          'KN': { row:1, name:'Saint Kitts and Nevis' },
          'LC': { row:1, name:'Saint Lucia' },
          'MF': { row:1, name:'Saint Martin (French part)' },   
          'VC': { row:1, name:'Saint Vincent and the Grenadines' },
          'SX': { row:1, name:'Sint Maarten (Dutch part)' },  
          'TT': { row:1, name:'Trinidad and Tobago' },
          'TC': { row:1, name:'Turks and Caicos Islands (UK)' },  
          'VI': { row:1, name:'United States Virgin Islands (US)' }, 
        } },
        'Central': { row:1, answers: {
          'BZ': { row:1, name:'Belize' },
          'CR': { row:1, name:'Costa Rica' },
          'SV': { row:1, name:'El Salvador' },
          'GT': { row:1, name:'Guatemala' },
          'HN': { row:1, name:'Honduras' },
          'NI': { row:1, name:'Nicaragua' },
          'PA': { row:1, name:'Panama' },
          'MX': { row:1, name:'Mexico' },
        } },
        'Northern': { row:1, answers: {
          'BM': { row:1, name:'Bermuda (UK)' },
          'CA': { row:1, name:'Canada' },
          'GL': { row:1, name:'Greenland (Denmark)' },
          'PM': { row:1, name:'Saint Pierre and Miquelon (France)' },
          'US': { row:1, name:'United States' },        
        } },
        'South': { row:1, answers: {
          'AR': { row:1, name:'Argentina' },
          'BO': { row:1, name:'Bolivia' },
          'BR': { row:1, name:'Brazil' },
          'CL': { row:1, name:'Chile' },
          'CO': { row:1, name:'Colombia' },
          'EC': { row:1, name:'Ecuador' },
          'GY': { row:1, name:'Guyana' },
          'PY': { row:1, name:'Paraguay' },  
          'PE': { row:1, name:'Peru' },
          'SR': { row:2, name:'Suriname' },  
          'UY': { row:2, name:'Uruguay' },
          'VE': { row:2, name:'Venezuela' },  
          'GF': { row:2, name:'French Guiana (France)' }, 
          'FK': { row:2, name:'Falkland Islands (UK)' }, 
        } },
      } },
      'Asia': { row:1, answers: {
        'E. Asia': { row:1, answers: {} },
        'N. Asia': { row:1, answers: {} },
        'S. Asia': { row:1, answers: {} },
        'S.E. Asia': { row:1, answers: {} },
        'W. Asia': { row:1, answers: {} },
      } },
      'Europe': { row:1, answers: {
        '1': { row:1, answers: {} },
        '2': { row:2, answers: {} },
      } },
      'Oceania': { row:1, answers: {
        //'Australia': { row:1, next:'yourAustralia' },
        //'New Zealand': { row:4, next:'yourNewZealand' },
        'Pacific Islands': { row:1, answers: {
          'FJ': { row:1, name:'Fiji' },
          'PF': { row:1, name:'French Polynesia (France)' },
          'GU': { row:1, name:'Guam (US)' },
          'KI': { row:1, name:'Kiribati' },
          'MH': { row:1, name:'Marshall Islands' },
          'FM': { row:1, name:'Micronesia' },
          'NR': { row:1, name:'Nauru' },
          'NC': { row:1, name:'New Caledonia (France)' },
          'NU': { row:1, name:'Niue (NZ)' }, 
          'NF': { row:1, name:'Norfolk Island (Australia)' }, 
          'MP': { row:1, name:'Northern Mariana Islands (US)' },
          'PW': { row:1, name:'Palau' },
          'PG': { row:1, name:'Papua New Guinea' },
          'PN': { row:1, name:'Pitcairn Islands (UK)' },
          'WS': { row:1, name:'Samoa' },
          'SB': { row:1, name:'Solomon Islands' },
          'TK': { row:1, name:'Tokelau (NZ)' },
          'TO': { row:1, name:'Tonga' },
          'TV': { row:1, name:'Tuvalu' },
          'VU': { row:1, name:'Vanuatu' },
          'WF': { row:1, name:'Wallis and Futuna (France)' },
        } },
      } },
    },
  }, 
  //Melanesia Micronesia Polynesia
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

function resetAnswers(q) {
  Object.values(q.answers).forEach(a => {
    a.picked = false;
    if ('answers' in a) {
      Object.values(a.answers).forEach(b => {
        b.picked = false;
        if ('answers' in b) {
          Object.values(b.answers).forEach(c => {
            c.picked = false;
          });
        }
      });
    }
  }); 
}
  
function resetProfile(profile) {
  Object.values(profile).forEach(q => {
    resetAnswers(q);
  });
}  

function isPicked(parent) {
  let status = false;
  Object.values(parent.answers).forEach(a => {
    if (a.picked) {
      status = true;
    }
  });
  return status;
}

function unhideChilds(parent) {
  Object.values(parent.answers).forEach(child => {
    unhide(child);
  });
}
function hideChilds(parent) {
  Object.values(parent.answers).forEach(child => {
    if ('answers' in child) hideChilds(child);
    hide(child);
  });
}
function unpickChilds(parent) {
  Object.values(parent.answers).forEach(child => {
    if ('answers' in child) {
      unpickChilds(child);
    }
    unpick(child);
  });
}
function unpick(child) {
  child.btn.classList.remove('selected');
  child.picked = false;
}
function pick(child) {
  child.btn.classList.add('selected'); 
  child.picked = true;
}

function unhide(child) {
  child.btn.parentElement.classList.remove('hidden'); 
}
function hide(child) {
  child.btn.parentElement.classList.add('hidden'); 
}




function tapAnswer(parent, child) {
  if ('answers' in child) {
    if (child.picked) {
      hideChilds(child);
      unpick(child);
    } else {
      hideChilds(parent);
      unpickChilds(parent);
      unhideChilds(parent);
      pick(child);
      unhideChilds(child);
    }
  } else {
    if (parent.type === 'single') {
      if (child.picked) {
        unpick(child);
        //qFuture.shift();
      } else {
        unpickChilds(parent);
        pick(child);
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


function addButtons(object, mode='') {
  Object.keys(object).forEach(parentText => {
    //const R2BB = {};
    Object.keys(object[parentText]).forEach(r => { 
      let div = document.createElement('div');
      div.className = 'row';
      if (mode==='hiden') div.classList.add('hidden');
      for (const b of object[parentText][r]) {
        //b.textContent = parentText+''+r+b.textContent; 
        div.appendChild(b); 
        //if (!(r in R2BB)) R2BB[r] = [];
        //R2BB[r].push(b);
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
  

function push(object, r, parent, child, parentText, childText) {
  child.btn = document.createElement('button');
  child.btn.textContent = childText; 
  child.btn.className = `answer-button-${getType(parent)}`;
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
  questionText.textContent = q.text;
  nextButton.disabled = !isPicked(q);
  answersContainer.innerHTML = '';
  const dA = {};
  const dB = {};
  const dC = {};
  for (let r1 = 1; r1 < 10; r1++) {
    Object.keys(q.answers).forEach(aText => {
      const a = q.answers[aText];
      if (a.row == r1) {
        const text = qPresent;
        push(dA,r1,q,a,text,aText);
        if ('answers' in a) {
          for (let r2 = 1; r2 < 10; r2++) {
            Object.keys(a.answers).forEach(bText => {
              const b = a.answers[bText];
              if (b.row == r2) {
                const text = `${qPresent}:${aText}`;
                push(dB,r2,a,b,text,bText);
                if ('answers' in b) {
                  for (let r3 = 1; r3 < 10; r3++) {
                    Object.keys(b.answers).forEach(cText => {
                      const c = b.answers[cText];
                      if (c.row == r3) {
                        const text = `${qPresent}:${aText}:${bText}`;
                        push(dC,r3,b,c,text,cText);
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
  
















