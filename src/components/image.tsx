import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

const Image: React.FC<{}> = () => {
   const data = useStaticQuery(graphql`{
  placeholderImage: file(relativePath: {eq: "zandome.png"}) {
    childImageSharp {
      gatsbyImageData(width: 250, placeholder: TRACED_SVG, layout: CONSTRAINED)
    }
  }
}
`);

   if (!data?.placeholderImage?.childImageSharp?.gatsbyImageData) {
      return <div>Picture not found</div>;
   }

   return <GatsbyImage image={data.placeholderImage.childImageSharp.gatsbyImageData} alt="zandome" />;
};

export default Image;
