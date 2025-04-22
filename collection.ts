//1. Map – Key-Value Store (Preserves Insertion Order)
//Use Case: Caching API responses, mapping IDs to objects

const userMap = new Map<number, string>();

// Add entries
userMap.set(1, "Rajesh");
userMap.set(2, "Anita");

// Access
console.log(userMap.get(1)); // "Rajesh"

// Check presence
console.log(userMap.has(2)); // true

// Iterate
for (const [id, name] of userMap) {
  console.log(`User ID ${id} is ${name}`);
}

// Delete
userMap.delete(1);

//2. WeakMap – Key-Value Store with object keys only, weak references

const privateData = new WeakMap<object, string>();

class Session {
  constructor(private id: string) {
    privateData.set(this, id);
  }

  getId(): string | undefined {
    return privateData.get(this);
  }
}

const session = new Session("abc123");
console.log(session.getId()); // "abc123"

//Set – Unique Values Collection

const userIds = new Set<number>();

userIds.add(101);
userIds.add(102);
userIds.add(101); // Duplicate, ignored

console.log(userIds.has(102)); // true
console.log(userIds.size);     // 2

userIds.delete(101);

// Iterate
for (const id of userIds) {
  console.log("Active User ID:", id);
}