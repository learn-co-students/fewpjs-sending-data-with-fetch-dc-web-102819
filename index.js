// Add your code here

document.addEventListener("DOMContentLoaded" , function() {
    submitData()
})

let ourData = {
    name: "Steve" ,
    email: "steve@steve.com"
}


let configObj = {
    method: "POST" ,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    } ,
    body: JSON.stringify(ourData)
}

function submitData() {
    return fetch("http://localhost:3000/users",configObj)
    .then(response => response.json()) 
    .then(object =>  document.body.innerHTML = object["id"] ) 
    .catch(error =>  document.body.innerHTML = error.message ); 
}  

