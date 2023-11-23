import './CheckBox.scss';

interface CheckBoxProps {
  label?: string;
  checked?: boolean;
}

export const CheckBox = ({ label, checked }: CheckBoxProps) => {
  return (
    <div className='checkbox-group'>
      <label className='checkbox'>
        <input type='checkbox' className='checkbox__input' checked={checked} />
        <span className='checkbox__text'>{label}</span>
      </label>
    </div>
  );
};
