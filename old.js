
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