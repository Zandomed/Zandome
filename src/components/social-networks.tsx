import React from 'react';
import {
   faGithub,
   faInstagram,
   faTwitter,
   faLinkedin,
   IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { config } from '../utils/config';
import { SocialNetworksStyle as S } from '../styles';

interface ISocialNetworkIcon {
   icon: IconDefinition;
   url: string;
}

const listSocialNetworks: ISocialNetworkIcon[] = [
   {
      icon: faGithub,
      url: config.USER_GITHUB,
   },

   {
      icon: faLinkedin,
      url: config.USER_LINKEDIN,
   },
   {
      icon: faInstagram,
      url: config.USER_INSTAGRAM,
   },
   {
      icon: faTwitter,
      url: config.USER_TWITTER,
   },
   {
      icon: faEnvelope,
      url: `mailto:${config.EMAIL}`,
   },
];

const SocialNetworks: React.FC<any> = () => {
   return (
      <S.WrapperRRSS>
         {listSocialNetworks.map((RRSS, i: number) => (
            <S.LinkRefRRSS key={i} href={RRSS.url} target="_blank">
               <S.IconRRSS icon={RRSS.icon} />
            </S.LinkRefRRSS>
         ))}
      </S.WrapperRRSS>
   );
};
SocialNetworks.defaultProps = {};

export default SocialNetworks;
