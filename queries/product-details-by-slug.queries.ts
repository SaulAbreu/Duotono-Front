import { gql } from "@apollo/client";

export const getProductBySlug = gql`
query($slug: String!) {
  product(slug: $slug) {
    id
    name
    slug
    description
    featuredAsset{
      preview
    }
    optionGroups {
      name
      customFields
      options {
        name
        customFields {
          Price
        }
      }
    }
    variants{
      customFields
      name
      price
    }
		collections {
      name
      parent {
        slug
      }
    }
  }
}
`;