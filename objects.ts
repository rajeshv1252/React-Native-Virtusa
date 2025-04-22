//. Reading a Known Object and Its Values


type Customer = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
  
  const customer: Customer = {
    id: 101,
    firstName: "Rajesh",
    lastName: "Kumar",
    email: "rajesh@example.com"
  };
  
  function readKnownObject(obj: Customer) {
    for (const key in obj) {
      console.log(`${key}: ${obj[key as keyof Customer]}`);
    }
  }
  
  readKnownObject(customer);


  //Reading a Dynamic Object and Its Values

  function readDynamicObject(obj: Record<string, any>) {
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
  
  