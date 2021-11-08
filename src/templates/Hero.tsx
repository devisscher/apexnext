import Link from 'next/link';
import { useRouter } from 'next/router';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

type Props = {
  Home: boolean;
};

const Hero = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <Background color="bg-gray-300">
        <Section yPadding="py-6">
          <NavbarTwoColumns logo={<Logo xs />}>
            <li>
              <Link href="/team">
                <a>Équipe</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Calendrier</a>
              </Link>
            </li>
          </NavbarTwoColumns>
        </Section>
        {props.Home && (
          <Section yPadding="pt-20 pb-32">
            <HeroOneButton
              title={
                <>
                  <img
                    className="primary"
                    src={`${router.basePath}/assets/images/logo-apex.svg`}
                    alt="Eurosports"
                  />
                  <h6 className="text-gray-1000">présenté par</h6>
                </>
              }
              button={
                <img
                  className="secondary"
                  src={`${router.basePath}/assets/images/eurosports.svg`}
                  alt="Eurosports"
                />
              }
            />
          </Section>
        )}
      </Background>
      <style jsx>
        {`
          img.primary {
            height: 90px;
            margin: auto;
          }
          @media screen and (max-width: 600px) {
            img.primary {
              height: 60px;
              margin: 2rem auto;
            }
          }

          @media screen and (max-width: 600px) {
            .secondary {
              height: 50px;
            }
          }
          .secondary {
            height: 90px;
          }
        `}
      </style>
    </>
  );
};

export { Hero };
