const main = () => {
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
  const states = [
    {
      state: "TamilNadu",
      location: "Chennai",
    },
    {
      state: "Karnataka",
      location: "Bangalore",
    },
    {
      state: "Kerala",
      location: "Kochin",
    },
  ];

  const a = data.map((e) => {
    //   (states) => data.stateName;
    //   const c = states.map((e1) => e1.state === e.stateName);
    if (states.map((e1) => e1.state === e.stateName)) {
      e.location = states.find((e1) => e1.state === e.stateName).location;
    }
  });

  //   const a = () => {
  //     data.map((e) => {
  //       const compare = states.find((e1) => e1.state === e.stateName);
  //       if (compare) {
  //         e.location = compare.location;
  //       }
  //     });
  //   };

  //   a();

  console.log(data);

  //   const a = () => {
  //     if (data.map((state) => state.stateName) === states.map((state) => state))
  //       return states.location;
  //   };
  //   a();
  //   const a = data.map(stateName) === states.map(states);
  //   console.log(a);
};

main();

// expected op

// const data = [
//   {
//     stateName: "TamilNadu",
//     location: "Chennai",
//     university: [
//       {
//         universityName: "Anna University",
//         college: [
//           { collegeName: "ksr college" },
//           { collegeName: "jai college" },
//         ],
//       },
//       {
//         universityName: "Madras University",
//         college: [{ collegeName: "st joseph" }, { collegeName: "sathyabama" }],
//       },
//     ],
//   },
//   {
//     stateName: "Karnataka",
//     location: "Bangalore",
//     university: [
//       {
//         universityName: "aby University",
//         college: [{ collegeName: "psb colllege" }],
//       },
//       {
//         universityName: "jpr University",
//         college: [{ collegeName: "christ university" }],
//       },
//     ],
//   },
//   {
//     stateName: "Kerala",
//     location: "Kochin",
//     university: [
//       {
//         universityName: "k University",
//         college: [{ collegeName: "nift college" }],
//       },
//       {
//         universityName: "mal university",
//         college: [{ collegeName: "nit calicut" }],
//       },
//     ],
//   },
// ];
