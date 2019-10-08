// Add your code here
fetch(destinationURL, configurationObject)

let destinationURL = 'http://localhost:3000/dogs';
let configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
    "Accept": "application/json"
  }, 
  body: JSON.stringify({
    dogName: "Bryon",
    dogBreed: "Poodle"
  })
};