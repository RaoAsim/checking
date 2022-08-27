export default {
    name: "testimonials",
    type: "document",
    title: "Reviews",
    fields: [
      {
        name:'id',
        type:"number",
        title:'ID',
      },
      {
        name: "title",
        type: "string",
        title: "Title"
      },
      {
        name: "description",
        type: "string",
        title: "Description"
      },
      {
        name:"avatar",
        type:"image",
        title:"Image",
        options: {
          hotspot: true
        },
      },
      {
        name: "name",
        type: "string",
        title: "Name"
      },
      {
        name: "designation",
        type: "string",
        title: "Designation"
      },
      {
        name:'review',
        type:"number",
        title:'Review',
      },
    ]
  }

  
