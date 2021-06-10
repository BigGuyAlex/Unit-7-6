myage = 93
let guess

while (guess !== myage) {
  guess = parseInt(prompt('Guess my age'))
  if (guess === myage) {
    alert('You won!')
  } else if (guess > myage) {
    alert('Too high!')
  } else {
    alert('Too low!')
  }
}
