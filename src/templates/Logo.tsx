import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
  xs?: boolean;
};

const Logo = (props: ILogoProps) => {
  const router = useRouter();
  const size = props.xl ? '150' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <div
      className={`text-gray-900 flex-col items-center justify-center ${fontStyle}`}
    >
      <div className="flex flex-col items-center justify-center">
        <img
          style={{ height: `${size}px` }}
          src={`${router.basePath}/assets/images/badge-apex.svg`}
          alt={AppConfig.site_name}
        />
      </div>
    </div>
  );
};

export { Logo };
