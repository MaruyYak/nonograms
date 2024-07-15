function generateGamePageContent(level, size) {
  const header = document.createElement("header");

  const navPanel = document.createElement("nav");
  navPanel.className = "nav_panel";
  header.appendChild(navPanel);

  const navList = document.createElement("ul");
  navList.className = "nav_list";
  navPanel.appendChild(navList);

  const timer = document.createElement("li");
  timer.className = "time";
  navList.appendChild(timer);
  
  const minutes = document.createElement("span");
  minutes.className = "minutes";
  minutes.innerText = '00:';
  timer.appendChild(minutes);

  const seconds = document.createElement("span");
  seconds.className = "seconds";
  seconds.innerText = '00';
  timer.appendChild(seconds);

  const currentImgName = document.createElement("li");
  currentImgName.className = "current_img_name";
  currentImgName.innerText = level.name;
  navList.appendChild(currentImgName);

  const menuButton = document.createElement("li");
  menuButton.className = "menu_button";
  menuButton.textContent = "Menu";
  navList.appendChild(menuButton);
  menuButton.addEventListener('click', onGameMenuButton);

  const mainGamePage = document.createElement("main");
  mainGamePage.className = "game_page";

  const gameSection = generateNonogramGrid(level, size);
  mainGamePage.appendChild(gameSection);
  
  const resulButtonContainer = document.createElement("div");
  resulButtonContainer.className = "button_container";
  mainGamePage.appendChild(resulButtonContainer);
  
  const resulButton = document.createElement("button");
  resulButton.className = "show_result_button";
  resulButton.classList.add('light')
  resulButton.textContent = "Show result";
  resulButtonContainer.appendChild(resulButton);

  const resetButton = document.createElement("button");
  resetButton.className = "reset_button";
  resetButton.classList.add('light')
  resetButton.textContent = "Reset";
  resulButtonContainer.appendChild(resetButton);
  resetButton.addEventListener('click', resetNonogram)

  const modalOverlay = generateModalWindow()
  const gameMenuOverlay = generateGameMenuWindow()

  return [header, mainGamePage, modalOverlay, gameMenuOverlay];
}

function generateNonogramGrid(level, size) {
  const gameSection = document.createElement("section");
  gameSection.className = "game_section";

  const topGrid = generateTopGrid(level, size);
  const sideGrid = generateSideGrid(level);
  const nonogramArea = generateAreaGrid(level.nonogram);
  
  const nonogramContainer = document.createElement("div");
  nonogramContainer.className = "nonogram_container";
  
  nonogramContainer.appendChild(sideGrid);
  nonogramContainer.appendChild(nonogramArea);

  gameSection.appendChild(topGrid);
  gameSection.appendChild(nonogramContainer);

  return gameSection;
}

function generateTopGrid(level, size) {
  const topRowNum = document.createElement("div");
  topRowNum.className = "top_numbers";
  topRowNum.classList.add('light')
  topRowNum.classList.add(`top_numbers_${size}`);

  // topRowNum.style.gridTemplateColumns = `repeat(${size}, 50px)`;

  topNumbers = getTopNumbers(level);

  topNumbers.forEach(row => {
    const topRowNumCell = document.createElement("div");
    topRowNumCell.className = "top_number_cell";
    row.forEach(num => {
      const topNum = document.createElement("div");
      topNum.innerText = num;
      topRowNumCell.appendChild(topNum);
    })
    topRowNum.appendChild(topRowNumCell);
  })

  return topRowNum;
}

function generateSideGrid(level) {
  const sideColumnNum = document.createElement("div");
  sideColumnNum.className = "side_numbers";
  sideColumnNum.classList.add('light')


  const sideNumbers = getSideNumbers(level)

  sideNumbers.forEach(numbers => {
    const sideColumnNumCell = document.createElement("div");
    sideColumnNumCell.className = "side_number_cell";
    sideColumnNumCell.innerText = numbers;
    sideColumnNum.appendChild(sideColumnNumCell);
  });

  return sideColumnNum;
}

function generateAreaGrid(nonogram, showResult) {
  const nonogramArea = document.createElement("div");
  nonogramArea.className = "nonogram_area";
  nonogramArea.classList.add(`nonogram_area_${nonogram.length}`);

  // nonogramArea.style.gridTemplateColumns = `repeat(${nonogram.length}, 50px)`;
  nonogram.forEach((row, i) => {
    row.forEach((cell, j) => {
      const nonogramCell = document.createElement("div");
      nonogramCell.className = "nonogram_cell";
      nonogramCell.classList.add('light')
      nonogramCell.setAttribute('i', i);
      nonogramCell.setAttribute('j', j);
      nonogramArea.appendChild(nonogramCell);
      if(showResult && cell === 1) {
        nonogramCell.classList.add("left_selected_cell");
        nonogramCell.classList.add('light')
      } else if(showResult && cell === -1) {
        nonogramCell.classList.add("right_selected_cell");
        nonogramCell.classList.add('light')
      }
    })
  });
  return nonogramArea;
}
  
//  numbers arrangement start
function getSideNumbers(level) {
  const sideNumbers = [];

    for(let i = 0; i < level.nonogram.length; i++) {
      let res = [];
      let num = 0;
    for(let j = 0; j < level.nonogram[i].length; j++ ) {
      if (level.nonogram[i][j] === 1) {
        num++;
      } else if (num !== 0) {
        res.push(num);
        num = 0;
      }
      if (num > 0 && j === level.nonogram[i].length - 1) {
        res.push(num);
      }
    }
    sideNumbers.push(res);
  }

  return sideNumbers;
}
function getTopNumbers(level) {
  topNumbers = [];

  for(let i = 0; i < level.nonogram.length; i++) {
      let res = [];
      let num = 0;
    for(let j = 0; j < level.nonogram[i].length; j++ ) {
      if (level.nonogram[j][i] === 1) {
        num++;
      } else if (num !== 0) {
        res.push(num);
        num = 0;
      }
      if (num > 0 && j === level.nonogram[i].length - 1) {
        res.push(num);
      }
    }
    topNumbers.push(res);
  }
  
  return topNumbers 
}
//  numbers arrangement end

