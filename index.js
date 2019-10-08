// Add your code here
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

fetch(destinationURL, configurationObject)
  