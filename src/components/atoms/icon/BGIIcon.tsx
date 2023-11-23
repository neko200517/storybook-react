import './Icon.scss';

interface IconProps {
  colorTheme?: 'black' | 'white';
}

export const BGIIcon = ({ colorTheme = 'black' }: IconProps) => {
  return (
    <>
      <span
        className={['icon', 'icon--bgi', `icon--info-${colorTheme}`].join(' ')}
        area-label='info'
      ></span>
    </>
  );
};
