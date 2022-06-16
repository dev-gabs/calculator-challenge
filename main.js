let theme = 1

let numbers = []
let number = ''
let operation = ''
let resultNumber = ''

function keyNumber(value) {
  result.innerText += value

  number += String(value)

  return number
}

function operator(op) {
  numbers.push(number)

  if (operation != '') {
    verifyOperator()
  }

  console.log(Number(numbers[0]) % 1 === 0)

  limitDecimals()

  switch (op) {
    case '+':
      result.innerText = resultNumber + '+'
      operation = 'add'
      break;
    case '-':
      result.innerText = resultNumber + '-'
      operation = 'subtract'
      break
    case '/':
      result.innerText = resultNumber + '/'
      operation = 'divide'
      break
    case '*':
      result.innerText = resultNumber + 'x'
      operation = 'multiplicate'
      break
    case '=':
      result.innerText = resultNumber
      operation = 'equal'

      break
  }

  console.log(numbers, operation)

  number = 0

  return
}

function limitDecimals() {
  if (Number(numbers[0] % 1 === 0)) {
    resultNumber = String(Number(numbers[0]))
  } else {
    resultNumber = String(Number(numbers[0]).toFixed(4))
  }

  return
}

function verifyOperator() {
  switch (operation) {
    case 'add':
      numbers[0] = String(Number(numbers[0]) + Number(numbers[1]))
      break
    case 'subtract':
      numbers[0] = String(Number(numbers[0]) - Number(numbers[1]))
      break
    case 'divide':
      numbers[0] = String(Number(numbers[0]) / Number(numbers[1]))
      break
    case 'multiplicate':
      numbers[0] = String(Number(numbers[0]) * Number(numbers[1]))
      break
    case 'equal':
      break
  }

  numbers.pop()

  return
}

function del() {
  result.innerText = result.innerText.slice(0, -1)
  number = number.slice(0, -1)
}

function reset() {
  result.innerText = ''

  number = ''
  operation = ''
  numbers.pop()
  numbers.pop()

  console.log(numbers)

  return
}

function toggleTheme() {
  const body = document.body

  if (theme == 1) {
    body.classList.remove('theme1')
    body.classList.add('theme2')

    theme = 2
  } else if (theme == 2) {
    body.classList.remove('theme2')
    body.classList.add('theme3')

    theme = 3
  } else {
    body.classList.remove('theme3')
    body.classList.add('theme1')

    theme = 1
  }

  console.log(theme)
  return theme
}
