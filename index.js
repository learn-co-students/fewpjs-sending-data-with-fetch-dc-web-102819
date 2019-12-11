function submitData(name, email) {
    
    let configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com"
        })
    }
    return fetch("http://localhost:3000/users", configurationObject)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            let body = document.querySelector("body")
            let idTag = document.createElement("p")
            body.append(idTag)
            idTag.append(object.id);
        })
        .catch(function(error) {
            let body = document.querySelector("body")
            let errorTag = document.createElement("p")
            body.append(errorTag)
            errorTag.append(error.message)
        });
}
















// fetch("http://localhost:3000/dogs", configurationObject);

// let configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     })
// };


// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(object){
//         console.log(object);
//     });

