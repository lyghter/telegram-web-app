

const ver = 'v52';

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
  whereDoYouLive: {
    text: 'Your location',
    type: 'single',
    answers: { 
      'Africa': { row:1, answers: {
        'East': { row:1, type:'single', answers: {
          'Burundi': { row:1, name:'BI' },
          'Comoros': { row:1, name:'KM' },
          'Djibouti': { row:1, name:'DJ' },
          'Eritrea': { row:1, name:'ER' },
            'Ethiopia': { row:2, name:'ET' },
            'Kenya': { row:2, name:'KE' },
            'Madagascar': { row:2, name:'MG' },
            'Malawi': { row:2, name:'MW' },          
          'Mauritius': { row:3, name:'MU' }, 
          'Mayotte': { row:3, name:'YT (FR)' },
          'Mozambique': { row:3, name:'MZ' }, 
          'Réunion': { row:3, name:'RE (FR)' },
            'Rwanda': { row:4, name:'RW' },
            'Seychelles': { row:4, name:'SC' },
            'Somalia': { row:4, name:'SO' },
            'South Sudan': { row:4, name:'SS' }, 
          'Tanzania': { row:5, name:'TZ' },
          'Uganda': { row:5, name:'UG' },  
          'Zambia': { row:5, name:'ZM' },
          'Zimbabwe': { row:5, name:'ZW' },
        } },
        'Middle': { row:1, type:'single', answers: {
          'Angola': { row:1, name:'AO' },
          'Cameroon': { row:1, name:'CM' },
          'Central African Republic': { row:1, name:'CF' },
            'Chad': { row:2, name:'TD' },
            'Congo (Dem. Rep.)': { row:2, name:'Democratic Republic of the Congo CD' },
            'Congo (Rep.)': { row:2, name:'Republic of the Congo CG' },
          'Equ. Guinea': { row:3, name:'GQ' },
          'Gabon': { row:3, name:'GA' },
          'São Tomé and Príncipe': { row:3, name:'ST' },
            
        } },
        'North': { row:1, type:'single', answers: {
          'Algeria': { row:1, name:'DZ' },
          'Egypt': { row:1, name:'EG' },
          'Libya': { row:1, name:'LY' },
          'Mauritania': { row:1, name:'MR' },
            'Morocco': { row:2, name:'MA' },
            'SADR': { row:2, name:'EH (disputed territory)' },
            'Sudan': { row:2, name:'SD' },
            'Tunisia': { row:2, name:'TN' },
        } },
        'South': { row:1, type:'single', answers: {
          'Botswana ': { row:1, name:'BW' },
          'Eswatini': { row:1, name:'SZ (Swaziland)' },
          'Lesotho': { row:1, name:'LS' },
          'Namibia': { row:1, name:'NA' },
          'RSA': { row:1, name:'ZA' },
        } },
        'West': { row:1, type:'single', answers: {
          'Benin': { row:1, name:'BJ' },
          'Burkina Faso': { row:1, name:'BF' },
          'Cabo Verde': { row:1, name:'CV' },
            'Côte d’Ivoire': { row:2, name:'CI' },
            'Gambia': { row:2, name:'GM' },
            'Ghana': { row:2, name:'GH' },
            'Guinea': { row:2, name:'GN' },
          'Guinea-Bissau': { row:3, name:'GW' },
          'Liberia': { row:3, name:'LR' },
          'Mali': { row:3, name:'ML' },

          'Niger': { row:3, name:'NE' },
          'Nigeria': { row:3, name:'NG' },
            'Saint Helena': { row:4, name:'SH (UK)' },
            'Senegal': { row:4, name:'SN' },
            'Sierra Leone': { row:4, name:'SL' },
            'Togo': { row:4, name:'TG' },
        } },
      }},
      'America': { row:1, answers: {
        'Carribean': { row:1, type:'single', answers: {
          'Antigua & Barbuda': { row:1, name:'AG' },
          'Anguilla': { row:1, name:'AI (UK)' },
          'Aruba': { row:1, name:'AW (NL)' },
          'Bahamas': { row:1, name:'BS' },
            'Barbados': { row:2, name:'BB' },
            'Bermuda': { row:2, name:'BM (UK)' },
            'Caribbean Netherlands': { row:2, name:'BQ (NL)' },
          'Cayman Is.': { row:3, name:'KY (UK)' },
          'Cuba': { row:3, name:'CU' },
          'Curaçao': { row:3, name:'CW (NE)' },
          'Dominica': { row:3, name:'DM' },
            'Dominican Rep.': { row:4, name:'DO' },
            'Grenada': { row:4, name:'GD' },
            'Guadeloupe': { row:4, name:'GP (FR)' },          
            'Haiti': { row:4, name:'HT' },
          'Jamaica': { row:5, name:'JM' },
          'Martinique': { row:5, name:'MQ (FR)' },
          'Montserrat': { row:5, name:'MS (UK)' },
          'Puerto Rico': { row:5, name:'PR (US)' },
          'St. Barthélemy': { row:6, name:'BL (FR)' },
          'St. Kitts & Nevis': { row:6, name:'KN' },
          'St. Lucia': { row:6, name:'LC' },
            'St. Maarten (Dutch part)': { row:8, name:'SX (NL part)' },  
            'St. Martin (French part)': { row:8, name:'MF (FR part)' }, 
          'St. Vincent & the Grenadines': { row:9, name:'VC' },
          'Trinidad & Tobago': { row:9, name:'TT' },
            'Turks & Caicos Is.': { row:10, name:'TC (UK)' },
            'Virgin Is. (UK)': { row:10, name:'VG (UK)' },
            'Virgin Is. (US)': { row:10, name:'VI (US)' },  
          
          
          
          //'AG': { row:1, name:'Antigua and Barbuda' },
          //'AI': { row:1, name:'Anguilla (UK)' },
          //'AW': { row:1, name:'Aruba (Netherlands)' },
          //'BS': { row:1, name:'Bahamas' },
          //'BB': { row:1, name:'Barbados' },
          //'BM': { row:1, name:'Bermuda (UK)' },
          //'BQ': { row:1, name:'Bonaire, Sint Eustatius and Saba (Netherlands)' },
          //'VG': { row:1, name:'British Virgin Islands (UK)' },
          //'KY': { row:1, name:'Cayman Islands (UK)' },
          //'CU': { row:1, name:'Cuba' },
          //'CW': { row:1, name:'Curaçao (Netherlands)' },
          //'DM': { row:1, name:'Dominica' },
          //'DO': { row:1, name:'Dominican Republic' },
          //'GD': { row:1, name:'Grenada' },
          //'GP': { row:1, name:'Guadeloupe (France)' },
          //'HT': { row:1, name:'Haiti' },
          //'JM': { row:1, name:'Jamaica' },
          //'MQ': { row:1, name:'Martinique (France)' },
          //'MS': { row:1, name:'Montserrat (UK)' },
          //'PR': { row:1, name:'Puerto Rico (US)' },
          //'BL': { row:1, name:'Saint Barthélemy (France)' },
          //'KN': { row:1, name:'Saint Kitts and Nevis' },
          //'LC': { row:1, name:'Saint Lucia' },
          //'MF': { row:1, name:'Saint Martin (French part)' },   
          //'VC': { row:1, name:'Saint Vincent and the Grenadines' },
          //'SX': { row:1, name:'Sint Maarten (Dutch part)' },  
          //'TT': { row:1, name:'Trinidad and Tobago' },
          //'TC': { row:1, name:'Turks and Caicos Islands (UK)' },  
          //'VI': { row:1, name:'United States Virgin Islands (US)' },
          
        } },
        'Central': { row:1, type:'single', answers: {
          'Belize': { row:1, name:'BZ' },
          'Costa Rica': { row:1, name:'CR' },
          'El Salvador': { row:1, name:'SV' },
          'Guatemala': { row:1, name:'GT' },
          'Honduras': { row:2, name:'HN' },
          'Mexico': { row:2, name:'MX' },
          'Nicaragua': { row:2, name:'NI' },
          'Panama': { row:2, name:'PA' },
          
        } },
        'North': { row:1, type:'single', answers: {
          'Bermuda': { row:1, name:'BM (UK)' },
          'Canada': { row:1, name:'CA' },
          'Greenland': { row:1, name:'GL (Denmark)' },
          'St. Pierre & Miquelon': { row:2, name:'PM (France)' },
          'United States': { row:2, name:'US' },        
        } },
        'South': { row:1, type:'single', answers: {
          'Argentina': { row:1, name:'AR' },
          'Bolivia': { row:1, name:'BO' },
          'Brazil': { row:1, name:'BR' },
          'Chile': { row:2, name:'CL' },
            'Colombia': { row:2, name:'CO' },
            'Ecuador': { row:2, name:'EC' },
            'Falkland Is.': { row:2, name:'FK (UK)' }, 
          'Fr. Guiana': { row:3, name:'GF (France)' },
          'Guyana': { row:3, name:'GY' },
          'Paraguay': { row:3, name:'PY' },  
          'Peru': { row:3, name:'PE' },          
            'Suriname': { row:4, name:'SR' },  
            'Uruguay': { row:4, name:'UY' },
            'Venezuela': { row:4, name:'VE' },  
        } },
      } },
      'Asia': { row:1, answers: {
        'East': { row:1, type:'single', answers: {
          'China': { row:1, name:'CN' },
          'Japan': { row:1, name:'JP' },
          'Mongolia': { row:1, name:'MN' },  
          'North Korea': { row:2, name:'KP' },
          'South Korea': { row:2, name:'KR' },
          'Taiwan': { row:2, name:'TW' },  
        } },
        'Central': { row:1, type:'single', answers: {
          'Kazakhstan': { row:1, name:'KZ' },
          'Kyrgyzstan': { row:1, name:'KG' },
          'Tajikistan': { row:1, name:'TJ' },  
            'Turkmenistan': { row:2, name:'TM' },
            'Uzbekistan': { row:2, name:'UZ' }, 
        } },       
        'North': { row:1, type:'single', answers: {
          'Russia': { row:1, name:'RU' },
        } },
        'South': { row:1, type:'single', answers: {
          'Afghanistan': { row:1, name:'AF' },
          'Bangladesh': { row:1, name:'BD' },
          'Bhutan': { row:1, name:'BT' },  
          'India': { row:1, name:'IN' },
          //'Iran': { row:2, name:'IR' },
          'Maldives': { row:2, name:'MV' },
          'Nepal': { row:2, name:'NP' },
          'Pakistan': { row:2, name:'PK' },
          'Sri Lanka': { row:2, name:'LK' },
          
        } },
        'Southeast': { row:1, type:'single', answers: {
          'Brunei': { row:1, name:'BN' },
          'Cambodia': { row:1, name:'KH' },
          'Indonesia': { row:1, name:'ID' },  
          'Laos': { row:1, name:'LA' },
            'Malaysia': { row:2, name:'MY' },
            'Myanmar': { row:2, name:'MM' },
            'Philippines': { row:2, name:'PH' },
            'Singapore': { row:3, name:'SG' },
          'Thailand': { row:3, name:'TH' },
          'Timor-Leste': { row:3, name:'TL' },
          'Vietnam': { row:3, name:'VN' },
        } },
        'West': { row:1, type:'single', answers: {
          'Armenia': { row:1, name:'AM' },
          'Azerbaijan': { row:1, name:'AZ' },
          'Bahrain': { row:1, name:'BH' },  
          'Cyprus': { row:1, name:'CY' },
            'Cyprus (TRNC)': { row:2, name:'CY2' },
            'Georgia': { row:2, name:'GE' },
            'Iraq': { row:2, name:'IQ' },
            'Israel': { row:2, name:'IL' },
            'Jordan': { row:2, name:'JO' },
          'Kuwait': { row:3, name:'KW' },
          'Lebanon': { row:3, name:'LB' },
          'Oman': { row:3, name:'OM' },
          'Palestine': { row:3, name:'PS' },
          'Qatar': { row:3, name:'QA' },
            'Saudi Arabia': { row:4, name:'SA' },
            'Syria': { row:4, name:'SY' },
            'Turkey': { row:4, name:'TR' },
            'UAE': { row:4, name:'AE' },
            'Yemen': { row:4, name:'YE' }, 
        } },
      } },
      'Europe': { row:1, answers: {
        'Eastern': { row:1, type:'single', answers: {
          'Belarus': { row:1, name:'BY' },
          'Bulgaria': { row:1, name:'BG' },
          'Czechia': { row:1, name:'CZ' },  
          'Hungary': { row:1, name:'HU' },
            'Moldova': { row:2, name:'MD' },
            'PMR': { row:2, name:'PL' },
            'Poland': { row:2, name:'PL' },
            'Romania': { row:2, name:'RO' },
          'Russia': { row:3, name:'RU' },
          'Slovakia': { row:3, name:'SK' },
          'Ukraine': { row:3, name:'UA' },
        } },
        'Northern': { row:1, type:'single', answers: {
          'United Kingdom': { row:1, name:'GB' },
          'Denmark': { row:2, name:'DK' }, 
          'Estonia': { row:2, name:'EE' },
          'Faroe Is.': { row:2, name:'FO' },  
          'Finland': { row:2, name:'FI' },
          'Iceland': { row:2, name:'IS' },
            'Ireland': { row:3, name:'IE' },
            'Latvia': { row:3, name:'LV' },
            'Lithuania': { row:3, name:'LT' },
            'Norway': { row:3, name:'NO' },
            'Sweden': { row:3, name:'SE' },
        } },
        'Southern': { row:1, type:'single', answers: {} },
        'Western': { row:1, type:'single', answers: {} },        
      } },
      'Oceania': { row:1, answers: {
        //'Australia': { row:1, next:'yourAustralia' },
        //'New Zealand': { row:4, next:'yourNewZealand' },
        'Pacific Islands': { row:1, type:'single', answers: {
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
  //addSVG(child.btn, childText, 16);
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
  //addSVG(questionText, q.text);
  questionText.textContent = q.text;
  nextButton.disabled = !isPicked(q);
  answersContainer.innerHTML = '';
  const dA = {};
  const dB = {};
  const dC = {};
  for (let r1 = 1; r1 <= maxRow; r1++) {
    Object.keys(q.answers).forEach(aText => {
      const a = q.answers[aText];
      if (a.row == r1) {
        const text = qPresent;
        push(dA,r1,q,a,text,aText);
        if ('answers' in a) {
          for (let r2 = 1; r2 <= maxRow; r2++) {
            Object.keys(a.answers).forEach(bText => {
              const b = a.answers[bText];
              if (b.row == r2) {
                const text = `${qPresent}:${aText}`;
                push(dB,r2,a,b,text,bText);
                if ('answers' in b) {
                  for (let r3 = 1; r3 <= maxRow; r3++) {
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
  
















