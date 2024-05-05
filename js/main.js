const carData= [
    {
        name: "CAR 1",
        type: "Sports",
        price: 200,
        image: "images/bike-1png",
        tag: "Free Cancelation",
    },

    {
        name: "CAR 2",
        type: "Pickup",
        price: 200,
        image: "images/bike-2png",
        tag: "Free Cancelation",
    },

    {
        name: "CAR 3",
        type: "Sedan",
        price: 200,
        image: "images/bike-3png",
        tag: "Free Cancelation",
    },

    {
        name: "CAR 4",
        type: "Offroad",
        price: 200,
        image: "images/bike-4png",
        tag: "Free Cancelation",
    },
];
//Function to create car box element
const createCarBox = (car) => 
<div class ="car-box">
<img src="${car.image}" alt="none" class="box-img" />
    <div class="title-price">
        <div class="title-data">
            <h2>${car.name}</h2>
            <p>${car.type}</p>
        </div>
        <h3 class="car-price">$${car.price}<span>/hour</span></h3> 
    </div>
<a href="#" class="book-btn">Rent Now</a>
<span class="tag">$car.tag</span>
</div>
;
//shows the data in bike content
const carContent = document.querySelector('.car-contents');

carData.forEach((car)  => {
    const carBoxHtml = createCarBox(car);
    carContent.insertAdjacentHTML('beforeend', carBoxHtml);
})

// MENU
let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle("move");
}