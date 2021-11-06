const renderItems = (data) => {
    console.log(data);
}

fetch('https://food-delivery-ae0f1-default-rtdb.firebaseio.com/db/partners.json')
.then((response) => response.json())
.then((data) => {
    renderItems(data)
})
.catch((error) => {
    console.log(error);
})