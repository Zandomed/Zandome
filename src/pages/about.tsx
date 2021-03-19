import React, { Fragment } from 'react';
import { PageProps, graphql } from 'gatsby';
import SEO from '../components/seo';

type DataProps = {
   site: {
      buildTime: string;
   };
};

const AboutPage: React.FC<PageProps<DataProps>> = ({ data, path }) => (
   <Fragment>
      <SEO title="About" />
      <h3>Hi from the About page</h3>
      <p>Welcome to About</p>
   </Fragment>
);

export default AboutPage;

export const query = graphql`
   {
      site {
         buildTime(formatString: "YYYY-MM-DD hh:mm a z")
      }
   }
`;
