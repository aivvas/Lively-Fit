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