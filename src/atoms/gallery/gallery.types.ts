import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface Edge {
  node: { childImageSharp: { gatsbyImageData: IGatsbyImageData } };
}

export interface Data {
  allFile?: { edges: Edge[] };
}
