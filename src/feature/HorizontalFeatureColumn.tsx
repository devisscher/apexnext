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
    'row',
    'flex-wrap',
    'items-start',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={horizontalFeatureClass}>
      <div className="w-full p-6">
        <a href={props.link}>
          <div
            style={{
              backgroundImage: `url(${router.basePath}${props.image})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '200px',
            }}
          />

          {/* <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} /> */}
        </a>
      </div>
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        {props.description}
      </div>
    </div>
  );
};

export { HorizontalFeatureColumn };
