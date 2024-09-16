# Dicee Challenge

A simple dice game where two players roll dice, and the one with the higher number wins. If both players roll the same number, the result is a draw.

## Demo

When you refresh the page, two dice are rolled randomly for Player 1 and Player 2. The player with the higher dice number wins. If both players roll the same number, a "Draw!" message is displayed.

## Features

- Random dice roll for two players.
- Displays the result (Player 1 Wins, Player 2 Wins, or Draw) after each refresh.
- Simple and clean UI built using HTML and CSS.
- Core functionality implemented using JavaScript.

## Screenshots

![Dicee Challenge Screenshot](screenshot.png)

## How to Use

1. Open the `index.html` file in your browser.
2. Refresh the page to roll the dice for both players.
3. The result will be displayed after each refresh.

## Technologies Used

- **HTML5**: For creating the structure of the web page.
- **CSS3**: For styling the web page.
- **JavaScript**: For implementing the dice roll logic.

## How it Works

1. Two random numbers (1 to 6) are generated using `Math.random()` for both Player 1 and Player 2.
2. The corresponding dice images are displayed based on the generated numbers.
3. The result is shown:
   - If Player 1's number is greater, it displays "Player 1 Wins!"
   - If Player 2's number is greater, it displays "Player 2 Wins!"
   - If both numbers are equal, it displays "Draw!"

## Project Structure
 ├── index.html
 ├── styles.css 
 ├── script.js 
 ├── dice1.png, dice2.png, dice3.png, dice4.png, dice5.png, dice6.png

 ## How to Run the Project

1. Clone or download the repository.
2. Open the `index.html` file in any browser.
3. Refresh the page to play the game.