function generateModalWindow() {
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal_overlay";
  modalOverlay.classList.add('light')

  const modalWindow = document.createElement("div");
  modalWindow.className = "modal_window";
  modalWindow.classList.add('light')
  modalOverlay.appendChild(modalWindow);

  const gameResult = document.createElement("h2");
  gameResult.className = "game_result";
  gameResult.innerText = "Game complited";
  gameResult.classList.add('light')
  modalWindow.appendChild(gameResult);

  const nonogramName = document.createElement("p");
  nonogramName.className = "nonogram_img_name";
  nonogramName.classList.add('light')
  modalWindow.appendChild(nonogramName);

  const nonogramImg = document.createElement("img");
  nonogramImg.className = "nonogram_img_result";
  modalWindow.appendChild(nonogramImg);
  
  const timeResult = document.createElement("p");
  timeResult.className = "time_result";
  timeResult.classList.add('light')
  modalWindow.appendChild(timeResult);

  const modalButtons = document.createElement("div");
  modalButtons.className = "modal_buttons";
  modalButtons.classList.add('light')
  modalWindow.appendChild(modalButtons);

  const nextNonogram = document.createElement("button");
  nextNonogram.className = "next_nonogram_button";
  nextNonogram.innerText = "Next game";
  nextNonogram.classList.add('light')
  modalButtons.appendChild(nextNonogram);

  const mainMenu = document.createElement("button");
  mainMenu.className = "main_menu_button";
  mainMenu.innerText = "Main menu";
  mainMenu.classList.add('light')
  modalButtons.appendChild(mainMenu);

  nextNonogram.addEventListener('click', () => {
    onNextLevelButton();
    modalOverlay.classList.remove('show_modal');
    if(switcherMode === true) {
      changeThemeStyles(false)
    }
  });

  mainMenu.addEventListener('click', openMainMenu);

  return modalOverlay;
}

function generateGameMenuWindow() {
  const gameMenuOverlay = document.createElement("div");
  gameMenuOverlay.className = "game_menu_overlay";
  gameMenuOverlay.classList.add('light')
  document.body.appendChild(gameMenuOverlay)

  const gameMenuWindow = document.createElement("div");
  gameMenuWindow.className = "game_menu_window";
  gameMenuWindow.classList.add('light')
  gameMenuOverlay.appendChild(gameMenuWindow)

  const closeGameMenuWrapper = document.createElement("div");
  closeGameMenuWrapper.className = "close_game_menu_wrapper";
  gameMenuWindow.appendChild(closeGameMenuWrapper);

  const closeGameMenuButton = document.createElement("div");
  closeGameMenuButton.className = "close_game_menu_button";
  closeGameMenuButton.classList.add('light')
  closeGameMenuButton.innerText = "Close";
  closeGameMenuWrapper.appendChild(closeGameMenuButton);
  closeGameMenuButton.addEventListener('click', onCloseGameMenuButton);


    const menuTitle = document.createElement("h2");
    menuTitle.className = "menu_title";
    menuTitle.classList.add('light')
    menuTitle.innerText = "MENU";
    gameMenuWindow.appendChild(menuTitle);

    const gameMenuButtonsContainer = document.createElement("div");
    gameMenuButtonsContainer.className = "game_menu_buttons_container";
    gameMenuButtonsContainer.classList.add('light')
    gameMenuWindow.appendChild(gameMenuButtonsContainer);

    const switherWrapper = document.createElement("div");
    switherWrapper.className = "swither_wrapper";
    gameMenuButtonsContainer.appendChild(switherWrapper);

    const themeLabel = document.createElement("p");
    themeLabel.className = "theme_label";
    themeLabel.classList.add('light')
    themeLabel.innerText = "Dark mode";
    switherWrapper.appendChild(themeLabel);

    const theamModeSwitch = document.createElement("label");
    theamModeSwitch.className = "theam_mode_switch";
    switherWrapper.appendChild(theamModeSwitch);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('light')

    theamModeSwitch.appendChild(checkbox);

    const themeSlider = document.createElement('span');
    themeSlider.className = 'theme_slider';
    theamModeSwitch.appendChild(themeSlider);
    themeSlider.addEventListener('click', changeThemeStyles)


    const saveStateButton = document.createElement("button");
    saveStateButton.className = "save_state_button";
    saveStateButton.classList.add('light')
    saveStateButton.innerText = "Save game";
    gameMenuButtonsContainer.appendChild(saveStateButton);
    saveStateButton.addEventListener("click", saveCurrentState)

    const mainMenuGame = document.createElement("button");
    mainMenuGame.className = "main_menu_game_button";
    mainMenuGame.classList.add('light')
    mainMenuGame.innerText = "Main menu";
    gameMenuButtonsContainer.appendChild(mainMenuGame);
    mainMenuGame.addEventListener('click', openMainMenu);

    const saveNotification = document.createElement('div');
    saveNotification.className = 'notification';
    gameMenuOverlay.appendChild(saveNotification);

    const notificationText = document.createElement('div');
    notificationText.className = 'notification_text';
    notificationText.innerText = "Game saved";
    saveNotification.appendChild(notificationText);

  return gameMenuOverlay
}