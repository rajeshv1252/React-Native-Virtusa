// Define Customer type
type Customer = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    age: number;
    salary: number;
  };
  
  // Generate a random customer object
  function generateRandomCustomer(id: number): Customer {
    const firstNames = ["Rajesh", "Anita", "John", "Jane", "Michael", "Sara"];
    const lastNames = ["Kumar", "Smith", "Brown", "Johnson", "Taylor", "Davis"];
    const cities = ["Hyderabad", "Mumbai", "Bangalore", "Chennai", "Delhi"];
    
    const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
  
    return {
      id,
      firstName: getRandomItem(firstNames),
      lastName: getRandomItem(lastNames),
      email: `${id}@example.com`,
      city: getRandomItem(cities),
      age: Math.floor(Math.random() * (60 - 20 + 1)) + 20, // Random age between 20 and 60
      salary: Math.floor(Math.random() * (120000 - 30000 + 1)) + 30000 // Random salary between 30K to 120K
    };
  }
  
  // Function to create an array of customers
  function createCustomerArray(count: number): Customer[] {
    const customers: Customer[] = [];
    
    for (let i = 1; i <= count; i++) {
      customers.push(generateRandomCustomer(i));
    }
  
    return customers;
  }
  
  const customers = createCustomerArray(1000000);
  
  console.log(customers.slice(0, 5));
  console.log(customers.length)
  