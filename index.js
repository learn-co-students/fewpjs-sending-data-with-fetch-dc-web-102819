// Add your code here

function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail
    }

    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch('http://localhost:3000/users', configObj)
    .then(response => response.json())
    .then(obj => addToPage(obj.id))
    .catch(error => addToPage(error.message));
}

function addToPage(id) {
    let body = document.querySelector('body');
    // const div = document.createElement('div');
    // div.innerText = id;
    body.innerHTML = id;
}
