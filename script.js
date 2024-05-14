const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}



// Cart  Page


// remove product
var removebtn = document.getElementsByClassName('removebtn');

for (var i = 0; i < removebtn.length; i++) {
    var button = removebtn[i]
    button.addEventListener('click', function (event) {
        var btnclicked = event.target
        btnclicked.parentElement.parentElement.parentElement.remove()
        UpdtCrtTtl()
    });
}

// Update Subtotal

function UpdtCrtTtl() {

}

let funForId;
//// data from api
let productListElement = document.querySelectorAll('.pro-container');
const xhttpr = new XMLHttpRequest();

xhttpr.open('GET', 'https://fakestoreapi.com/products', true);

xhttpr.send();
xhttpr.onload = () => {
    try {
        if (xhttpr.status === 200) {
            const productList = JSON.parse(xhttpr.response);

            // console.log(productListElement);
            productList.forEach(product => {
                const mainDiv = document.createElement('div');
                mainDiv.classList.add('pro');
                mainDiv.id = product.id;


                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.title;
                mainDiv.appendChild(img);

                const detailsElement = document.createElement('div');
                detailsElement.classList.add('des');
                const brandSpan = document.createElement('span');
                brandSpan.innerHTML = product.category;
                detailsElement.appendChild(brandSpan);

                const title = document.createElement('h5');
                title.innerHTML = product.title;
                detailsElement.appendChild(title);

                const rating = document.createElement('div');
                rating.classList.add('star');
                rating.innerHTML = `<i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>`;


                const cardElement = document.createElement('div');
                cardElement.innerHTML = `
            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            `;

                mainDiv.appendChild(cardElement);

                // funForId = () =>{
                //     return this.product.id;
                // }
                const price = document.createElement('h4');
                price.innerHTML = `${product.price}$`;
                detailsElement.appendChild(price);

                mainDiv.appendChild(detailsElement);


                productListElement.forEach(Element => {
                    Element.appendChild(mainDiv.cloneNode(true));
                })


            });
        }

    } catch (error) {
        console.log(error);
    } finally {
        let mainDiv = document.querySelectorAll('.pro');
        mainDiv.forEach(Element => {
            Element.addEventListener('click', () => {
                window.open('product_details.html?id=' + this.id, '_blank');
            })
        })
    }

}



// function saveToDb(value, success, faliur) {
//     let networkSpeed = Math.floor(Math.random() * 10) + 1;

//     if (networkSpeed > 4) {
//         success();
//     } else {
//         faliur();
//     }
// }

// saveToDb("Bhawani", () => {
//     console.log("database1 : data1 saved");
//     saveToDb("Sonu", () => {
//         console.log("database2 : data2 saved");
//         saveToDb("Sanju", () => {
//             console.log("database3 : data3 saved");
//         }, () => {
//             console.log("Sorry3: weak connection");

//         })
//     }, () => {
//         console.log("Sorry2: weak connection");

//     })
// }, () => {
//     console.log("Sorry1: weak connection");

// })


let p = fetch('https://fakestoreapi.com/products');
p.then((response)=>{
    return response.json();

}).then( (response)=>{
    console.log(id);
})






