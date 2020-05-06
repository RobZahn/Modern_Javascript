// Spread with Object Literals

// Copy key-value pairs from one object to another.

const feline = {
  legs: 4,
  family: 'Felidae'
};

const canine = {
  family: 'Caninae',
  furry: true
};

const dog = { ...canine, isPet: true };
// { family: 'Caninae', furry: true, isPet: true }

const lion = { ...feline, genus: 'Panthera' };
// { legs: 4, family: 'Felidae', genus: 'Panthera' }

const catDog = { ...feline, ...canine };
// { legs: 4, family: 'Caninae', furry: true }

// NOTE: Duplicate conflicting key-value pairs will be overwritten. Order matters. In the catDog example, family: Caninae was the last family value and so it overwrote the feline family value.

//______________________________________________________________________________

// We can make copies of object literals just like with strings:

const catDogClone = { ...catDog };
// { legs: 4, family: 'Caninae', furry: true }

// NOTE: It is only possible to spread an object to another object. We can however spread an array into an object:

{...[4,5,6]}
// {0: 4, 1: 5, 2: 6}

// The keys will automatically populate themselves based on the indices of the elements of the array.
