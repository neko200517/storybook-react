import './Icon.scss';

type IconType = 'warning' | 'delete';

interface IconProps {
  type: IconType;
}

export const SVGIcon = ({ type }: IconProps) => {
  const DeleteIcon = () => {
    return (
      <span className='icon icon--svg icon--delete'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
          fill='#000000'
        >
          <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' />
        </svg>
      </span>
    );
  };

  const WarningIcon = () => {
    return (
      <span className='icon icon--svg icon--warning'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
          fill='#000000'
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z' />
        </svg>
      </span>
    );
  };

  const getIcon = (type: IconType) => {
    switch (type) {
      case 'warning':
        return <WarningIcon />;
      default:
        return <DeleteIcon />;
    }
  };

  return <>{getIcon(type)}</>;
};
