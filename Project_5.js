document.addEventListener(
  'DOMContentLoaded',
  () => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const alert_color_code = $('.alert-color_code');
    const blockColor = $('.blockColor');
    const gameTitleEle = $('.game-title');
    const alertH2 = $('.alert-h2');
    const alertNameGame = $('.alert-nameGame');
    const newGame = $('.newGame');
    const limited = $('.limited');
    const number = $('.number');
    const easyGame = $('.easyGame');

    const arrColor = [
      {
        title: 'Red',
        code_color: 'rgb(252, 83, 83)',
      },
      {
        title: 'Blue',
        code_color: 'rgb(83, 111, 252)',
      },
      {
        title: 'Yellow',
        code_color: 'rgb(250, 252, 83)',
      },
      {
        title: 'Most Green',
        code_color: 'rgb(83, 252, 95)',
      },
      {
        title: 'Orange',
        code_color: 'rgb(252, 182, 30)',
      },
      {
        title: 'Most Blue',
        code_color: 'rgb(30, 230, 252)',
      },
      {
        title: 'Pink',
        code_color: 'rgb(252, 30, 252)',
      },
      {
        title: 'Red Most',
        code_color: 'rgb(134, 3, 111)',
      },
      {
        title: 'Purple',
        code_color: 'rgb(152, 30, 252)',
      },
      {
        title: 'Green',
        code_color: 'rgb(0, 128, 13)',
      },
      {
        title: 'Red Bold',
        code_color: 'rgb(97, 34, 57)',
      },
      {
        title: 'Yellow Bold',
        code_color: 'rgb(117, 109, 35)',
      },
    ];
    const alertDesc1 =
      'Congratulations, you have selected the correct color box 😁';
    const alertDesc2 = 'Please choose the appropriate color code 🥰';

    const alertTitle1 = 'Good 😍';
    const alertTitle2 = 'good luck 😎';
    const alertTitle3 = 'great 😘';
    var arrRandomColor = [];
    var arrRandomColor2 = [];
    var isCheckColor = false;
    var isCheckBlock = false;
    var isShowArrEasy = false;
    var isCheckColorEasy = false;
    var isChanClick = false;
    var randomValue = [];
    var randomValueEasy = [];
    i = 0;
    const endNum = 2;
    function endLimit() {
      if (i == 0) {
        limited.innerHTML = `
    You have 2 votes left`;
        number.innerText = '02';
      }
    }

    function limited_number() {
      i += 1;
      console.log(i);
      limited.innerHTML = `
      You have ${endNum - i} votes left`;
      number.innerText = `0${endNum - i}`;
      if (number.innerText === '00') {
        number.innerText = 'You have run out of votes 😯';
        number.style.fontSize = '30px';
        number.style.display = 'block';
        number.style.marginLeft = '0px';
        limited.innerHTML = 'Please choose a new game';
        blockColor.onclick = function (e) {
          e.preventDefault();
        };
      }
    }
    function setDisplayBlock() {
      if (isShowArrEasy) {
        blockColor.style.display = 'flex';
      } else {
        blockColor.style.display = 'block';
      }
    }
    function randomfunc() {
      randomValue = [];
      value = [];
      for (let i = 0; i < arrColor.length; i += 1) {
        value.push(i);
      }
      var i = value.length;

      while (i--) {
        random = Math.floor(Math.random() * (i + 1));
        randomValue.push(value[random]);
        value.splice(random, 1);
      }
      randomValue = randomValue.slice(6);
    }

    function randomColorTitle() {
      randomfunc();
      randomTitle = randomValue[Math.floor(Math.random() * randomValue.length)];
      titleCodeColor = arrColor[randomTitle].code_color;

      checkColorBlock(arrColor[randomTitle].title);

      BeTitleCodeColor = titleCodeColor.slice(0, 3);
      AfTitleCodeColor = titleCodeColor.slice(3);
      titleCodeColor = BeTitleCodeColor.toUpperCase() + AfTitleCodeColor;

      alert_color_code.innerText = titleCodeColor + '🧮';
    }
    function levelGameEasy() {
      easyGame.onclick = function () {
        i = 0;
        isChanClick = false;
        isCheckBlock = true;
        console.log(i);
        // limited_number();
        arrRandomColor2 = arrRandomColor2.splice(6);

        randomValue.forEach((value, index) => {
          if (value == randomTitle) {
            randomValueEasy = randomValue.splice(0, 2);
            for (let i = 0; i < randomValueEasy.length; i++) {
              if (randomValueEasy.length < 3) {
                if (randomValueEasy[i] != randomTitle) {
                  randomValueEasy.push(randomTitle);
                  randomValueEasy.sort();
                }
              }
            }
          }
        });
        const uniqueSet = new Set(randomValueEasy);
        randomValueEasy = [...uniqueSet];
        randomOther = Math.floor(Math.random() * 12);
        if (randomValueEasy.length < 3) {
          randomValueEasy.push(randomOther);
        }

        isShowArrEasy = true;
        isCheckColorEasy = true;

        randomBlockColor();
        setDisplayBlock();
        checkColorBlock(arrColor[randomTitle].title);
      };
    }
    function newGameLoad() {
      newGame.onclick = function () {
        i = 0;
        isCheckBlock = !isCheckBlock;
        isShowArrEasy = false;
        if (i == 0) {
          endLimit();
        }
        if (isChanClick) {
          endLimit();
          console.log(isChanClick);
        }
        // console.log(isChanClick);

        randomfunc();
        arrRandomColor.splice(0);
        randomColorTitle();
        randomBlockColor();
        setDisplayBlock();
        // limited_number(i);
      };
    }

    function randomBlockColor(isCheckColor, arrValue) {
      if (isCheckColorEasy) {
        if (isCheckColor != true) {
          if (randomValueEasy) {
            for (let i = 0; i < arrColor.length; i++) {
              randomValueEasy.forEach((value, index) => {
                if (i == value) {
                  arrRandomColor2.push(arrColor[i]);
                }
              });
            }
          }
        } else {
          if (arrValue) {
            for (let i = 0; i < 3; i++) {
              arrRandomColor2.unshift(arrValue);
            }
          }
          arrRandomColor2.splice(3);
        }
      }

      if (isCheckColor != true) {
        for (let i = 0; i < arrColor.length; i++) {
          randomValue.forEach((value, index) => {
            if (i == value) {
              arrRandomColor.push(arrColor[i]);
            }
          });
        }
      } else {
        for (let i = 0; i < 5; i++) {
          arrRandomColor.push(arrValue);
        }
      }

      var setInterval = setTimeout(colorTestTitle(arrValue), 1000);
      alearTitleDes(isCheckColor);

      if (isShowArrEasy) {
        const htmls2 = arrRandomColor2.map((arrColorItem) => {
          return `<span class="bx1 box" style="background-color:${arrColorItem.code_color}">${arrColorItem.title}</span>`;
        });
        blockColor.innerHTML = htmls2.join('');
      } else if (arrRandomColor) {
        const htmls = arrRandomColor.map((arrColorItem) => {
          return `<span class="bx1 box" style="background-color:${arrColorItem.code_color}">${arrColorItem.title}</span>`;
        });
        blockColor.innerHTML = htmls.join('');
      }
      levelGameEasy();
    }

    function colorTestTitle(arrValue) {
      if (isCheckBlock) {
        gameTitleEle.style.background = 'rgb(71, 91, 91)';
      } else {
        if (arrValue) {
          gameTitleEle.style.background = `${arrValue.code_color}`;
        }
      }
    }
    function alearTitleDes(isCheckColor) {
      const random = Math.floor(Math.random() * 2);
      const alertDes = (alertNameGame.innerText = alertDesc1.toUpperCase());
      if (isCheckColor) {
        if (random % 2 == 0) {
          alertH2.innerText = alertTitle1.toUpperCase();
          alertDes;
        } else {
          alertH2.innerText = alertTitle3.toUpperCase();
          alertDes;
        }
      } else {
        alertH2.innerText = alertTitle2.toUpperCase();
        alertNameGame.innerText = alertDesc2.toUpperCase();
      }
    }

    function checkColorBlock(valueTitle) {
      blockColor.onclick = function (e) {
        const blockColorElement = e.target;
        indexBlockColor = 0;
        arrRandomColor.indexOf(valueTitle);
        const valueTitleBlock = e.target.innerText;
        if (valueTitleBlock == valueTitle) {
          handleLogicGame(valueTitleBlock);
          randomBlockColor(isCheckColor);
        } else {
          blockColorElement.style.opacity = '0';
          limited_number();
        }
      };
    }

    function handleLogicGame(valueTitleBlock) {
      arrColor.forEach((arrValue) => {
        if (arrValue.title == valueTitleBlock) {
          isCheckColor = true;
          isCheckBlock = false;
          isCheckBlockEasy = true;
          isChanClick = true;

          number.style.display = 'none';
          limited.innerText = 'wow 😍 you are so good ';

          arrRandomColor.splice(0);
          arrRandomColor.push(arrValue);
          randomBlockColor(isCheckColor, arrValue);
          randomColorTitle();
          // limited_number();
          blockColor.onclick = function (e) {
            e.preventDefault();
          };
          // limited_number(isChanClick);
        }
      });
    }
    // document.addEventListener('contextmenu', (event) => event.preventDefault());
    endLimit();
    handleLogicGame();
    newGameLoad();
    levelGameEasy();

    randomColorTitle();
    randomBlockColor();
    setDisplayBlock();
  },
  false
);
