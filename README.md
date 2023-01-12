---
author: Dua Tran
title: Rock-Paper-Scissor game
id: rock_paper_scissor_game_trancaodua
---

# Rock Paper Scissors Game

Props are one of the most basic and important properties in React.
The purpose of this project is to practice our skills with React props.

You must have played the "Rock Paper Scissors Game" at least once. And now, we are making a Rock Paper Scissors Game together on the web.

| ![](https://i.ibb.co/35b4Tsk/Screenshot-from-2022-05-09-21-43-09.png) |
| :-------------------------------------------------------------------: |
|                      _Rock Paper Scrissor Game_                       |

[Go to demo website !](https://rock-paper-scissor-trancaodua.netlify.app/)

## User Story

- User play "Rock Paper Scissors game" with a computer.
- User select "Rock" or "Paper" or "Scissors" and game start.
- User selection trigger computer selection
- Computer's selection is random. Result is display immediately.

## Requirement

Fork this [repo](https://github.com/trancaodua/rock-paper-scrissor-game) and read through the files.
Often time , developers are required to work with an existing codebase and improve upon. This is one of that time.

**Repository has 2 branches:**

- `requirement`: Has requirements. You will code on this branch.
- `solution`: Has solutions for requirements.

**Guide checkout `requirement` branch to code:**

- Step 1: Clone this repository. Run: `git clone https://github.com/trancaodua/rock-paper-scrissor-game.git`
- Step 2: Checkout `requirement` branch to start coding. Run: `git checkout requirement`

**Guide checkout `solution` branch to see answers:**

- Step 1: Checkout `solution` branch. Run: `git checkout solution`.

You should only code in the designinated area.
Using the VSC search function for "Your code here", you will see a list of all the places that requires your attention.

## Explain code

- src/utils/index.js

```
# input: gamesItems is a list of items.
# return: a random item in the list.
# Description: get random item from gamesItems list.
```

```javascript
export const getRandomGameItem = (gamesItems) => {
  const index = Math.floor(Math.random() * gamesItems.length); //create index random between 0 to gamesItems.length - 1
  return gamesItems[index]; //return item
};
```

```
# input: user1GameItem, user2GameItem - is object game, contains game item id and list can win.
Object example:
user1GameItem = {
    url: "/images/paper.png",
    id: 0,
    winItemIds: [1],
    name: "Paper",
}
# return: game result.
# Description: calculator result player.
```

```javascript
export const calculatorUserWinner = (user1GameItem, user2GameItem) => {
  if (user1GameItem.id === user2GameItem.id) {
    return "Peace"; //return both player same.
  } else if (user1GameItem.winItemIds.includes(user2GameItem.id)) {
    return "Win"; //if player 1 winItemIds list contain game player 2 id => player 1 win player 2.
  } else {
    return "Lost"; //if winItemIds list not contain game player 2 id => player 1 lost, player 2 .
  }
};
```
