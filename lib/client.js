import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "npl45bdy",
  dataset: "production",
  apiVersion: "2023-03-25",
  useCdn: true,
  token:
    "ski8Nsm7a3CtPU0Zl4WVMbxW8mlPCArohdJmDYkKXPwrDU6phW7wBvAj95z4FnrXEbneJkmVbjzsfslsYfTIIWuIJgyJjwAETon9pIoh0BMYXoFk331uO5dixmpekcLoziRlD1xvgkBeB8aQtAHEhMKZnaeG4Ug0TexxLsXZ78CS3lmQ2qsx",
  // token:
  //   "skO592UHx3r8YvcQPTVyFT98YTZw0WUiQ5cgirp1AUsik2rsoOpxbi3MMRzzCc6hXO2SVZ99uXLfBZ9LKkSl0GW2GcEGfZlDwiHKlSyL9bbTr2dvdlIrvxt8FFddmlFfVbyXNuCzRrn01kHnpdvcZDVII6rkMB62rPANWl4lQ4NEpBlhV9uc",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
