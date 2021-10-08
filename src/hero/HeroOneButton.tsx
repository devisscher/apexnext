import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center flex-col flex items-center">
    <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero mb-20">
      {props.title}
    </h1>

    {props.button}
  </header>
);

export { HeroOneButton };
