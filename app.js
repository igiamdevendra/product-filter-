const productsData = document.querySelector('#products');
const searchedValue = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-btn');

searchButton.addEventListener('click', () => {
    filterProducts(searchedValue.value);
});

const products = {
    data: [
        {
            productName: "Regular White T-Shirt",
            category: "Topwear",
            price: "30",
            image: "/images/pace-combed-cotton-tshirt-polar-white-front.webp"
        },
        {
            productName: "Beige Short Skirt",
            category: "Bottomwear",
            price: "49",
            image: "/images/-473Wx593H-464717005-beige-MODEL.avif"
        },
        {
            productName: "Sporty SmartWatch",
            category: "Watch",
            price: "99",
            image: "/images/lovepik-sports-watch-png-image_400281485_wh1200.png"
        },
        {
            productName: "Basic Knitted Top",
            category: "Topwear",
            price: "29",
            image: "/images/Simple_Summer_Tank-10.jpg"
        },
        {
            productName: "Black Leather Jacket",
            category: "Jacket",
            price: "129",
            image: "/images/259e9d0f1f04491c8679b9673583964a.jpeg"
        },
        {
            productName: "Stylish Pink Trousers",
            category: "Bottomwear",
            price: "89",
            image: "/images/8dce64392323f3463e220c875f64987a.jpg"
        },
        {
            productName: "Brown Men's Jacket",
            category: "Jacket",
            price: "189",
            image: "/images/lifestyle-handsome-young-man-brown-600nw-2046136310.webp"
        },
        {
            productName: "Comfy Gray Pants",
            category: "Bottomwear",
            price: "49",
            image: "/images/Comfy_Pants-Pants-CY2159-Dark_Grey_876743e8-eea4-4ac7-9bf4-b834ee7fe214_800x.webp"
        },
    ]   
}




function filterProducts(value){
    

    productsData.innerHTML = "";
    let filteredProductsData = products.data;
    if(value !== undefined){
        filteredProductsData = filteredProductsData.filter((product) => {
            return product.category.toUpperCase() == value?.toUpperCase();
        })
    }
    for(let product of filteredProductsData){
        //creating card
        let card = document.createElement("div");
        //adding classes to card div
        card.classList.add("card");
        //imagaeDiv
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");
        //adding img tag
        let image = document.createElement('img');
        image.setAttribute('src', product.image);
        imgContainer.appendChild(image);
        card.appendChild(imgContainer);
        document.getElementById('products').appendChild(card);
    
        let container = document.createElement('div');
        container.classList.add('container');
        let name = document.createElement('h5');
        name.innerText = product.productName;
        container.appendChild(name);
        let price = document.createElement('h6');
        price.innerText = "$" + product.price;
        container.appendChild(price);
        card.appendChild(container);
    }
}

filterProducts(); // calling the function to display all products