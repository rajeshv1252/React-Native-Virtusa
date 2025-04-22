//. Reading a Known Object and Its Values
const customer = {
    id: 101,
    firstName: "Rajesh",
    lastName: "Kumar",
    email: "rajesh@example.com"
};
function readKnownObject(obj) {
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}
readKnownObject(customer);
//Reading a Dynamic Object and Its Values
function readDynamicObject(obj) {
    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
}
const dynamicData = {
    productId: 555,
    productName: "Samsung Galaxy",
    inStock: true,
    rating: 4.5
};
readDynamicObject(dynamicData);
