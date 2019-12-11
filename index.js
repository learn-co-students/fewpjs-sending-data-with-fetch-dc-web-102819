// let formData = {
//     dogname: 'Byron',
//     dogBreed: 'Poodle'
// }

// let configurationObject = {
//     method: 'POST'
//     headers: {
//         'Content-Type': 'application/json'
//         'Accept': 'application/json'
//     }
//     body: JSON.stringify(formData)
// }

// fetch('http://localhost:3000/dogs', configurationObject)
//     .then(function(response){return response.json()})
//     .then(function(object){console.log(object)})








// Declaring a method that takes two string arguments, user's name and user's email
function submitData(name,email){
    //Writing a post request to the users URL including method, headers, and body 
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name, 
            email
        })
    })
    //Handling the response first, accessing the newly created object second and appending the value of id to the DOM 
    .then(function(response){return response.json()})
    .then(function(object){document.body.innerHTML = object["id"]})
    //Handling errors; appending the message from the error object to the DOM
    .catch(function(error){document.body.innerHTML = error.message})
}