import './Toggle.scss';

interface ToggleProps {
  checked?: boolean;
}

export const Toggle = ({ checked }: ToggleProps) => {
  return <input type='checkbox' className='toggle' checked={checked} />;
};
