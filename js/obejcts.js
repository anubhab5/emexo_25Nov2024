// object is a collection of key value pair
// define an object using curly braces

// empty object
let obj = {};

console.log(obj);

// here name is the key
// Tom is the value of the key
// key is not required/ mandatory to keep in double quotes
// object key is also called a property
obj = {
  name: "Tom",
  country: "India",
  marks: [25, 34, 45],
  fullAddress: {
    houseNumber: 101,
    city: "blr",
  },
  isPassed: true,
  sayMyName: function () {
    console.log("my name is Tom");
  },
};
// when a function is defined inside an object => the function is called a METHOD
console.log(obj);
// 2 diff ways you can access a JS object
console.log(obj.country); // dot operator :::
console.log(obj["country"]); // :::

// TO DO ::: print the city present in the above object
