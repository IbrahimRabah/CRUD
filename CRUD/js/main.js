
var currentIdex;

var productsContainer =[];
if(localStorage.getItem('ourProducts') != null)
{
    productsContainer = JSON.parse( localStorage.getItem('ourProducts'))
    displayProducts();
}



// variables contain the input it self not only value of input 
// global variable to use them in different function

var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productproductCategoryInput = document.getElementById('productCategory');
var productDescriptionInput = document.getElementById('productDescription');

// function made object contain the values of hte product when added in the input and it has called/invoked when entering in the button 
// store this object in array to save them otherwise if we dont save them in array the new object created will remove the last one 



function addProduct(){

    if(document.getElementById("mainBtn").innerHTML == "add Product")
    {

    var product = {
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productproductCategoryInput.value,
        description:productDescriptionInput.value,
    }
    productsContainer.push(product);
    
    //take the array and save them in local storage 
    // JSON.stringfy used to converte array to string as the setItem method take value and key as string  
    localStorage.setItem('ourProducts',JSON.stringify( productsContainer));
     displayProducts();
    // call the clear function
    clearForm();
    }
    else
    {
        submitProduct(currentIdex);
        localStorage.setItem('ourProducts',JSON.stringify( productsContainer));
        displayProducts();
}
}
// function to clear the input after app the product in array
function clearForm(){
    productNameInput.value = "";
    productPriceInput.value = "";
    productproductCategoryInput.value = "";
    productDescriptionInput.value = "";
}

function displayProducts() {
    var cartona =``;
    for(var i = 0 ; i < productsContainer.length ; i++ )
    {
        cartona+= `<tr>
        <td>${i}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].description}</td>
        <td><button onclick="updateProduct(${i})" class="btn btn-outline-warning"">update</button></td>
        <td><button  onclick="delateProduct(${i})" class="btn btn-outline-danger">delate</button></td>

        
        </tr>`;
    
    }
    document.getElementById("tableBody").innerHTML=cartona;
}

// function to delate item from productContainer and localStorage when press to delate buttom take index and remove it
function delateProduct(index){
    productsContainer.splice(index,1);
    localStorage.setItem('ourProducts',JSON.stringify( productsContainer));
    displayProducts();

}


//function take item and translate it to lowerCase and search on th productContainer if we find it 
// we will store it in caryona and take the last one and but them in table body 
// when we keyup on the search on the search button we will call the searchProduct function.
function searchProduct(term){
    var cartona =``;

    for(var i = 0; i< productsContainer.length ; i++){
        if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true)
        {
            cartona+= `<tr>
            <td>${i}</td>
            <td>${productsContainer[i].name}</td>
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].description}</td>
            <td><button onclick="updateProduct(${i})" class="btn btn-outline-warning"">update</button></td>
            <td><button  onclick="delateProduct(${i})" class="btn btn-outline-danger">delate</button></td>
            </tr>`;
        }
    }
    document.getElementById("tableBody").innerHTML=cartona;
}


function updateProduct(index){
    document.getElementById("mainBtn").innerHTML= "update Product";
    productNameInput.value = productsContainer[index].name;
    productPriceInput.value = productsContainer[index].price;
    productproductCategoryInput.value = productsContainer[index].category;
    productDescriptionInput.value = productsContainer[index].description;
    //document.getElementById("mainBtn").innerHTML= "update Product";
    currentIdex = index;

}

function submitProduct(currentIdex){
     productsContainer[currentIdex].name = productNameInput.value ;
     productsContainer[currentIdex].price = productPriceInput.value ;
     productsContainer[currentIdex].category = productproductCategoryInput.value ;
     productsContainer[currentIdex].description = productDescriptionInput.value ;
}

function searchByPrice(asd){
    var cartona =``;

    for(var i = 0; i< productsContainer.length ; i++){
        if(productsContainer[i].price <= asd)
        {
            cartona+= `<tr>
            <td>${i}</td>
            <td>${productsContainer[i].name}</td>
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].description}</td>
            <td><button onclick="updateProduct(${i})" class="btn btn-outline-warning"">update</button></td>
            <td><button  onclick="delateProduct(${i})" class="btn btn-outline-danger">delate</button></td>
            </tr>`;
        }
    }
    document.getElementById("tableBody").innerHTML=cartona;
}