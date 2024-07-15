function getStoreService() {
  return {
    saveLastGame: (name, level, time) => {
      const lastResult = {name, level, time};
      const resultsStore = JSON.parse(localStorage.getItem("resultsStore")) || [];
      if(resultsStore.length === 5) {
        resultsStore.shift()
      } 
      resultsStore.push(lastResult);
      localStorage.setItem("resultsStore", JSON.stringify(resultsStore));
    },
    getLastGames: () => {
      return JSON.parse(localStorage.getItem("resultsStore")) || [];
    },

    saveState: (state) => {
      localStorage.setItem("lastState", JSON.stringify(state))
    },
    getSavedState: () => {
      return JSON.parse(localStorage.getItem("lastState"))
    },

    saveSwitcherState: (mode) => {
      localStorage.setItem("darkMode",JSON.stringify(mode));
    },
    getSwitcherState: () => {
      return JSON.parse(localStorage.getItem("darkMode")) || false;
    },
 }
}