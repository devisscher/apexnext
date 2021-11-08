import React from 'react';

import { useRouter } from 'next/router';

import { HorizontalFeatureColumn } from '../feature/HorizontalFeatureColumn';
import { Section } from '../layout/Section';

const VerticalFeatures = () => {
  const router = useRouter();
  return (
    <>
      <Section
        title="À propos"
        description="Apex Outaouais est une équipe cycliste compétitive, basée dans la région de Gatineau-Ottawa. Notre mission est de promouvoir le développement et l’excellence sportive dans la région de l'Outaouais."
      />
      <Section
        title="Partenaires"
        description="Nous tenons à souligner l'importante contribution des nos partenaires, qui nous soutiennent dans les diverses compétitions."
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
          <HorizontalFeatureColumn
            title="Eurosports"
            description="Boutique haut de gamme de vélo et ski de fond"
            image={`${router.basePath}/assets/images/eurosports.svg`}
            imageAlt="Logo Eurosport"
            link="https://euro-sports.ca/"
          />
          <HorizontalFeatureColumn
            title="Flinks"
            description="Leaders de l'accès aux données financières au Canada"
            image={`${router.basePath}/assets/images/logo-flinks.svg`}
            imageAlt="Logo Flinks"
            link="https://flinks.com/"
          />
          <HorizontalFeatureColumn
            title="Alinéa"
            description="Clinique de chiropratique et massothéraphie"
            image={`${router.basePath}/assets/images/logo-alinea.svg`}
            imageAlt="Logo Alinéa"
            link="https://chiroalinea.ca/"
          />
        </div>
      </Section>
    </>
  );
};

export { VerticalFeatures };
