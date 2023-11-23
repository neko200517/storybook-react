import './Icon.scss';

interface IconProps {
  icon?: string;
  warning?: boolean;
  className?: string;
}

export const MaterialIcon = ({ icon, warning, className = '' }: IconProps) => {
  return (
    <>
      <span
        className={[
          'icon',
          'icon--material',
          'material-icons',
          warning && 'icon--warning',
          className,
        ].join(' ')}
      >
        {icon}
      </span>
    </>
  );
};
