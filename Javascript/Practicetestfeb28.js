const main = () => {
  const students = [
    { name: "Priyanka", mark: 90 },
    { name: "hari", mark: 15 },
    { name: "raj", mark: 25 },
    { name: "ram", mark: 75 },
    { name: "john", mark: 65 },
  ];

  const a = students.filter((student) => student.mark < 50);

  const b = a.map((student) => student.name);
  console.log(b);
};

main();

// constructor

// mount
// render;
// didupdate
// willUnMount

// hooks - fun
