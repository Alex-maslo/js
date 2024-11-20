let obj1 = {
  id: 1,
  name: "vasya",
  age: 33,
  foo() {},
  greeting() {},
};

for (const key in obj1) {
  console.log(typeof obj1[key]);
}
