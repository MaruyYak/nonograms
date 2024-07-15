
// varibles for Main page
let mainPageDom;
let gamePageDomElements;

let menuArea;
let pageHeader;
let levelTitle;
let levelList;
let menuOptions;
let randomButton;
let previousButton;
let collectionButton;
let currentCellsState = [];
let level;
let size;
let modalOverlay;
let currentGameNumber;
let clickAbility = true;
let selectedDifficulty;
let timeInterval;
let modalOpen = false;
let storeService;
let totalSeconds;
let lastTime;
let initialTime = 0;
const hoverAudio = new Audio("./assets/audio/hover.mp3");
const winAudio = new Audio("./assets/audio/showResult.mp3");
let switcherMode;


window.onload = generateGame;

function generateGame() {
  mainPageDom = generateMainPageContent();
  mainPageDom.forEach((element) => document.body.appendChild(element));
  storeService = getStoreService();
  mainPageDom[0].querySelectorAll('li').forEach((li) => {
    li.addEventListener('mouseover', () => {
      hoverAudio.play();
    })
  })
  switcherMode = storeService.getSwitcherState();
  if(switcherMode === true) {
    changeThemeStyles(false)
  }
}

function selectLevel(difficulty) {
  const selectedLevelData = allLevels[difficulty];
  selectedDifficulty = difficulty;

  getNextLevelNumber()
  level = selectedLevelData.levels[currentGameNumber];
  size = (selectedDifficulty + 1) * 5;

  gamePageDomElements = generateGamePageContent(level, size);

  document.body.innerHTML = '';

  currentCellsState = getEmptyMatrix(level.nonogram);
  gamePageDomElements.forEach((element) => document.body.appendChild(element));
  changeThemeStyles()
  modalOverlay = gamePageDomElements[2];

  changeHardStyles()

  addListeners();
  getSolution();
}

function getEmptyMatrix(nonogram) {
  const state = [];
  nonogram.forEach(row => {
    const rowState = [];
    state.push(rowState);
    row.forEach(() => {
      rowState.push(0);
    })
  })
  return state;
}

function storeClickedCell(cell) {
  if(!clickedCells.includes(cell)) {
    clickedCells.push(cell);
  } 
  console.log(clickedCells);
}

function addListeners() {
  const area = document.querySelector('.nonogram_area');
  area.addEventListener('click', (event) => {onCellCklicked(event, true)});
  area.addEventListener('contextmenu', (event) => {onCellCklicked(event, false)});
}

function onCellCklicked(event, isLeftClick) {
  event.preventDefault()
  const target = event.target;
  if(target.classList.contains('nonogram_cell') && clickAbility) {
    const i = target.getAttribute('i');
    const j = target.getAttribute('j');

    if(isLeftClick) {
      target.classList.remove("right_selected_cell");
      target.classList.toggle("left_selected_cell");

      currentCellsState[i][j] = currentCellsState[i][j] === 1 ? 0 : 1;
    } else {
      target.classList.remove("left_selected_cell");
      target.classList.toggle("right_selected_cell");

  
      currentCellsState[i][j] = currentCellsState[i][j] === -1 ? 0 : -1;
    }

    if(checkWinningGame()) {
      openModalWindow();
      storeService.saveLastGame(level.name, allLevels[selectedDifficulty].title, lastTime) 
    }
    if(!timeInterval) {
      launchTimer();
    }
  };
    addAudioCellClick()

}

function checkWinningGame() {
  for (let i = 0; i < currentCellsState.length; i++) {
    for (let j = 0; j < currentCellsState[i].length; j++) {
      if (currentCellsState[i][j] !== level.nonogram[i][j] &&
         (currentCellsState[i][j] === 1 || level.nonogram[i][j] === 1)  ) {
        return false;
      }
    }
  }
  console.log("win")
  return true;
}

function openModalWindow() {
  let nonogramName = modalOverlay.querySelector('.nonogram_img_name');
  let nonogramImg = modalOverlay.querySelector('.nonogram_img_result');
  let timeResult = modalOverlay.querySelector('.time_result')

  modalOverlay.classList.add('show_modal');
  nonogramName.innerText = level.name;
  nonogramImg.src = `./assets/${level.name}.png`;
  timeResult.innerHTML = `You have solved the nonogram in <span class="styleTime">${lastTime}</span> seconds!`;
  clearInterval(timeInterval);
  addWinAudio()
}

function openMainMenu() {
  document.body.innerHTML = '';
  mainPageDom.forEach((element) => document.body.appendChild(element));
}

function getNextLevelNumber() {
  const selectedLevelData = allLevels[selectedDifficulty];
  if(!currentGameNumber) {
    currentGameNumber = Math.floor(Math.random() * selectedLevelData.levels.length);
  } else if (currentGameNumber < selectedLevelData.levels.length - 1) {
     currentGameNumber ++ 
  } else {
    currentGameNumber = 0;
  }
}

function onNextLevelButton() {
  selectLevel(selectedDifficulty)
} 

function getSolution() {
  let resultButton = document.querySelector('.show_result_button');
  resultButton.addEventListener('click', () => {
    const nonogramArea = generateAreaGrid(level.nonogram, true)
    document.querySelector('.nonogram_area').innerHTML = nonogramArea.innerHTML
    clickAbility = false;
    changeHardStyles()
    winAudio.play();
    if(switcherMode === true) {
        changeThemeStyles(false)
      }
  });
}

function resetNonogram() {
  currentCellsState = getEmptyMatrix(level.nonogram);
  const nonogramArea = generateAreaGrid(level.nonogram)
  document.querySelector('.nonogram_area').innerHTML = nonogramArea.innerHTML
  changeHardStyles()
  clickAbility = true;
  const reset = new Audio("./assets/audio/reset.mp3");
  reset.play();
  if(switcherMode === true) {
    changeThemeStyles(false)
  }
}

