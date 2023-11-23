import './Select.scss';

interface SelectProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

export const Select = ({ children, disabled }: SelectProps) => {
  const disabledClass = disabled ? 'select-wrapper--disabled' : '';
  return (
    <div className={`select-wrapper ${disabledClass}`}>
      <select className='select' disabled={disabled}>
        {children}
      </select>
    </div>
  );
};
