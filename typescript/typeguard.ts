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
