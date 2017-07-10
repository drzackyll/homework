// adds event listener for 'add' and 'submit buttons
document.getElementsByClassName('add')[0].addEventListener('click', add)
document.getElementsByTagName('button')[1].addEventListener('click', submit)

// creates an <li> and remove link for each entry already in localStorage
for (let x = 0; x < parseInt(localStorage.getItem('count')); x++) {
  if (localStorage.getItem(x + 1)) {
    let memberArray = localStorage.getItem(x + 1).split(', ')
    let text = document.createTextNode(localStorage.getItem(x + 1))
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.href = ''
    a.value = x + 1
    a.innerHTML = 'Remove'
    a.addEventListener('click', function (event) {
      localStorage.removeItem(event.target.value)
    })
    li.innerHTML = (
      `<b>Age:</b> ${memberArray[0]},
      <b>Relationship:</b> ${memberArray[1]},
      <b>Smoker?</b> ${memberArray[2]}`
    )
    document.getElementsByClassName('household')[0].appendChild(li)
    document.getElementsByClassName('household')[0].appendChild(a)
  }
}

// validates inputs and adds to localStorage
function add() {
  let age = parseInt(document.forms[0]['age'].value)
  let rel = document.forms[0]['rel'].value
  let smoker = document.forms[0]['smoker'].checked
  let household = []

  if (isNaN(age)) {
    alert('You must fill in a number for your age.')
  } else if (age <= 0) {
    alert('Your age must be greater than 0.')
  }

  if (rel === '') {
    alert('You must select a relationship.')
  }
  // creates or increments a counter to help assign unique index to each member
  if (!localStorage.getItem('count')) {
    localStorage.setItem('count', '1')
    localStorage.setItem('1', `${age}, ${rel}, ${smoker}`)
  } else {
    localStorage.setItem('count', parseInt(localStorage.getItem('count')) + 1)
    localStorage.setItem(localStorage.getItem('count'), `${age}, ${rel}, ${smoker}`)
  }
}

// handles submit action by parsing data into JSON and displaying in 'debug'
function submit() {
  event.preventDefault()
  let array = []
  let debug = document.getElementsByClassName('debug')[0]
  for (let x = 0; x < parseInt(localStorage.getItem('count')); x++) {
    if (localStorage.getItem(x + 1)) {
      let memberArray = localStorage.getItem(x + 1).split(', ')
      array.push({age: memberArray[0], relationship: memberArray[1], smoker: memberArray[2]})
    }
  }
  let json = JSON.stringify(array)
  debug.innerHTML = json
  debug.style.display = 'inline-block'
}
