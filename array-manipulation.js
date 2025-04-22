// 1. Create a collection of Customer Objects (array)
const customers = [
    {
        customerId: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        city: "Bangalore",
        age: 28,
        salary: 60000,
    },
    {
        customerId: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@example.com",
        city: "Hyderabad",
        age: 36,
        salary: 75000,
    },
    {
        customerId: 3,
        firstName: "Raj",
        lastName: "Kumar",
        email: "raj@example.com",
        city: "Bangalore",
        age: 42,
        salary: 90000,
    },
];
//2. Merge Two Customer Objects
const customerA = {
    customerId: 4,
    firstName: "Amit",
    lastName: "Verma",
    email: "amit@example.com",
    city: "Chennai",
    age: 34,
    salary: 50000,
};
const customerB = {
    customerId: 5,
    firstName: "Amit", // same name
    lastName: "V.",
    email: "amit.v@example.com",
    city: "Chennai",
    age: 35,
    salary: 55000,
};
// Merge two customers: B will override A's fields
const mergedCustomer = Object.assign(Object.assign({}, customerA), customerB);
console.log("Merged Customer:", mergedCustomer);
//3. Group Customers by City
function groupByCity(customers) {
    return customers.reduce((acc, customer) => {
        const city = customer.city;
        if (!acc[city]) {
            acc[city] = [];
        }
        acc[city].push(customer);
        return acc;
    }, {});
}
const groupedByCity = groupByCity(customers);
console.log("Grouped by City:", groupedByCity);
//4. Group Customers by Age Range
function groupByAgeRange(customers) {
    const ranges = {
        "25-35": [],
        "36-40": [],
        "40+": [],
    };
    for (const customer of customers) {
        if (customer.age >= 25 && customer.age <= 35) {
            ranges["25-35"].push(customer);
        }
        else if (customer.age >= 36 && customer.age <= 40) {
            ranges["36-40"].push(customer);
        }
        else if (customer.age > 40) {
            ranges["40+"].push(customer);
        }
    }
    return ranges;
}
const groupedByAgeRange = groupByAgeRange(customers);
console.log("Grouped by Age Range:", groupedByAgeRange);
