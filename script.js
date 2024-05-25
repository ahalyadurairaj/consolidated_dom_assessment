

var mainContainer = document.getElementById('container');

// Fetch the elements from the API
fetch('https://dummyjson.com/products/search?q=phone')
.then(response => response.json())
.then(data => {
    // Check if products exist in the response
    if (data.products && data.products.length > 0) {
        


    //button1 clicking function
        function onefun(){

             //adding class to buttons
            button1.classList.add('bgcolor');
            button2.classList.remove('bgcolor');
            button3.classList.remove('bgcolor');
            button4.classList.remove('bgcolor');
            
            // product firstdiv
            productImage.src = data.products[0].images[0];
            productDisc.textContent = data.products[0].description;
            productPrice.textContent = `$ ${data.products[0].price}`;

            //product seconddiv
            secImg.src = data.products[1].images[0];
            secDisc.textContent = data.products[1].description;
            secPrice.textContent = `$ ${data.products[1].price}`;
        
            //product thirddiv
            ThreeImg.src = data.products[2].images[0];
            ThreeDisc.textContent = data.products[2].description;
            ThreePrice.textContent = `$ ${data.products[2].price}`;
        }

        //button2 clicking function
        function twobutton(){

             //adding class to buttons
            button1.classList.remove('bgcolor');
            button2.classList.add('bgcolor');
            button3.classList.remove('bgcolor');
            button4.classList.remove('bgcolor');
            
            productImage.src = data.products[3].images[0];
            productDisc.textContent = data.products[3].description;
            productPrice.textContent =`$ ${data.products[3].price}`;

            secImg.src = data.products[4].images[0];
            secDisc.textContent = data.products[4].description;
            secPrice.textContent = `$ ${data.products[4].price}`;

            ThreeImg.src = data.products[5].images[0];
            ThreeDisc.textContent = data.products[5].description;
            ThreePrice.textContent =`$ ${data.products[5].price}`;
        }


        //button3 clicking function
        function threebutton(){

             //adding class to buttons
            button1.classList.remove('bgcolor');
            button2.classList.remove('bgcolor');
            button3.classList.add('bgcolor');
            button4.classList.remove('bgcolor');
            
            productImage.src = data.products[6].images[0];
            productDisc.textContent = data.products[6].description;
            productPrice.textContent = `$ ${data.products[6].price}`;

            secImg.src = data.products[7].images[0];
            secDisc.textContent = data.products[7].description;
            secPrice.textContent = `$ ${data.products[7].price}`;

            ThreeImg.src = data.products[8].images[0];
            ThreeDisc.textContent = data.products[8].description;
            ThreePrice.textContent = `$ ${data.products[8].price}`;
        }

        //button4 clicking function
        function fourbutton(){
            

            //adding class to buttons
            button1.classList.remove('bgcolor');
            button2.classList.remove('bgcolor');
            button3.classList.remove('bgcolor');
            button4.classList.add('bgcolor');            

            productImage.src = data.products[9].images[0];
            productDisc.textContent = data.products[9].description;
            productPrice.textContent = `$ ${data.products[9].price}`;

            secImg.src = data.products[10].images[0];
            secDisc.textContent = data.products[10].description;
            secPrice.textContent = `$ ${data.products[10].price}`;

            ThreeImg.src = data.products[11].images[0];
            ThreeDisc.textContent = data.products[11].description;
            ThreePrice.textContent = `$ ${data.products[11].price}`;
        }

        let currentIndex = 0 ;

        // Array of functions to be called
        var arr = [onefun, twobutton, threebutton, fourbutton];

        // Call the first function
        function updateDisplay() {
            arr[currentIndex]();
            updateArrows()
        }

        function updateArrows() {
            backarrow.classList.toggle('disabled', currentIndex === 0);
            forwardarrow.classList.toggle('disabled', currentIndex === arr.length-1);
        }

        // leftarrow function on page load
        function leftArrow() {
            if (currentIndex >0) {
                currentIndex--;
                updateDisplay();
            }
        }

        // riigght arrow function on page load
        function rightArrow() {
            if (currentIndex < arr.length-1) {
                currentIndex++;
                updateDisplay();
            }
        }

        // Create a product div container
        var productcontainer = document.createElement('div');
            productcontainer.setAttribute('id', 'productcon')
        let productDiv = document.createElement('div');
        productDiv.setAttribute('class', 'Productdiv');
        let productImage = document.createElement('img');
        productImage.setAttribute('class', 'productpic');
        let productDisc = document.createElement('p');
        let productPrice = document.createElement('h2');

        // Create a second product div
        let productDiv2 = document.createElement('div');
        productDiv2.setAttribute('class', 'Productdiv');
        let secImg = document.createElement('img');
        secImg.setAttribute('class', 'productpic');
        let secDisc = document.createElement('p');
        let secPrice = document.createElement('h2');

        // Create a third product div
        let ProductDiv3 = document.createElement('div');
        ProductDiv3.setAttribute('class', 'Productdiv');
        let ThreeImg = document.createElement('img');
        ThreeImg.setAttribute('class', 'productpic');
        let ThreeDisc = document.createElement('p');
        let ThreePrice = document.createElement('h2');

        // Buttons elements
        var buttonDiv = document.createElement('div');
        buttonDiv.setAttribute('class', 'buttondiv');

        // Arrow elements creation
        var backarrow = document.createElement('i');
        backarrow.setAttribute('class', 'fa-solid fa-backward');

        // Button elements creation
        var button1 = document.createElement('button');
        button1.textContent = '1';

        var button2 = document.createElement('button');
        button2.textContent = '2';

        var button3 = document.createElement('button');
        button3.textContent = '3';

        var button4 = document.createElement('button');
        button4.textContent = '4';
        var forwardarrow = document.createElement('i');
        forwardarrow.setAttribute('class', 'fa-solid fa-forward');

        // Product container appending to mainContainer
        mainContainer.append(productcontainer);
        productcontainer.append(productDiv);
        productDiv.append(productImage);
        productDiv.append(productDisc);
        productDiv.append(productPrice);

        // Second products appending to productcontainer
        productcontainer.append(productDiv2);
        productDiv2.append(secImg);
        productDiv2.append(secDisc);
        productDiv2.append(secPrice);

        // Third products appending to productcontainer
        productcontainer.append(ProductDiv3);
        ProductDiv3.append(ThreeImg);
        ProductDiv3.append(ThreeDisc);
        ProductDiv3.append(ThreePrice);

        // Buttons appending to mainContainer
        mainContainer.append(buttonDiv);
        buttonDiv.append(backarrow);
        buttonDiv.append(button1);
        buttonDiv.append(button2);
        buttonDiv.append(button3);
        buttonDiv.append(button4);
        buttonDiv.append(forwardarrow);

        // Add event listeners to buttons
        button1.addEventListener('click', onefun);
        button2.addEventListener('click', twobutton);
        button3.addEventListener('click', threebutton);
        button4.addEventListener('click', fourbutton);

        // Add event listeners to arrows
        backarrow.addEventListener('click', leftArrow);
        forwardarrow.addEventListener('click', rightArrow);

        // Initialize display
        updateDisplay();

    } 
    
    else {
        console.log('No products found');
    }
})
.catch(error => console.error('Error fetching the products:', error));

    