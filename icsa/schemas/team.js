// {
//     id: 1,
//     imgSrc: Member1,
//     altText: 'Saimon Harmer',
//     title: 'Saimon Harmer',
//     designation: 'CEO and Founder',
//     socialProfile: [
//       {
//         id: 1,
//         name: 'facebook',
//         path: '#',
//         icon: <FaFacebookF />,
//       },
//       {
//         id: 2,
//         name: 'twitter',
//         path: '#',
//         icon: <FaTwitter />,
//       },
//       {
//         id: 3,
//         name: 'instagram',
//         path: '#',
//         icon: <FaInstagram />,
//       },
//     ],
//   },

export default {
    name: "team",
    type: "document",
    title: "Our Team",
    fields: [
      {
        name:'id',
        type:"number",
        title:'ID',
      },
      {
        name:"image",
        type:"image",
        title:"Image",
        options: {
          hotspot: true
        },
      },
      {
        name: "title",
        type: "string",
        title: "Title"
      },
      {
        name: "designation",
        type: "string",
        title: "Designation"
      },
      
        {
            title: 'Social Profile',
            name: 'social',
            type: 'array',
            of: [{type: 'social'}],
        }
    ]
  }