function changeHardStyles() {
  if(selectedDifficulty !== 2) {
    return;
  }
  topRowNum = document.querySelector('.top_numbers')
  topRowNumCell = document.querySelectorAll('.top_number_cell')
  sideColumnNumCell = document.querySelectorAll('.side_number_cell')
  nonogramArea = document.querySelector('.nonogram_area')
  nonogramCell = document.querySelectorAll('.nonogram_cell')
  
  topRowNum.classList.add('top_numbers_15');
  topRowNumCell.forEach(num => {
    num.classList.add('top_number_cell_15');
  })

  sideColumnNumCell.forEach(num => {
    num.classList.add('side_number_cell_15');
  })

  nonogramArea.classList.add('nonogram_area_15');
  nonogramCell.forEach(num => {
    num.classList.add('nonogram_cell_15');
  })
}

function selectRandomLevel() {
  const randomDifficulty = Math.floor(Math.random() * allLevels.length);
  selectLevel(randomDifficulty);
}

function launchTimer() {
  totalSeconds = initialTime;
  const timerUpdater = getTimerUpdater()
  timeInterval = setInterval(() => {
    totalSeconds ++;
    timerUpdater()
  }, 1000);
}

function getTimerUpdater() {
  let minutesElement = document.querySelector('.minutes')
  let secondsElement = document.querySelector('.seconds')

  return () => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const minStr = minutes < 10 ? `0${minutes}:` : minutes;
    const secStr = seconds < 10 ? `0${seconds}` : seconds;

    minutesElement.innerText = minStr;
    secondsElement.innerText = secStr;
    
    lastTime = `${minStr}${secStr}` 
  }
}

function onViewLatestRes() {
  const storeModalOverlay = document.querySelector('.store_modal_overlay')
  const listGamesContainer = document.querySelector('.list_games_container')
  listGamesContainer.innerHTML = ''

  storeModalOverlay.classList.add('show_store_modal');
  

  storeService.getLastGames().forEach((element) => {
    if(switcherMode === true) {
      changeThemeStyles(false)
    }
    const lastGame = document.createElement("div");
    lastGame.className = "last_game";
    lastGame.classList.add('light');
    listGamesContainer.appendChild(lastGame);
      
    const storeImgName = document.createElement("p");
    storeImgName.className = "store_img_name";
    storeImgName.classList.add('light')

    storeImgName.innerText = element.name;
    lastGame.appendChild(storeImgName);

    const storeImgResult = document.createElement("img");
    storeImgResult.className = "store_img_result";
    storeImgResult.src = `./assets/${element.name}.png`;
    lastGame.appendChild(storeImgResult);

    const storeLevelName = document.createElement("p");
    storeLevelName.className = "store_level_name";
    storeLevelName.classList.add('light')
    storeLevelName.innerText = element.level;
    lastGame.appendChild(storeLevelName);

    const storeTime = document.createElement("p");
    storeTime.className = "store_time";
    storeTime.classList.add('light')
    storeTime.innerText = element.time;
    lastGame.appendChild(storeTime);
  })
}

function onCloseModalButton() {
  let closeButton = document.querySelector('.close_store_modal')
  let storeModalOverlay = document.querySelector('.store_modal_overlay')

  closeButton.addEventListener("click", () => {
    storeModalOverlay.classList.remove('show_store_modal');
  })
}

function onGameMenuButton() {
  const gameMenuOverlay = document.querySelector('.game_menu_overlay')
  gameMenuOverlay.classList.add('show_game_menu_overlay');
}

function onCloseGameMenuButton() {
  let closeGameMenuButton = document.querySelector('.close_game_menu_button')
  let gameMenuOverlay = document.querySelector('.game_menu_overlay')

  closeGameMenuButton.addEventListener("click", () => {
    gameMenuOverlay.classList.remove('show_game_menu_overlay');
  })
}

function saveCurrentState() {
  storeService.saveState({
    currentGameNumber,
    selectedDifficulty,
    currentCellsState,
    totalSeconds
  })
  
 saveCurrentStateNotification() 
}

function continuePreviusGame() {
  const savedState = storeService.getSavedState();
  currentGameNumber = savedState.currentGameNumber - 1;
  initialTime = savedState.totalSeconds;
  totalSeconds = initialTime;
  selectLevel(savedState.selectedDifficulty);
  getTimerUpdater()();
  currentCellsState = savedState.currentCellsState;
  const nonogramArea = generateAreaGrid(currentCellsState, true);
  document.querySelector('.nonogram_area').innerHTML = nonogramArea.innerHTML;
}

function saveCurrentStateNotification() {
  const saveNotification = document.querySelector('.notification');

  saveNotification.classList.add('show');
      setTimeout(function() {
        saveNotification.classList.remove('show');
      }, 3000);
}

function addAudioCellClick() {
  const cellClick = new Audio("./assets/audio/cell-click.mp3");
  cellClick.play();
}

function addWinAudio() {
  const winAudio = new Audio("./assets/audio/win.mp3");
  winAudio.play();
}

function changeThemeStyles(needToSwitch) {
  switcherMode = !needToSwitch ? switcherMode : !switcherMode;
  needToSwitch && storeService.saveSwitcherState(switcherMode);
  const lightElements = document.querySelectorAll('.light');

  if(switcherMode === true) {
    lightElements.forEach((element) => {
      element.classList.add('dark');
    })
  } else if (switcherMode != true) {
    lightElements.forEach((element) => {
      element.classList.remove('dark');
    })
  }
}
