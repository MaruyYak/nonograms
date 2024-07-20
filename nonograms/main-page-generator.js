
function generateMainPageContent() {
  document.body.classList.add('light')

  const mainPage = document.createElement("main");
  mainPage.className = "main_page";

  menuArea = document.createElement("section");
  menuArea.className = "main_menu";
  mainPage.appendChild(menuArea);

  pageHeader = document.createElement("h1");
  pageHeader.className = "main_page_header";
  pageHeader.textContent = "NONOGRAMS";
  menuArea.appendChild(pageHeader);

  levelTitle = document.createElement("h3");
  levelTitle.className = "levels_title";
  levelTitle.textContent = "Choose a level before starting:";
  menuArea.appendChild(levelTitle);

  levelList = document.createElement("ul");
  levelList.className = "level_chooser_list";
  menuArea.appendChild(levelList);
  
  menuOptions = document.createElement("ul");
  menuOptions.className = "main_menu_options";
  menuArea.appendChild(menuOptions);
    
  randomButton = document.createElement("li");
  randomButton.className = "random_button";
  randomButton.classList.add('light')
  randomButton.textContent = "Start random level";
  menuOptions.appendChild(randomButton);
  randomButton.addEventListener('click', selectRandomLevel);

  savedGameButton = document.createElement("li");
  savedGameButton.className = "previous_button";
  savedGameButton.classList.add('light')
  savedGameButton.textContent = "Continue previous game";
  menuOptions.appendChild(savedGameButton);
  savedGameButton.addEventListener("click", continuePreviusGame)


  latestResultsButton = document.createElement("li");
  latestResultsButton.className = "collection_button";
  latestResultsButton.classList.add('light')
  latestResultsButton.textContent = "View latest results";
  menuOptions.appendChild(latestResultsButton);
  latestResultsButton.addEventListener('click', onViewLatestRes);


  generateSelectionLevelButtons();
  const storeModalOverlay = generateResultsStorageModal()

  return [mainPage, storeModalOverlay];
}

function generateSelectionLevelButtons() {
  allLevels.forEach((dif, index) => {
    const selectLevelButton = document.createElement("li");
    selectLevelButton.className = dif.name;
    selectLevelButton.textContent = dif.title;
    levelList.appendChild(selectLevelButton);

    selectLevelButton.addEventListener('click', () => {
      selectLevel(index)
    })
  });
}

function generateResultsStorageModal() {
  const storeModalOverlay = document.createElement("div");
  storeModalOverlay.className = "store_modal_overlay";
  storeModalOverlay.classList.add('light')
  
  const storeModalWindow = document.createElement("div");
  storeModalWindow.className = "store_modal_window";
  storeModalWindow.classList.add('light')

  storeModalOverlay.appendChild(storeModalWindow);
  
  const closeStoreWrapper = document.createElement("div");
  closeStoreWrapper.className = "close_store_wrapper";
  closeStoreWrapper.classList.add('light')
  storeModalWindow.appendChild(closeStoreWrapper);

  const closeStoreModal = document.createElement("div");
  closeStoreModal.className = "close_store_modal";
  closeStoreModal.textContent = "Close";
  closeStoreWrapper.appendChild(closeStoreModal);

  const storeTitle = document.createElement("h2");
  storeTitle.className = "store_title";
  storeTitle.classList.add('light')
  storeTitle.textContent = "My latest results:";
  storeModalWindow.appendChild(storeTitle);

  const listGamesContainer = document.createElement("div");
  listGamesContainer.className = "list_games_container";
  storeModalWindow.appendChild(listGamesContainer);

  closeStoreModal.addEventListener('click', onCloseModalButton);

  return storeModalOverlay
}
