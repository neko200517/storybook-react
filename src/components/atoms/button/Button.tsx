import './Button.scss';

export interface ButtonProps {
  variant?: 'basic' | 'primary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  width?: string;
  children: React.ReactNode;
  onClick?: (e?: any) => void;
  className?: string;
}

export const Button = ({
  variant = 'basic',
  size = 'medium',
  disabled,
  width,
  children,
  onClick,
  className = undefined,
}: ButtonProps) => {
  return (
    <button
      className={['btn', `btn--${variant}`, `btn--${size}`, className].join(
        ' '
      )}
      style={width ? { width } : undefined}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
