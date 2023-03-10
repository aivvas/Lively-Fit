


const APIcontainer = document.getElementById("apiresults");
const APISpirituality = document.getElementById("spiritualityAPI");
const APIAbout = document.getElementById("aboutAPI");
const APIJourney = document.getElementById("journeyAPI");
const APIMeditation = document.getElementById("APIMeditation");
const APILevel = document.getElementById("APILevelUP");

function getAPIData(url, targetElement) {
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();
  request.onload = () => {
    const response = JSON.parse(request.responseText);
    const htmlString = `
      <div>
        <h2>${response.title.rendered}</h2>
        <div>${response.content.rendered}</div>
      </div>
    `;
    targetElement.innerHTML = htmlString;
  };
}

getAPIData("http://localhost/lively-fit/wp-json/wp/v2/posts/80", APIAbout); 
getAPIData("http://localhost/lively-fit//wp-json/wp/v2/posts/85", APISpirituality);
getAPIData("http://localhost/lively-fit//wp-json/wp/v2/posts/89", APIJourney);
getAPIData("http://localhost/lively-fit//wp-json/wp/v2/posts/92", APIMeditation);
getAPIData("http://localhost/lively-fit//wp-json/wp/v2/posts/95", APIcontainer);
getAPIData("http://localhost/lively-fit//wp-json/wp/v2/posts/101", APILevel);



function validContact() {
  var name = document.getElementsByClassName("name");
  var email = document.getElementsByClassName("email");
  var subject = document.getElementsByClassName("subject");
  var message = document.getElementsByClassName("message");
  var error = [];

  if (name === "") {
    error.push("Name is required");
  } else if (name.length < 5) {
    error.push("Please fill in your full name");
  }
  
  if (email === "") {
    error.push("Email is required");
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    error.push("Email is not valid");
  }
  
  if (subject === "") {
    error.push("Please fill in your subject");
  } else if (subject.length < 15) {
    error.push("Should be at least 15 characters long")
  }

  if (message === "") {
    error.push("Message is required to submit this form");
  } else if (message.length < 25) {
    error.push("Your message should be at least 25 characters long")
  }

  if (error.length > 0) {
    var errorDiv = document.createElement("div");
    errorDiv.style.color = "red";
    errorDiv.innerHTML = error.join("<br>");
    document.getElementsByTagName("form")[0].appendChild(errorDiv);
  } else {
    alert("Form submitted successfully");
  }
};

validContact();
