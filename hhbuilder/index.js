document.getElementsByClassName('add')[0].addEventListener('click', add)

function add() {
  event.preventDefault()
  let age = parseInt(document.forms[0]["age"].value)
  let rel = document.forms[0]["rel"].value
  let smoker = document.forms[0]["smoker"].checked
  let household = []
  if (isNaN(age)) {
    alert("You must fill in a number for your age.")
  } else if (age <= 0) {
    alert("Your age must be greater than 0.")
  }
  if (rel === "") {
    alert("You must select a relationship.")
  }
  if (!localStorage.getItem('count')) {
    localStorage.setItem('count', '1')
    localStorage.setItem('1', `${age}, ${rel}, ${smoker}`)
  } else {
    localStorage.setItem('count', parseInt(localStorage.getItem('count')) + 1)
    localStorage.setItem(localStorage.getItem('count'), `${age}, ${rel}, ${smoker}`)
  }
  document.getElementsByClassName('household')[0].innerHTML = ""
  for (let x = 0; x < parseInt(localStorage.getItem('count')); x++) {
    let text = document.createTextNode(localStorage.getItem(x + 1))
    let li = document.createElement("LI")
    li.innerHTML = localStorage.getItem(x + 1)
    document.getElementsByClassName('household')[0].appendChild(li)
  }
}
