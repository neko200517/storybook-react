import { Button, ButtonProps } from '../button/Button';
import { MaterialIcon } from '../icon/MaterialIcon';
import './IconButton.scss';

interface IconButtonProps extends ButtonProps {
  icon?: string;
  align?: 'left' | 'right';
  iconOnly?: boolean;
}

export const IconButton = ({
  icon,
  align = 'left',
  iconOnly,
  ...props
}: IconButtonProps) => {
  return (
    <>
      {iconOnly ? (
        <Button {...props} className='btn btn--icon btn--icon-only'>
          <MaterialIcon icon={icon} />
        </Button>
      ) : (
        <Button
          {...props}
          className={`btn btn--icon ${align === 'right' && 'btn--icon-right'}`}
        >
          <MaterialIcon icon={icon} />
          <span className='btn__label'>{props.children}</span>
        </Button>
      )}
    </>
  );
};
