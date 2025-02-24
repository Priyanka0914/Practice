
// merging using spread operator
const cars = { color : "red", model : 5, Name : "volvo" , year : 2014 };
  console.log(cars.keys)
  const stock = { count : 15 };
  const total = {...cars,stock}
  console.log(total);

  // curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash