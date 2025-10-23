

const ver = 'v53';

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
        'Central': { row:1, type:'single', answers: {
          'DR Congo': { row:1, name:'CD 109' },
          'Angola': { row:1, name:'AO 38' },
          'Cameroon': { row:1, name:'CM 29' },
            'Chad': { row:2, name:'TD 20' },
            'Congo': { row:2, name:'CG 6' },
            'CAR': { row:2, name:'CF 5.3' },
            'Gabon': { row:2, name:'GA 2.4' },
          'Equatorial Guinea': { row:3, name:'GQ 1.9' },
          'São Tomé and Príncipe': { row:3, name:'ST 0.2' },
        } },
        'East': { row:1, type:'single', answers: {
            'Ethiopia': { row:2, name:'ET 132' },
          'Tanzania': { row:2, name:'TZ 68.6' },
          'Kenya': { row:2, name:'KE 56.4' },
          'Uganda': { row:2, name:'UG 50' }, 
            'Mozambique': { row:3, name:'MZ 34.6' }, 
            'Madagascar': { row:3, name:'MG 31.9' },
            'Malawi': { row:3, name:'MW 21.7' }, 
            'Zambia': { row:3, name:'ZM 21.3' },
          'Somalia': { row:4, name:'SO 19' },
          'Zimbabwe': { row:4, name:'ZW 16.6' },
          'Rwanda': { row:4, name:'RW 14.3' },
          'Burundi': { row:4, name:'BI 14.1' },
            'S. Sudan': { row:5, name:'SS 11.9' },
            'Eritrea': { row:5, name:'ER 3.5' },
            'Mauritius': { row:5, name:'MU 1.3' }, 
            'Djibouti': { row:5, name:'DJ 1.2' },
          'Comoros': { row:6, name:'KM 0.9' },
          'Réunion': { row:6, name:'RE (FR) 0.9' },
          'Mayotte': { row:6, name:'YT (FR) 0.3' },
          'Seychelles': { row:6, name:'SC 0.1' },
        } },
        'North': { row:1, type:'single', answers: {
            'Egypt': { row:1, name:'EG 116.5' },
            'Sudan': { row:1, name:'SD 50.5' },
            'Algeria': { row:1, name:'DZ 46.8' },
            'Morocco': { row:1, name:'MA 38.1' },
              'Tunisia': { row:2, name:'TN 12.3' },
              'Libya': { row:2, name:'LY 7.4' },
              'Mauritania': { row:2, name:'MR 5.2' },
              'SADR': { row:2, name:'EH (disputed territory) 0.5' }, 
        } },
        'South': { row:1, type:'single', answers: {
          'Republic of South Africa': { row:1, name:'ZA 63' },
            'Namibia': { row:2, name:'NA 3.0' },
            'Botswana ': { row:2, name:'BW 2.5' },
            'Lesotho': { row:2, name:'LS 2.3' },
            'Eswatini': { row:2, name:'SZ (Swaziland) 1.2' },
        } },
        'West': { row:1, type:'single', answers: {
          'Nigeria': { row:1, name:'NG 232.7' },
            'Ghana': { row:2, name:'GH 34.4' },
            'Côte d’Ivoire': { row:2, name:'CI 31.9' },
            'Burkina Faso': { row:2, name:'BF 23.6' },
          'Niger': { row:3, name:'NE 27.0' },
          'Mali': { row:3, name:'ML 24.5' },
          'Senegal': { row:3, name:'SN 18.5' },
          'Benin': { row:3, name:'BJ 14.5' },
          'Guinea': { row:3, name:'GN 14.8' },
            'Togo': { row:4, name:'TG 9.5' },
            'Sierra Leone': { row:4, name:'SL 8.6' },
            'Liberia': { row:4, name:'LR 5.4' },
            'Gambia': { row:4, name:'GM 2.8' },
          'Guinea-Bissau': { row:5, name:'GW 2.0' },
          'Cabo Verde': { row:5, name:'CV 0.5' },
          'Saint Helena': { row:5, name:'SH (UK) 0.04' },
        } },
      }},
      'America': { row:1, answers: {
        'Carribean': { row:1, type:'single', answers: {
          'Haiti': { row:1, name:'HT 11.0' },
          'Cuba': { row:1, name:'CU 11.0' },
          'Dominican Rep.': { row:1, name:'DO 10.9' },
            'Puerto Rico': { row:2, name:'PR (US) 3.3' },
            'Jamaica': { row:2, name:'JM 2.8' },
            'Trinidad & Tobago': { row:2, name:'TT 1.5' },
          'Bahamas': { row:3, name:'BS 0.42' },
          'Guadeloupe': { row:3, name:'GP (FR) 0.38' },
          'Martinique': { row:3, name:'MQ (FR) 0.37' },
          'Barbados': { row:3, name:'BB 0.28' },
            'St. Lucia': { row:4, name:'LC 0.18' },
            'Curaçao': { row:4, name:'CW (NE) 0.16' },
            'Grenada': { row:4, name:'GD 0.13' },
            'Aruba': { row:4, name:'AW (NL) 0.11' },
            'Cayman': { row:4, name:'KY (UK) 0.08' },
          'St. Vincent & the Grenadines': { row:5, name:'VC 0.11' },
          'Antigua & Barbuda': { row:5, name:'AG 0.10' },
            'Dominica': { row:6, name:'DM 0.07' },
            'Turks & Caicos': { row:6, name:'TC (UK) 0.06' },
            'Virgin (US)': { row:6, name:'VI (US) 0.10' }, 
            'Virgin (UK)': { row:7, name:'VG (UK) 0.03' },
          'St. Martin (FR)': { row:7, name:'MF (FR part) 0.04' },
          'St. Maarten (NL)': { row:7, name:'SX (NL part) 0.04' },
            'St. Kitts & Nevis': { row:8, name:'KN 0.06' },
            'Caribbean Netherlands': { row:8, name:'BQ (NL) 0.03' },
          'Anguilla': { row:9, name:'AI (UK) 0.02' },
          'St. Barthélemy': { row:9, name:'BL (FR) 0.01' },
          'Montserrat': { row:9, name:'MS (UK) 0.005' },
          
          
          
          
          
            
            
                      
            
          
          
          
          
          
          
          
              
            
          
          
            
            
             
          
          
          
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
        'North': { row:1, type:'single', answers: {
          'United States': { row:1, name:'US 340' },
            'Mexico': { row:2, name:'MX 130.9' },
            'Canada': { row:2, name:'CA 41.3' },
        'Guatemala': { row:3, name:'GT 18.4' },
        'Honduras': { row:3, name:'HN 10.8' },
        'Nicaragua': { row:3, name:'NI 6.9' },
          'El Salvador': { row:4, name:'SV 6.3' },
          'Costa Rica': { row:4, name:'CR 5.0' },
          'Panama': { row:4, name:'PA 4.5' },
          'Belize': { row:4, name:'BZ 0.4' },
        'Bermuda': { row:5, name:'BM (UK) 0.064' },
        'Greenland': { row:5, name:'GL (Denmark) 0.056' },
        'St. Pierre & Miquelon': { row:5, name:'PM (France) 0.005' },
        } },
        'South': { row:1, type:'single', answers: {
          'Brazil': { row:1, name:'BR 212' },
            'Colombia': { row:2, name:'CO 52.9' },
            'Argentina': { row:2, name:'AR 45.7' },
            'Peru': { row:2, name:'PE 34.2' },  
            'Venezuela': { row:2, name:'VE 28.4' },  
          'Chile': { row:3, name:'CL 19.8' },
          'Ecuador': { row:3, name:'EC 18.1' },
          'Bolivia': { row:3, name:'BO 12.4' },
          'Paraguay': { row:3, name:'PY 6.9' }, 
          'Uruguay': { row:3, name:'UY 3.4' },
            'Guyana': { row:4, name:'GY 0.8' },
            'Suriname': { row:4, name:'SR 0.6' },
            'Fr. Guiana': { row:4, name:'GF (France) 0.3' },
            'Falkland Is.': { row:4, name:'FK (UK) 0.003' }, 
            
            
             
                    
                
              
              
        } },
      } },
      'Asia': { row:1, answers: {
        'Central': { row:1, type:'single', answers: {
          'Uzbekistan': { row:1, name:'UZ 36.4' }, 
          'Kazakhstan': { row:1, name:'KZ 20.6' },
            'Tajikistan': { row:2, name:'TJ 10.6' },
            'Kyrgyzstan': { row:2, name:'KG 7.2' },
            'Turkmenistan': { row:2, name:'TM 7.5' },
        } },
        'East': { row:1, type:'single', answers: {
          'China': { row:1, name:'CN 1409' },
            'Japan': { row:2, name:'JP 124' },
            'S. Korea': { row:2, name:'KR 51.8' },
            'N. Korea': { row:2, name:'KP 26.5' },
            'Taiwan': { row:2, name:'TW 23.4' },  
            'Mongolia': { row:2, name:'MN 3.5' },  
        } },   
        'North': { row:1, type:'single', answers: {
          'Russia': { row:1, name:'RU' },
        } },
        'South': { row:1, type:'single', answers: {
          'India': { row:1, name:'IN 1451' },
            'Pakistan': { row:2, name:'PK 241.5' },
            'Bangladesh': { row:2, name:'BD 173.6' },
            'Afghanistan': { row:2, name:'AF 42.7' },
          'Nepal': { row:3, name:'NP 29.7' },
          'Sri Lanka': { row:3, name:'LK 21.9' },
          'Bhutan': { row:3, name:'BT 0.8' },  
          'Maldives': { row:3, name:'MV 0.5' },
        } },
        'Southeast': { row:1, type:'single', answers: {
          'Indonesia': { row:1, name:'ID 283' },  
          'Philippines': { row:1, name:'PH 115.8' },
          'Vietnam': { row:1, name:'VN 101' },
            'Thailand': { row:2, name:'TH 71.7' },
            'Myanmar': { row:2, name:'MM 54.5' },
            'Malaysia': { row:2, name:'MY 35.6' },
            'Cambodia': { row:2, name:'KH 17.6' },
          'Brunei': { row:3, name:'BN 0.5' },
          'Laos': { row:3, name:'LA 7.8' },
          'Singapore': { row:3, name:'SG 6.0' },
          'Timor-Leste': { row:3, name:'TL 1.4' },
            
            
          
          
          
        } },
        'West': { row:1, answers: {
          'Middle East': { row:1, type:'single', answers: {
            'Iran': { row:1, name:'IR 89.6' },
            'Turkey': { row:1, name:'TR 86.5' },
              'Iraq': { row:2, name:'IQ 46.0' },
              'Saudi Arabia': { row:2, name:'SA 37.5' },
              'Yemen': { row:2, name:'YE 34.0' }, 
              'Syria': { row:2, name:'SY 23.0' },
            'Jordan': { row:3, name:'JO 11.5' },
            'UAE': { row:3, name:'AE 10.0' },
            'Israel': { row:3, name:'IL 9.9' },
            'Lebanon': { row:3, name:'LB 5.5' },
              'Palestine': { row:4, name:'PS 5.4' },
              'Oman': { row:4, name:'OM 4.7' },
              'Kuwait': { row:4, name:'KW 4.3' },
              'Qatar': { row:4, name:'QA 3.0' },
              'Bahrain': { row:4, name:'BH 1.6' },
          }}, 
          'South Caucasus': { row:1, type:'single', answers: {
            'Azerbaijan': { row:1, name:'AZ 10.4' },
              'Georgia': { row:2, name:'GE 3.7' },
              'Armenia': { row:2, name:'AM 2.8' },
              'Abkhazia': { row:2, name:'ABK 0.25' },
              'South Ossetia': { row:2, name:'SO 0.06' },
          }},           
        } },
      } },
      'Europe': { row:1, answers: {
        'Eastern': { row:1, type:'single', answers: {
          'Russia': { row:1, name:'RU 143' },
            'Poland': { row:2, name:'PL 36.6' },
            'Ukraine': { row:2, name:'UA 37.8' },
            'Romania': { row:2, name:'RO 19.1' },
          'Czechia': { row:3, name:'CZ 10.8' },  
          'Hungary': { row:3, name:'HU 9.6' },
          'Belarus': { row:3, name:'BY 9' },
          'Bulgaria': { row:3, name:'BG 6.4' },
            'Slovakia': { row:4, name:'SK 5.4' },
            'Moldova': { row:4, name:'MD 2.4' },
            'Pridnestrovie': { row:4, name:'PL 0.4' },
        } },
        'Northern': { row:1, type:'single', answers: {
          'Baltic': { row:1, type:'single', answers:{
            'Lithuania': { row:3, name:'LT 2.9' },
            'Latvia': { row:3, name:'LV 1.8' },
            'Estonia': { row:3, name:'EE 1.3' },
          } }, 
          'British Isles': { row:1, type:'single', answers:{
            'United Kingdom': { row:1, name:'GB 69' },
            'Ireland': { row:1, name:'IE 5.3' },
            //'Faroe Is.': { row:2, name:'FO 0.05 (Denmark)' },
          } }, 
          
          'Nordic': { row:1, type:'single', answers:{
            'Sweden': { row:1, name:'SE 10.6' },
            'Denmark': { row:1, name:'DK 5.9' }, 
            'Norway': { row:1, name:'NO 5.6' },
            'Finland': { row:1, name:'FI 5.6' },
            'Iceland': { row:1, name:'IS 0.4' },
          } },
        } },
        'Southern': { row:1, type:'single', answers: {
          'Balkans': { row:1, type:'single', answers:{
            'Greece': { row:1, name:'GR 10.4' },
            'Serbia': { row:1, name:'RS 6.6' },
              'Croatia': { row:2, name:'HR 3.9' },
              'Bosnia & Herzegovina': { row:2, name:'BA 3.2' },
              'Albania': { row:2, name:'AL 2.7' },
            'Slovenia': { row:3, name:'SI 2.1' },
            'North Macedonia': { row:3, name:'MK 1.8' },
            'Montenegro': { row:3, name:'ME 0.6' }, 
          } }, 
          'Cyprus': { row:1, type:'single', answers: {
            'Republic of Cyprus': { row:1, name:'CY 0.9' },
            'Turkish Republic of Northern Cyprus': { row:2, name:'CY2 0.4' },
          }},
          'Iberia': { row:1, type:'single', answers:{
            'Spain': { row:1, name:'ES 48.9' },
            'Portugal': { row:2, name:'PT 10.7' },
            'Andorra': { row:2, name:'AD 0.08' },
            'Gibraltar': { row:2, name:'GI 0.04' }, 
          } }, 
          'Italy': { row:1, name:'IT 59' },
          //'San Marino': { row:4, name:'GI 0.03' }, 
          'Malta': { row:1, name:'MT 0.6' },        
        } },
        'Western': { row:1, type:'single', answers: {
          'Germany': { row:1, name:'DE 83.5' },
          'France': { row:1, name:'FR 68.5' },
            'Netherlands': { row:2, name:'NL 17.9' }, 
            'Belgium': { row:2, name:'BE 11.8' },
            'Austria': { row:2, name:'AT 9.2' },
          'Switzerland': { row:3, name:'CH 9.0' },
          'Luxembourg': { row:3, name:'LU 0.67' },
          'Liechtenstein': { row:3, name:'LI 0.04' },         
        } },        
      } },
      'Oceania': { row:1, answers: {
        'Australia': { row:1, name:'AU 27.0' },
          'Papua New Guinea': { row:2, name:'PG 10.3' },
          'New Zealand': { row:2, name:'NZ 5.3' },
          'Fiji': { row:2, name:'FJ 0.93' },
        'Solomon': { row:3, name:'SB 0.74' },
        'Vanuatu': { row:3, name:'VU 0.33' },
        'French Polynesia': { row:3, name:'PF (FR) 0.30' },
          'New Caledonia': { row:4, name:'NC (FR) 0.27' },
          'Samoa': { row:4, name:'WS 0.22' },
          'Guam': { row:4, name:'GU (US) 0.17' },
          'Kiribati': { row:4, name:'KI 0.13' },
        'Micronesia': { row:5, name:'FM 0.11' },
        'Tonga': { row:5, name:'TO 0.10' },
        'Marshall': { row:5, name:'MH 0.06' },
        'N. Mariana': { row:5, name:'MP (US) 0.05' },
          'American Samoa': { row:6, name:'AS (US) 0.05' },
          'Palau': { row:6, name:'PW 0.02' },
          'Nauru': { row:6, name:'NR 0.013' },
        'Wallis & Futuna': { row:7, name:'WF (FR) 0.012' },
        'Tuvalu': { row:7, name:'TV 0.011' },
        'Pitcairn': { row:7, name:'PN (UK) 0.00005' },
        //'Pacific Islands': { row:1, type:'single', answers: {
        //  'TK': { row:1, name:'Tokelau (NZ)' },
        //  'NU': { row:1, name:'Niue (NZ)' }, 
        //  'NF': { row:1, name:'Norfolk Island (Australia)' }, 
        //} },
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
  
















