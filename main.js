let products = [
    {
        name: "Banana",
        description: "A green banana, so say a berry, and they are correct",
        price: 9
     },
     {
        name: "Apple",
        description: "A red fruit",
        price: 7
     },
     {
        name: "Orange",
        description: "A orange fruit",
        price: 10
     },
    ];

    function showProducts()
    {
        let html = " ";

        for(let product of products)
        {
            html +=`
            <div class="product">
                <h2> ${product.name}</h2>
                <div class="info">
                    <p>${product.description}</p>
                    <p>Pris: <b>${product.price}</b></p>
                </div>
                <button class="remove" data-product-name="${product.name}">Remove</button>
                <button class="Move Up" data-product-name="${product.name}">Move Up</button>
                <hr>
            </div>`;
        }
        document.querySelector('.products').innerHTML = html;
    }



    //Handle all click events
    function handleEvents()
    {
        //add eventlistener to entire body
        document.querySelector('body').addEventListener('click',function(event) {
            let productCLicked = event.target.closest('.product');

            if(!productCLicked) {return;}

            let infoProduct = productCLicked.querySelector('.info');
            //Ternary operator  if block go none 
            infoProduct.style.display = infoProduct.style.display === 'block' ? 'none' : 'block'

            let removeButton = event.target.closest('.remove')
            if(removeButton)
            {
                
                let productName = removeButton.getAttribute('data-product-name');

                products = products.filter((product) => product.name !== productName);
                productCLicked.remove();
            }
        });
            
            let addProductForm = document.querySelector('#add-product-form');
            addProductForm.addEventListener('submit', function(event) 
            {

                event.preventDefault();

                let name = document.querySelector('#name').value;
                let description = document.querySelector('#description').value;
                let price = Number(document.querySelector('#price').value);

                if(name && description && price) 
                {
                    let newProduct = {
                    name: name,
                    description: description,
                    price: price
                    };

                    products.push(newProduct);

                    //reset the form and show new div
                    let productsDiv = document.querySelector('.products');
                    productsDiv.innerHTML = '';
                    showProducts();

                    addProductForm.reset();
                }
                else 
                {
                        alert('Please fill in all fields!');
                }
                
            });
        }
    


    showProducts();
    handleEvents();



