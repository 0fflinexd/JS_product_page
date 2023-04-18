let aktiviteter = [
    // {
    //     name: "Banana",
    //     description: "A green banana, so say a berry, and they are correct",
    //     price: 9
    //  },
    //  {
    //     name: "Apple",
    //     description: "A red fruit",
    //     price: 7
    //  },
    //  {
    //     name: "Orange",
    //     description: "A orange fruit",
    //     price: 10
    //  },
    ];

    function showProducts()
    {
        let html = " ";

        for(let product of aktiviteter)
        {
            html +=`
            <div class="product">
                <h2> ${product.name}</h2>
                <div class="info">
                    <p>${product.description}</p>
                </div>
                <button class="remove" data-product-name="${product.name}">Ta bort</button>
                <button class="Move Up" data-product-name="${product.name}">Flytta upp</button>
                <button class="Move Up" data-product-name="${product.name}">Flytta ner</button>
                <hr>
            </div>`;
        }
        document.querySelector('.aktiviteter').innerHTML = html;
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

                aktiviteter = aktiviteter.filter((product) => product.name !== productName);
                productCLicked.remove();
            }
        });
            
            let addProductForm = document.querySelector('#add-product-form');
            addProductForm.addEventListener('submit', function(event) 
            {

                event.preventDefault();

                let name = document.querySelector('#name').value;
                let description = document.querySelector('#description').value;

                if(name && description) 
                {
                    let newProduct = {
                    name: name,
                    description: description
                    };

                    aktiviteter.push(newProduct);

                    //reset the form and show new div
                    let productsDiv = document.querySelector('.aktiviteter');
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



