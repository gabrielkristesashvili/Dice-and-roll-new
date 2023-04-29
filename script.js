'use strict';

document.querySelector('body').innerHTML = `
    <main>
    <section class="player player--0 player--active">
        <h2 class="name" id="name--0">Player 1</h2>
        <p class="score" id="score--0">43</p>
        <div class="current">
            <p class="current-label">Current</p>
            <p class="current-score" id="current--0">0</p>
        </div>
    </section>
    <section class="player player--1">
        <h2 class="name" id="name--1">Player 2</h2>
        <p class="score" id="score--1">24</p>
        <div class="current">
            <p class="current-label">Current</p>
            <p class="current-score" id="current--1">0</p>
        </div>
    </section>

    <img src="dice-5.png" alt="Playing dice" class="dice" />
    <button class="btn btn--new">🔄 New game</button>
    <button class="btn btn--roll">🎲 Roll dice</button>
    <button class="btn btn--hold">📥 Hold</button>
    </main>
`


//? Selecting elements 
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

//? Starting conditions
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

const scores = [0, 0]
let currentScore = 0
let activePlayer = 0

//? Rolling dice functionality
btnRoll.addEventListener('click', function () {
    //* 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1

    //* 2. Display Dice
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`

    //* 3. Check for rolled 1
    if (dice !== 1) {
        //* Add dice to current score
        currentScore += dice
        document.getElementById(`current--${activePlayer}`).textContent = currentScore

    } else {
        //* switch to next player
        document.getElementById(`current--${activePlayer}`).textContent = 0
        currentScore = 0
        activePlayer = activePlayer === 0 ? 1 : 0
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
    }
}) 