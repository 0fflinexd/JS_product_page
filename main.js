let products = [  {    name: "Banana",    description: "A green banana, so say a berry, and they are correct",    price: 9  },  {    name: "Apple",    description: "A red fruit",    price: 7  },  {    name: "Orange",    description: "An orange fruit",    price: 10  },];

function showProducts() {
  let html = "";

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    html += `
      <div class="product" data-index="${i}">
        <h2>${product.name}</h2>
        <div class="info">
          <p>${product.description}</p>
        </div>
        <button class="remove" data-product-name="${product.name}">Ta bort</button>
        <button class="move-up" data-product-name="${product.name}">Flytta upp</button>
        <button class="move-down" data-product-name="${product.name}">Flytta ner</button>
        <hr>
      </div>
    `;
  }

  document.querySelector(".products").innerHTML = html;
}

function handleEvents() {
  document.querySelector("body").addEventListener("click", function(event) {
    let productClicked = event.target.closest(".product");
    if (!productClicked) {
      return;
    }

    let infoProduct = productClicked.querySelector(".info");
    infoProduct.style.display =
      infoProduct.style.display === "block" ? "none" : "block";

    let removeButton = event.target.closest(".remove");
    if (removeButton) {
      let productName = removeButton.getAttribute("data-product-name");
      products = products.filter((product) => product.name !== productName);
      productClicked.remove();
    }

    let moveUpButton = event.target.closest(".move-up");
    if (moveUpButton) {
      let productIndex = parseInt(productClicked.getAttribute("data-index"));
      if (productIndex > 0) {
        let temp = products[productIndex - 1];
        products[productIndex - 1] = products[productIndex];
        products[productIndex] = temp;
        showProducts();
      }
    }

    let moveDownButton = event.target.closest(".move-down");
    if (moveDownButton) {
      let productIndex = parseInt(productClicked.getAttribute("data-index"));
      if (productIndex < products.length - 1) {
        let temp = products[productIndex + 1];
        products[productIndex + 1] = products[productIndex];
        products[productIndex] = temp;
        showProducts();
      }
    }
  });

  let addProductForm = document.querySelector("#add-product-form");
  addProductForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.querySelector("#name").value;
    let description = document.querySelector("#description").value;

    if (name && description) {
      let newProduct = {
        name: name,
        description: description
      };

      products.push(newProduct);
      showProducts();
      addProductForm.reset();
    } else {
      alert("Please fill in all fields!");
    }
  });
}

showProducts();
handleEvents();
