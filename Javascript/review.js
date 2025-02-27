const data = [
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
        college: [{ collegeName: "st joseph" }, { collegeName: "sathyabama" }],
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
const newLocation = { location: "chennai" };
const state = data.map((state) => state.stateName);
const university = state.map((university) => university.college);

//   const college = university.map((college)=>college.collegeName);
const college = university.college.push({ location: "chennai" });
//   console.log(data);
console.log(JSON.stringify(data));

data();
