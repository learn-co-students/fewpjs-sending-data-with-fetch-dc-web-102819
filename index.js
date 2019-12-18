// Add your code here
// Add your code here
let formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
}

let configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
}
fetch('http://localhost:3000/dogs', configurationObject)
    .then(function(response) {
        return response.json()
    })
    .then(function(object) {
        console.log(object)
    })
    .catch(function(error) {
        alert("Bad things! Ragnarok!")
        console.log(error.message)
})


const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh"

function getJSON(url) {
    return fetch(url).then(response => response.json())
}

getJSON(url).then(console.log)

function submitData(userName, userEmail) {
    let data = {
        name: userName,
        email: userEmail
    }

    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }
    return fetch('http://localhost:3000/users', configObject)
        .then( function(response) {
            return response.json()
        })
        .then( function(object) {
            document.body.innerHTML = object['id']
        })
        .catch( function(error) {
            document.body.innerHTML = error.message
        })
}

function appendToDOM(userInfo) {
    console.log('testing')
}

submitData('matt', 'matt email')