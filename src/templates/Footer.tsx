import React from 'react';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Strava, Instagram, Facebook } from '../footer/Social';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={<Logo xl />}
        iconList={
          <>
            <Strava />
            <Instagram />
            <Facebook />
          </>
        }
      ></CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
