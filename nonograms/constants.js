const easyLevel = {
  name: 'easy',
  title: 'Easy 5x5',
  levels: [
    {
      nonogram:[
      [1,1,0,1,1],
      [1,1,0,1,1],
      [0,0,0,0,0],
      [1,0,0,0,1],
      [0,1,1,1,0]],
      name: "Smile"
    },
    {
      nonogram:[
      [1,0,1,0,1],
      [1,1,1,1,1],
      [0,1,1,1,0],
      [0,1,0,1,0],
      [0,1,1,1,0]],
      name: "Tower"
    },
    {
      nonogram:[
      [0,1,1,1,0],
      [1,1,1,1,1],
      [1,0,1,0,1],
      [1,1,1,1,1],
      [0,1,0,1,0]],
      name: "Skull"
    },
    {
      nonogram:[
      [1,0,1,0,1],
      [0,1,1,1,0],
      [1,1,0,1,1],
      [0,1,1,1,0],
      [1,0,1,0,1]],
      name: "Pattern"
    },
    {
      nonogram:[
      [0,0,1,0,0],
      [0,1,1,1,0],
      [1,1,1,1,1],
      [0,0,1,0,0],
      [0,1,1,1,0]],
      name: "Tree"
    }
  ]
}

const mediumLevel = { 
  name: 'medium',
  title: 'Medium 10x10',
  levels: [
    {
      nonogram:[
      [0,0,1,0,1,0,1,0,0,0],
      [0,0,1,0,1,0,1,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,1,1,1,1,1,1,1,0,0],
      [0,1,1,0,1,1,1,1,1,1],
      [0,1,1,0,1,1,1,1,0,1],
      [0,1,1,1,1,1,1,1,1,0],
      [0,1,1,1,1,1,1,1,0,0],
      [1,0,1,1,1,1,1,0,0,1],
      [0,1,1,1,1,1,1,1,1,0]],
      name: "Coffee"
    },
    {
      nonogram:[
      [0,0,1,0,0,0,0,1,0,0],
      [0,0,0,1,0,0,1,0,0,0],
      [1,1,1,1,1,1,1,1,1,1],
      [1,0,1,1,0,0,0,0,1,1],
      [1,1,1,0,0,0,0,0,0,1],
      [1,0,1,0,0,0,0,0,0,1],
      [1,1,1,0,0,0,0,0,0,1],
      [1,1,1,1,0,0,0,0,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [0,1,0,0,0,0,0,0,1,0]],
      name: "TV"
    },
    {
      nonogram:[
      [0,0,0,0,0,0,1,1,1,1],
      [0,0,0,1,1,1,0,0,0,1],
      [0,0,0,1,0,0,0,1,1,1],
      [0,0,0,1,1,1,1,0,0,1],
      [0,0,0,1,0,0,0,0,0,1],
      [0,0,0,1,0,0,0,1,1,1],
      [0,1,1,1,0,0,1,1,1,1],
      [1,1,1,1,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,1,1,0],
      [0,1,1,0,0,0,0,0,0,0]],
      name: "Music"
    },
    {
      nonogram:[
      [0,0,0,0,1,1,1,1,1,1],
      [0,0,0,1,0,1,0,1,0,1],
      [0,0,1,1,0,1,0,1,1,0],
      [0,1,0,1,0,1,1,0,1,0],
      [0,1,0,1,0,1,1,1,1,0],
      [0,1,0,1,1,0,0,0,1,0],
      [0,1,1,1,1,1,1,1,1,0],
      [0,0,1,0,0,0,0,1,0,0],
      [0,1,0,1,1,1,1,0,0,0],
      [1,1,0,0,0,0,0,0,0,0]],
      name: "Leaf"
    },
    {
      nonogram:[
      [0,1,1,0,0,0,0,1,1,0],
      [1,1,0,1,1,1,1,0,1,1],
      [1,0,1,1,1,0,1,1,0,1],
      [0,1,1,1,1,0,1,1,1,0],
      [0,1,1,1,1,0,1,1,1,0],
      [0,1,1,1,0,1,1,1,1,0],
      [0,1,1,0,1,1,1,1,1,0],
      [0,0,1,1,1,1,1,1,0,0],
      [0,0,0,1,1,1,1,0,0,0],
      [0,0,1,1,0,0,1,1,0,0]],
      name: "Clock"
    }
  ]
}

const hardLevel = { 
  name: 'hard',
  title: 'Hard 15x15',
  levels: [
    {
      nonogram:[
        [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,0,1,0,1,1,1,1,1,1],
        [0,1,1,1,1,0,0,1,0,0,1,1,1,1,0],
        [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0]],
      name: "Spades"
    },
    {
      nonogram:[
        [1,1,0,1,1,0,0,0,0,0,0,1,1,0,1],
        [1,1,0,1,1,0,1,0,0,1,0,1,1,0,1],
        [0,1,1,1,1,0,1,0,0,1,0,1,1,0,1],
        [0,0,1,1,1,1,1,0,0,0,1,1,1,1,1],
        [0,0,0,0,1,1,0,1,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,0,1,0,1,0,1,1,1,1,1,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
        [0,1,0,1,1,1,0,0,0,0,1,1,1,1,1],
        [0,1,1,1,1,1,0,0,0,0,1,1,1,1,1],
        [0,0,1,1,1,0,0,0,0,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1]],
      name: "Deer"
    },
    {
      nonogram:[
        [0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,1,1,1,1,0,1,1,1],
        [0,0,0,0,0,0,0,1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,1,1,1,0,0],
        [1,0,0,0,0,0,1,1,1,1,1,1,1,1,0],
        [1,1,1,0,0,1,1,1,0,0,0,1,1,1,0],
        [1,1,1,1,1,1,1,0,1,1,1,0,1,1,0],
        [0,1,1,1,1,1,0,1,1,1,1,0,1,1,0],
        [0,1,1,1,1,1,1,1,1,0,0,1,1,0,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,1,1,0,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,1,1,0,0,0]],
      name: "Duck"
    },
    {
      nonogram:[
        [0,0,0,0,0,1,1,0,1,1,0,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
        [0,1,1,1,0,1,1,1,1,1,0,1,1,1,0],
        [1,1,1,1,1,0,1,1,1,0,1,1,1,1,1],
        [1,1,1,1,1,1,0,1,0,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,0,1,1,1,1,1,1,0],
        [1,1,1,1,1,1,0,1,0,1,1,1,1,1,1],
        [1,1,1,1,1,0,0,1,0,0,1,1,1,1,1],
        [0,1,1,1,0,0,0,1,0,0,0,1,1,1,0],
        [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,0,0,0,0,0,0,0,0,0],
        [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0],],
      name: "Clever"
    },
    {
      nonogram:[
        [1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],
        [1,1,1,1,0,0,0,0,0,0,0,1,1,1,1],
        [1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],
        [1,1,0,1,0,1,0,1,0,1,0,1,0,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,1,0,0,0,0,0,0,0,1,0,0,1],
        [1,0,1,1,1,0,0,1,0,0,1,1,1,0,1],
        [1,0,0,1,0,0,1,1,1,0,0,1,0,0,1],
        [1,0,0,1,0,0,1,1,1,0,0,1,0,0,1],
        [1,0,0,0,0,0,1,1,1,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1]],
      name: "Church"
    }
  ]
}

const allLevels = [easyLevel, mediumLevel, hardLevel]
