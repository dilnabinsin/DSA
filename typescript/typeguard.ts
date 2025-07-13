type Dog = { type: 'dog'; bark: () => void };
type Cat = { type: 'cat'; meow: () => void };

function isDog(pet: Dog | Cat): pet is Dog {
  return pet.type === 'dog';
}

const pet: Dog | Cat = { type: 'dog', bark: () => console.log("Bark!") };

if (isDog(pet)) {
  pet.bark(); // ✅ Safe to call
} else {
  pet.meow();
}


//typeof
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}
printId(23)

//instanceeof
class Car {
  drive() {
    console.log("Car is driving...");
  }
}

class Bike {
  ride() {
    console.log("Bike is riding...");
  }
}

function move(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.ride();
  }
}

// ---------- Execution ----------
const car = new Car();
const bike = new Bike();

move(car);   // Output: Car is driving...
move(bike);  // Output: Bike is riding...


//customtype guard
type Admin = { role: string };
type User = { username: string };

function isAdmin(person: Admin | User): person is Admin {
  return "role" in person;
}


// -------- Execution --------
const admin: Admin = { role: "superadmin" };
const user: User = { username: "dilna" };

function printPersonDetails(person: Admin | User) {
  if (isAdmin(person)) {
    console.log("Admin Role:", person.role);
  } else {
    console.log("Username:", person.username);
  }
}

printPersonDetails(admin);  // Output: Admin Role: superadmin
printPersonDetails(user);   // Output: Username: dilna