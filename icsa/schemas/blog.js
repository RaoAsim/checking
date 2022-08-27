export default {
    name: "blog",
    type: "document",
    title: "Blog",
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
        name:'slug',
        title:'Slug',
        type:'slug',
        options:{
            source:'title',
            maxLength:90,
        }
    },
      {
        name: "date",
        type: "string",
        title: "Date"
      },
      {
        name: "author",
        type: "string",
        title: "Author"
      },
      {
        name:"blogimage",
        type:"image",
        title:"BlogImage",
        options: {
          hotspot: true
        },
      },
      {
        name:"content",
        type:"string",
        title:"Blog Content"
      }
    ]
  }

  
