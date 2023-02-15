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
product();