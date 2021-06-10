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
