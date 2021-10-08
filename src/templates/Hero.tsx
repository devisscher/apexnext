import Link from 'next/link';
import { useRouter } from 'next/router';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const router = useRouter();

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xs />}>
          <li>
            <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
              <a>À propos</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Calendrier</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              <img
                src={`${router.basePath}/assets/images/logo-apex.svg`}
                alt="Eurosports"
              />
              <span className="text-primary-100">présenté par</span>
            </>
          }
          button={
            <Link href="https://creativedesignsguru.com/category/nextjs/">
              <a>
                <img
                  src={`${router.basePath}/assets/images/eurosports.svg`}
                  alt="Eurosports"
                />
              </a>
            </Link>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
