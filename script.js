/* 'myage' is a command for the user to allow guesses to be made about my age. if guessed right, the sentence correct will pop up. */
myage = 93
let guess

while (guess !== myage) {
  guess = parseInt(prompt('Guess my age'))
  if (guess === myage) {
    alert('Correct!')
  } else if (guess > myage) {
    alert('Too hot!')
  } else {
    alert('Cold!')
  }
}
