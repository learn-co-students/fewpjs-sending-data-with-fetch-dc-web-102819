// Add your code here
document.addEventListener('DOMContentLoaded', function() {
  submitClickListener()
})

function iShowSomeghing(json) {
  console.log(json)
}

function submitClickListener() {
  const submitBtn = document.getElementById('submit')
  submitBtn.addEventListener('click',getValues)
}

function getValues(event) {
  event.preventDefault()
  let userName = document.getElementById('userName').value
  let userEmail = document.getElementById('userEmail').value
  submitData(userName, userEmail)
}


function submitData(name, email) {
  let reqBody = {
    name,
    email
  }

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(reqBody)
  }

  return fetch('http:localhost:3000/users', configObj)
  .then(resp => resp.json())
  .then(processData => addUserDataToBody(processData))
  .catch(error => houstonWeHaveAproblem(error))
}

function houstonWeHaveAproblem(error) {
  let errorSpan = document.createElement('span')
  let divFormUser = document.querySelector('#form-user')

  let errorMessage = 'Unauthorized Access'

  errorSpan.innerText = errorMessage
  divFormUser.appendChild(errorSpan)
  console.log(error.message);
}

function addUserDataToBody(userData) {
  // creating tags to show in the DOM
  let h1TagID = document.createElement('h1')
  let h1TagName = document.createElement('h1')
  let h1TagEmail = document.createElement('h1')

  // selecting the form
  let divFormUser = document.querySelector('#show-user-data')

  // formmating the inner text
  h1TagID.innerText = 'ID: ' + userData.id
  h1TagName.innerText = 'Name: ' + userData.name
  h1TagEmail.innerText = 'Email: ' + userData.email

// append to the divFormUser
  divFormUser.appendChild(h1TagID)
  divFormUser.appendChild(h1TagName)
  divFormUser.appendChild(h1TagEmail)

  // append to the body of the html
  let bodyTag = document.querySelector('body')
  bodyTag.appendChild(h1TagID)
  bodyTag.appendChild(h1TagName)
  bodyTag.appendChild(h1TagEmail)

}
