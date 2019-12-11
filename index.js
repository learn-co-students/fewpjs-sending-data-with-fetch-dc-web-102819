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
            addToDOM(object.id);
        })
        .catch(function(error) {
            addToDOM(error.message);
        });

        function addToDOM(content) {
            let body = document.querySelector("body")
            let tag = document.createElement("p")
            body.append(tag)
            tag.append(`${content}`)

        }
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

