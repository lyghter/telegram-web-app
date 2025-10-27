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


const profile0 = {
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
if (tg.isVersionAtLeast('8.0')) {
  tg.requestFullscreen();
  if (!tg.isFullscreen) {
    console.log('Fallback');
    tg.expand();
  }
  tg.onEvent('safeAreaChanged', function() {
      const insets = tg.safeAreaInset;
      //document.body.style.paddingTop = insets.top + 'px';
      //document.body.style.paddingBottom = insets.bottom + 'px';
      //document.body.style.paddingLeft = insets.left + 'px';
      //document.body.style.paddingRight = insets.right + 'px';
  });
  tg.onEvent('fullscreenChanged', function() {
        console.log('Fullscreen включен:', tg.isFullscreen);
        if (!tg.isFullscreen) tg.expand();  
    });
  tg.onEvent('fullscreenFailed', function(event) {
      console.log('Ошибка fullscreen:', event.error);
      tg.expand(); 
  });
  tg.lockOrientation();
} else {
  tg.expand();
}




//"I'm global nomad": { row:5, next:'q'},
            //"Prefer not to say": { row:1, next:'q' }, 
        let x;
        if (!('type' in q)) {
          x = 'single';
        } else {
          if (q.type === 'single') {
            x = 'single';
          } else {
            x = 'multi';
          }
        } 
        a.btn.className = `answer-button-${x}`;


text: 'Which country\ndo you live in?',
  yourAfrica: {
    text: 'Which part of Africa\ndo you live in?',
    type: 'multi',
    answers: {
      'Eastern Africa': { row:1, next:'yourEasternAfrica'},
      'Middle Africa': { row:2, next:'yourMiddleAfrica'},

      "I prefer not to say": { row:6, next:'q' },  
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
 
    },
  },
  yourEurasia: {
    text: 'Which part of Eurasia\ndo you live in?',
    type: 'single',
    answers: {
 
    },
  },
  yourOceania: {
    text: 'Which part of Oceania\ndo you live in?',
    type: 'single',
    answers: {
      "I prefer not to say": { row:6, next:'q' },  
    },
  },



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
    //text: 'Where are you from?',
    text: 'Where do you live?',
    //text: 'Which part of the world\ndo you live in?',
    type: 'single',
    //answers: {
    //  "I prefer not to say": { row:5, next:['yourOceania'] },
    //  'North America': { row:1, next:['yourAmerica'] },
    //  'South America': { row:1, next:['yourAmerica'] },
    //  'Africa': { row:2, next:['yourAfrica']},
    //  'Eurasia': { row:2, next:['yourEurope']},
    //  //'Asia': { row:2, next:['yourAsia'] },
    //  'Middle East': { row:3, next:['yourMENA']},
    //  'Caucasus': { row:3, next:['yourMENA']},
    //  'Australia': { row:4, next:['yourOceania'] },
    //  'N.Zeland': { row:4, next:['yourOceania'] },
    //  'Pacific': { row:4, next:['yourAfrica']},
    //  "I'm global nomad": { row:5, next:['yourAfrica']},
    answers: {
      'Africa': { row:4, next:['q']},
      'America': { row:2, next:['yourAmerica'] },
      'Eurasia': { row:3, next:['yourEurope']},
      'Oceania': { row:5, next:['yourOceania'] },
      "I'm global nomad": { row:6, next:['yourAfrica']},
      "I prefer not to say": { row:1, next:['yourOceania'] },  
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