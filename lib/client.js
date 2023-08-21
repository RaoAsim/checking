import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "npl45bdy",
  dataset: "production",
  apiVersion: "2022-08-25",
  useCdn: true,
  token:
    "ske4SCstHSVBJO74IOmx6VDM0eZs4UOJGT30CKn4E5qo4cQzGVuS9u7oueikxJ9ZWJ5a04X46m187J81knWqi6CUuAAIfEEbp5F2p6sFLob85iFFtnH8gyMIUpCivePFv1ngHWupAwrD2fwq4ryd9FUX5ClqwueB5gfFZA3uxJmFUJGQROIs",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
