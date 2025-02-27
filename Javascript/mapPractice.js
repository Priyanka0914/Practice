// feb 27
const fun = () => {
  const array = [
    { name: "priyanka", age: 15 },
    { name: "john", age: 16 },
    { name: "joel", age: 17 },
    { name: "raj", age: 18 },
    { age: 20 },
  ];
  // a.push()

  const output = array.map((e) => {
    const { name = "hari" } = e;
    return name;
  });
  console.log(output);
  // ["priyanka", "john", "joel", "raj", "hari"];

  // const fun = (a, b = 0) => {};
  // fun(5);
};

fun();
