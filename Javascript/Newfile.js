const fun = () => {
  const arr = [1, 2, { name: "priyanka" }, 4, 5];

  console.log(arr.some((e) => e.name === "priyanka"));
};

fun();
