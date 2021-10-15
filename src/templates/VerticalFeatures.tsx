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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
      />
      <Section
        title="Partenaires"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
          <HorizontalFeatureColumn
            title="Eurosports"
            description=""
            image={`${router.basePath}/assets/images/eurosports.svg`}
            imageAlt="Logo Eurosport"
          />
          <HorizontalFeatureColumn
            title="Flinks"
            description=""
            image={`${router.basePath}/assets/images/logo-flinks.svg`}
            imageAlt="Logo Flinks"
          />
          <HorizontalFeatureColumn
            title="Alinéa"
            description=""
            image={`${router.basePath}/assets/images/logo-alinea.svg`}
            imageAlt="Logo Eurosport"
          />
        </div>
      </Section>
    </>
  );
};

export { VerticalFeatures };
