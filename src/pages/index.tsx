import React, { Fragment, useEffect, useRef, useState } from 'react';
import { PageProps } from 'gatsby';
import SEO from '../components/seo';
import { IndexStyle as S } from '../styles';
import { StaticImage } from 'gatsby-plugin-image';
import { gsap } from 'gsap';
import Particles from 'react-tsparticles';
const IndexPage: React.FC<PageProps<void>> = () => {
   const logoRef = useRef(null);
   const [optionsParticles, setOptionsParticles] = useState({
      background: {
         color: {
            value: 'transparent',
         },
         position: '50% 50%',
         repeat: 'no-repeat',
         size: 'cover',
      },
      fullScreen: {
         enable: true,
         zIndex: 1,
      },
      interactivity: {
         events: {
            // onClick: {
            //    enable: false,
            //    mode: 'push',
            // },
            onDiv: {
               enable: true,
               selectors: '.container-logo-example',
               mode: 'repulse',
               type: 'rectangle',
            },
            onHover: {
               enable: true,
               mode: 'connect',
               parallax: {
                  force: 60,
               },
            },
         },
         modes: {
            attract: {
               speed: 0.2,
            },
            bubble: {
               distance: 400,
               duration: 2,
               opacity: 0.8,
               size: 40,
            },
            connect: {
               distance: 100,
               links: {
                  opacity: 0.2,
               },
               radius: 300,
            },
            grab: {
               distance: 400,
            },
         },
      },
      particles: {
         color: {
            value: '#cbcbcb',
         },
         links: {
            color: {
               value: '#ffffff',
            },
            distance: 150,
            opacity: 0.4,
         },
         move: {
            angle: {
               value: 20,
            },
            attract: {
               rotate: {
                  x: 600,
                  y: 1200,
               },
            },
            enable: true,
            path: {},
            outModes: {
               bottom: 'out',
               left: 'out',
               right: 'out',
               top: 'out',
            },
            speed: 1,
         },
         number: {
            density: {
               enable: true,
            },
            limit: 200,
            value: 150,
         },
         opacity: {
            value: 0.0,
            animation: {
               speed: 1,
               minimumValue: 0.1,
            },
         },
         size: {
            value: 2,
            animation: {
               speed: 40,
               minimumValue: 0.1,
            },
         },
      },
   });

   useEffect(() => {
      gsap.to('.container-logo-example', {
         delay: 1.5,
         duration: 5,
         scale: 1,
         opacity: 1,
         ease: 'back.out(1.7)',
      });
   }, [logoRef]);

   return (
      <Fragment>
         <SEO title="Home" />
         <Particles options={optionsParticles} />
         <S.Container>
            <S.ContainerLogo className="container-logo-example">
               <StaticImage
                  src="../images/zandome.png"
                  alt="Zandome"
                  placeholder="tracedSVG"
                  width={200}
               />
            </S.ContainerLogo>
            <S.ContainerText>
               <span>
                  Comming Soon
                  <S.Dot>.</S.Dot>
                  <S.Dot>.</S.Dot>
                  <S.Dot>.</S.Dot>
               </span>
            </S.ContainerText>
         </S.Container>
      </Fragment>
   );
};

export default IndexPage;
