
/*
const APIcontainer = document.getElementById("apiresults")
const APISpirituality = document.getElementById("spiritualityAPI")
const APIAbout = document.getElementById("aboutAPI")

let request = new XMLHttpRequest();
request.open("GET", "http://localhost/lively-fit//wp-json/wp/v2/posts?per_page=1");
request.send();
request.onload = () => {
    const response = JSON.parse(request.responseText);
    const responseitems = response[0];
    const APIcontainer = document.getElementById("apiresults");
    const htmlString = `
        <div>
            <h2>${responseitems.title.rendered}</h2>
            <div>${responseitems.content.rendered}</div>
        </div>
    `;
    APIcontainer.innerHTML = htmlString;
};

let request = new XMLHttpRequest();
request.open("GET", "http://localhost/lively-fit//wp-json/wp/v2/posts?per_page=5");
request.send();
request.onload = () => {
    const response = JSON.parse(request.responseText);
    const responseitems = response[0];
    const APIAbout = document.getElementById("aboutAPI");
    const htmlString = `
        <div>
            <h2>${responseitems.title.rendered}</h2>
            <div>${responseitems.content.rendered}</div>
        </div>
    `;
    APIAbout.innerHTML = htmlString;
}; */

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
    const responseitems = response[0];
    const htmlString = `
      <div>
        <h2>${responseitems.title.rendered}</h2>
        <div>${responseitems.content.rendered}</div>
      </div>
    `;
    targetElement.innerHTML = htmlString;
  };
}

getAPIData("http://localhost/lively-fit//wp-json/wp/v2/posts?per_post=0", APILevel);
getAPIData("http://localhost/lively-fit//wp-json/wp/v2/posts?per_post=1", APIcontainer);
getAPIData("http://localhost/lively-fit//wp-json/wp/v2/posts?per_post=2", APIMeditation);
getAPIData("http://localhost/lively-fit//wp-json/wp/v2/posts?per_post=3", APIJourney);
getAPIData("http://localhost/lively-fit//wp-json/wp/v2/posts?per_post=4", APISpirituality);
getAPIData("http://localhost/lively-fit//wp-json/wp/v2/posts/${postId80}", APIAbout);




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
