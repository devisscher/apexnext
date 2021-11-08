import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  link: string;
};

const HorizontalFeatureColumn = (props: IVerticalFeatureRowProps) => {
  const horizontalFeatureClass = className(
    'mt-20',
    'flex',
    'row',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={horizontalFeatureClass}>
      <div className="w-full p-6">
        <a href={props.link}>
          <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
        </a>
      </div>
      <div className="">{props.description}</div>
    </div>
  );
};

export { HorizontalFeatureColumn };
