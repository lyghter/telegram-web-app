function handleOrientation() {
  const app = document.querySelector('.app-container');
  const root = document.documentElement;

  // 1. Скрываем контейнер
  app.style.visibility = 'hidden';

  // 2. Расчёты
  if (window.innerWidth > window.innerHeight) {
    // альбомная ориентация
    app.style.transform = 'rotate(-90deg) scale(1)';
    root.style.setProperty('--vw', window.innerHeight + 'px');
    root.style.setProperty('--vh', window.innerWidth + 'px');
  } else {
    // портретная ориентация
    app.style.transform = 'rotate(0deg)';
    root.style.setProperty('--vw', window.innerWidth + 'px');
    root.style.setProperty('--vh', window.innerHeight + 'px');
  }

  // 3. Показываем контейнер после расчётов
  requestAnimationFrame(() => {
    app.style.visibility = 'visible';
  });
}

window.addEventListener('resize', handleOrientation);
window.addEventListener('orientationchange', handleOrientation);
handleOrientation();

//window.addEventListener("load", () => {
//  fitTextByLongestLine(qT, qSize);
//  const aa = document.querySelectorAll('#answersContainer .answer-button');
//  aa.forEach(a => fitTextToButton(a, aSize));
//  fitTextToButton(bB, nSize);
//  fitTextToButton(nB, nSize);
//}); 

//window.addEventListener("resize", () => {
//  fitTextByLongestLine(qT, qSize);
//  const aa = document.querySelectorAll('#answersContainer .answer-button');
//  aa.forEach(a => fitTextToButton(a, aSize));
//  fitTextToButton(bB, nSize);
//  fitTextToButton(nB, nSize);
//}); 
//
//function fitTextByLongestLine(el, size) {
//  const style = window.getComputedStyle(el);
//  let fontSize = parseFloat(style.fontSize);
//  const minFont = size[0];
//  const maxFont = size[1] || fontSize;
//
//  const tempContainer = document.createElement("div");
//  tempContainer.style.position = "absolute";
//  tempContainer.style.visibility = "hidden";
//  tempContainer.style.width = (el.offsetWidth / window.innerWidth)*100 + "vw";
//  tempContainer.style.font = style.font;
//  tempContainer.style.lineHeight = style.lineHeight;
//  tempContainer.style.whiteSpace = "pre"; // сохраняем заранее заданные переносы
//  tempContainer.style.wordBreak = "normal";
//  document.body.appendChild(tempContainer);
//
//  const lines = el.textContent.split('\n');
//
//  let fits = false;
//
//  // Уменьшаем шрифт, если не помещается
//  while (!fits && fontSize > minFont) {
//    tempContainer.innerHTML = '';
//    tempContainer.style.fontSize = fontSize + "vw";
//
//    fits = true;
//    lines.forEach(line => {
//      const span = document.createElement("span");
//      span.textContent = line;
//      tempContainer.appendChild(span);
//      if (span.offsetWidth > el.offsetWidth) fits = false;
//    });
//
//    if (!fits) fontSize -= 0.5;
//  }
//
//  // Увеличиваем шрифт, если есть место
//  let canIncrease = true;
//  while (canIncrease && fontSize < maxFont) {
//    fontSize += 0.5;
//    tempContainer.innerHTML = '';
//    tempContainer.style.fontSize = fontSize + "vw";
//
//    canIncrease = true;
//    lines.forEach(line => {
//      const span = document.createElement("span");
//      span.textContent = line;
//      tempContainer.appendChild(span);
//      if (span.offsetWidth > el.offsetWidth) canIncrease = false;
//    });
//
//    if (!canIncrease) fontSize -= 0.5; // откат до последнего подходящего размера
//  }
//
//  el.style.fontSize = fontSize + "vw";
//  document.body.removeChild(tempContainer);
//}

//function fitTextToButton(button, size) {
//  const span = document.createElement("span");
//  span.style.visibility = "hidden";
//  span.style.whiteSpace = "nowrap";
//  span.style.position = "absolute";
//  span.style.font = window.getComputedStyle(button).font;
//  span.textContent = button.textContent;
//  document.body.appendChild(span);
//
//  const parentWidth = (button.offsetWidth / window.innerWidth) * 100;
//  const style = window.getComputedStyle(button);
//  let fontSize = parseFloat(style.fontSize);
//
//  const minFont = size[0];
//  const maxFont = size[1]; // ограничим разумный максимум
//
//  // если текст не помещается — уменьшаем шрифт
//  while ((span.offsetWidth/window.innerWidth)*100 > parentWidth - 4 && fontSize > minFont) {
//    fontSize -= 0.5;
//    span.style.fontSize = fontSize + "vw";
//  }
//  // если текст влезает и есть место — увеличиваем шрифт
//  while ((span.offsetWidth/window.innerWidth)*100 < parentWidth - 6 && fontSize < maxFont) {
//    fontSize += 0.5;
//    span.style.fontSize = fontSize + "vw";
//    if ((span.offsetWidth/window.innerWidth)*100 > parentWidth - 4) {
//      fontSize -= 0.5;
//      break;
//    }
//  }
//
//  button.style.fontSize = fontSize + "vw";
//  span.remove();
//  button.style.visibility = 'visible';
//}