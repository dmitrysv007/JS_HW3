"user strict"


let prodoctsBurger = [{
        name: "Mini cheese Burger",
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
        price: "$9.00",
        imageProduct: "/img/menu-burger.jpg"
    },
    {
        name: "Double size burger",
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
        price: "$11.00",
        imageProduct: "/img/menu-burger.jpg"
    },
    {
        name: "Bacon, EGG and Cheese",
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
        price: "$13.00",
        imageProduct: "/img/menu-burger.jpg"
    },
    {
        name: "Pulled porx Burger",
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
        price: "$18.00",
        imageProduct: "/img/menu-burger.jpg"
    },
    {
        name: "Fried chicken Burger",
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
        price: "$22.00",
        imageProduct: "/img/menu-burger.jpg"
    }
];
 
let prodoctsSnacks = [{
    name: "Corn Tikki - Spicy fried Aloo",
    description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
    price: "$15.00",
    imageProduct: "/img/menu-snack.jpg"
},
{
    name: "Bread besan Toast",
    description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
    price: "$35.00",
    imageProduct: "/img/menu-snack.jpg"
},
{
    name: "Healthy soya nugget snacks",
    description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
    price: "$20.00",
    imageProduct: "/img/menu-snack.jpg"
},
{
    name: "Tandoori Soya Chunks",
    description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
    price: "$30.00",
    imageProduct: "/img/menu-snack.jpg"
}
];

let prodoctsBeverage     = [{
    name: "Single Cup Brew",
    description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
    price: "$7.00",
    imageProduct: "/img/menu-beverage.jpg"
},
{
    name: "Caffe Americano",
    description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
    price: "$9.00",
    imageProduct: "/img/menu-beverage.jpg"
},
{
    name: "Caramel Macchiato",
    description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
    price: "$15.00",
    imageProduct: "/img/menu-beverage.jpg"
},
{
    name: "Standard black coffee",
    description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
    price: "$8.00",
    imageProduct: "/img/menu-beverage.jpg"
},
{
    name: "Standard black coffee",
    description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
    price: "$12.00",
    imageProduct: "/img/menu-beverage.jpg"
}
];

let divWrap = document.createElement('div');
document.body.append(divWrap);
divWrap.className = 'divWrapBlock';


function blockProduct(prodocts, imgContent) {
   
    let divBlock = document.createElement('div');
    
    divBlock.className = 'wrapper';
    divWrap.appendChild(divBlock);
    
    

    prodocts.forEach(function (item) {

        let div = document.createElement('div');
        let divProduct = document.createElement('div');
        let divNameProduct = document.createElement('div');
        let divDescriptionProduct = document.createElement('div');
        let divPriceProduct = document.createElement('div');
        let img = document.createElement('img');


        
        div.className = 'block__product';
        divProduct.className = 'product';
        divNameProduct.className = 'name__product';
        divDescriptionProduct.className = 'description__product'
        divPriceProduct.className = 'price__product'
        img.className = 'img__product';

        divNameProduct.innerHTML = item['name'];
        divDescriptionProduct.innerHTML = item['description'];
        divPriceProduct.innerHTML = item['price'];
        img.src = item['imageProduct'];


        
        divBlock.appendChild(div);

        div.appendChild(img);
        div.appendChild(divProduct);
        div.appendChild(divPriceProduct);

        divProduct.appendChild(divNameProduct);
        divProduct.appendChild(divDescriptionProduct);

    });

    let imgBlock = document.createElement('img');
    imgBlock.src = imgContent;
    imgBlock.className = 'img__block';
    divWrap.appendChild(imgBlock);

   

};

let burger = "/img/menu-burger-img.jpg";
let snack = "/img/menu-snack-img.jpg";

let productOne = document.getElementById("product1");
let productTwo = document.getElementById("product2");
let productThree = document.getElementById("product3");

blockProduct(prodoctsBurger, snack);

/*
productTwo.addEventListener( "click" , function (){
    divWrap.remove();
    let divWrap = document.createElement('div');
    document.body.append(divWrap);
    divWrap.className = 'divWrapBlock'; 
    blockProduct(prodoctsBurger, burger);

    
})
/*
productTwo.addEventListener( "click" , function (){
    let divWrap = document.createElement('div');
    document.body.append(divWrap);
    divWrap.className = 'divWrapBlock'; 
   
})

productTwo.addEventListener( "click" , function (){
    blockProduct(prodoctsBurger, burger);
})









