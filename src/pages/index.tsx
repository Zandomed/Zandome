import React, { Fragment } from 'react';
import { Link, PageProps } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { HomeStyle } from '../styles/home-style';
import ItemNavbar from '../components/item-navbar';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage: React.FC<PageProps<void>> = () => (
   <Fragment>
      <SEO title="Home" />
      <HomeStyle>
         <div
            style={{
               maxWidth: `250px`,
               marginBottom: `1.45rem`,
               width: '250px',
            }}>
            <StaticImage
               src="../images/zandome.png"
               alt="Zandome Logo"
               placeholder="tracedSVG"
               width={250}
            />
         </div>
         <div style={{ marginTop: '2rem' }}>
            <span style={{ fontSize: '25px', fontWeight: 'bold' }}>
               Comming Soon . . .
            </span>
         </div>
      </HomeStyle>
   </Fragment>
);

export default IndexPage;
