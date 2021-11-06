const renderItems = (data) => {
    console.log(data);
}

fetch(`https://food-delivery-ae0f1-default-rtdb.firebaseio.com/db/food-band.json`)
.then((response) => response.json())
.then((data) => {
    renderItems(data)
})
.catch((error) => {
    console.log(error);
})

fetch(`https://food-delivery-ae0f1-default-rtdb.firebaseio.com/db/gusi-lebedi.json`)
.then((response) => response.json())
.then((data) => {
    renderItems(data)
})
.catch((error) => {
    console.log(error);
})

fetch(`https://food-delivery-ae0f1-default-rtdb.firebaseio.com/db/palki-skalki.json`)
.then((response) => response.json())
.then((data) => {
    renderItems(data)
})
.catch((error) => {
    console.log(error);
})

fetch(`https://food-delivery-ae0f1-default-rtdb.firebaseio.com/db/pizza-burger.json`)
.then((response) => response.json())
.then((data) => {
    renderItems(data)
})
.catch((error) => {
    console.log(error);
})

fetch(`https://food-delivery-ae0f1-default-rtdb.firebaseio.com/db/pizza-plus.json`)
.then((response) => response.json())
.then((data) => {
    renderItems(data)
})
.catch((error) => {
    console.log(error);
})

fetch(`https://food-delivery-ae0f1-default-rtdb.firebaseio.com/db/tanuki.json`)
.then((response) => response.json())
.then((data) => {
    renderItems(data)
})
.catch((error) => {
    console.log(error);
})