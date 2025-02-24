const car = () => {
  const object = [
    {
      stateName: "TamilNadu",
      university: [
        {
          universityName: "Anna University",
          college: [
            { collegeName: "ksr college" },
            { collegeName: "jai college" },
          ],
        },
        {
          universityName: "Madras University",
          college: [
            { collegeName: "st joseph" },
            { collegeName: "sathyabama" },
          ],
        },
      ],
    },
    {
      stateName: "Karnataka",
      university: [
        {
          universityName: "aby University",
          college: [{ collegeName: "psb colllege" }],
        },
        {
          universityName: "jpr University",
          college: [{ collegeName: "christ university" }],
        },
      ],
    },
    {
      stateName: "Kerala",
      university: [
        {
          universityName: "k University",
          college: [{ collegeName: "nift college" }],
        },
        {
          universityName: "mal university",
          college: [{ collegeName: "nit calicut" }],
        },
      ],
    },
  ];
  return object;
};
// //   const result = object.find((e) => e.stateName);
// const result = object.find((e) => {
//   if (e.stateName === "Karnataka") return e;
// });
//   console.log(result);

// const univ = result.university;
//   console.log(univ);

//   const univName = univ.map((e) => {
//     return e.universityName;
//   });
//   // console.log(univName);
// };

car();

const result = car();
console.log(result);

const clg = result
  .map((stateName) => stateName.university)
  .flat()
  .map((univ) => univ.college)
  .flat()
  .map((college) => college.collegeName)
  .flat();
// );
console.log(clg);

// state
// university
// college
// depts - students

//  universities from all the states.
