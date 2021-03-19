import React, { Fragment } from 'react';
import { PageProps } from 'gatsby';
import SEO from '../components/seo';

const ProjectPage: React.FC<PageProps<void>> = () => (
   <Fragment>
      <SEO title="Project" />
      <h3>Hi from the project page</h3>
      <p>Welcome to Projects</p>
      {/* <Link to="/">Go back to the homepage</Link>
      <Link to="/about">Go  to the About</Link> */}
   </Fragment>
);

export default ProjectPage;
