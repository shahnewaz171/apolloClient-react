import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

export const Get_Foods = gql`
  query GetFoods {
    foods {
        id
        category
        description
        thumb
    }
  }
`;

export const Update_Food = gql`
  mutation UpdateFood($input: UpdateFoodInput!) {
    updateFood(input: $input) {
      id
      category
      description
      thumb
    }
  }
`;