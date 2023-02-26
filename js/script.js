/*fetch('https://localhost/rainy-days/shop/wp-json/v2/shop%27)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    data.forEach(post => {
      let title = document.createElement('h2');
      title.textContent = post.title.rendered;
      let content = document.createElement('div');
      content.innerHTML = post.content.rendered;
      document.getElementById('myDiv').appendChild(title);
      document.getElementById('myDiv2').appendChild(content);
    });
  });

 fetch('https://localhost/rainy-days/shop/wp-json/v2/shop%27')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  }); 

const baseUrl = "http://localhost/lively-fit//wp-json/wp/v2";
const productContainer = document.getElementById("myDiv")
  
  async function getProducts(url){
      const response = await fetch(url);
      const products = await response.json();
      products.forEach(function(product){
          productContainer.innerHTML += 
          '<div id="myDiv">'+ product.header +'</div>';
})
console.log(products);
console.log(response);
}
getProducts(baseUrl);
*/



let request = new XMLHttpRequest
request.open("GET", "http://localhost/lively-fit//wp-json/wp/v2");
request.send();
request.onload = () => {
    console.log(request);
    console.log(request.posts);
}

/*
let request = new XMLHttpRequest();
request.open("GET", "http://localhost/lively-fit//wp-json/wp/v2/posts");
request.send();
request.onload = () => {
    const response = JSON.parse(request.responseText);
    const reponseitems = response[0];
    console.log(reponseitems.id);
    console.log(reponseitems.title);
    console.log(reponseitems.content);
}; */

function validContact() {
  var name = document.getElementsByClassName("subject");
  var email = document.getElementsByClassName("email");
  var subject = document.getElementsByClassName("subject");
  var message = document.getElementsByClassName("message");
  var error = [];

  if (name === "") {
    error.push("Name is required");
  } else if (name.lenght < 5) {
    errors.push("Please fill in your full name");
  }
  
  if (email === "") {
    error.push("Email is required");
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.push("Email is not valid");
  }
  
  if (subject === "") {
    error.push("Please fill in your subject");
  } else if (subject.lenght < 15) {
    error.push("Should at least be 15 characters long")
  }

  if (message === "") {
    error.push("Message is required to submit this form");
  } else if (message.lenght < 25) {
    error.push("Your message should at least be 25 characters long")
  }

  if (error.length > 0) {
    var errorDiv = document.createElement("div");
    errorDiv.style.color = "red";
    errorDiv.innerHTML = errors.join("<br>");
    document.getElementsByTagName("form")[0].appendChild(errorDiv);
  } else {
    alert("Form submitted successfully");
  }
};