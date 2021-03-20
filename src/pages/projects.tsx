import React, { Fragment } from 'react';
import { PageProps } from 'gatsby';
import SEO from '../components/seo';
import TileProject from '../components/tile-project';

const ProjectPage: React.FC<PageProps<void>> = () => {
   const project = Array.from({ length: 50 });

   return (
      <Fragment>
         <SEO title="Projects" />
         <div>
            {project.map((_, i) => (
               <TileProject key={i} />
            ))}
         </div>
      </Fragment>
   );
};

export default ProjectPage;
