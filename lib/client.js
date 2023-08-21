import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "npl45bdy",
  dataset: "production",
  apiVersion: "2022-08-25",
  useCdn: true,
  token:
    "skXZ2LQ19zDEq2RdWhq9W0PK9F43NQSeisROWJuGdLq8OY6RRTm3lHsMwuuxdJdOMrJCS3H6s6PAF3Eoe4lBs9VzNAm78SgotSkuj6t1rrtFrmxe9MDdPwgbEKKGr8B11bEaj1yjtODoTrIAmqtwIglhR5OdvnKuWsEghPziSKCmNE7Lh1ZL",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
