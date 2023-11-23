import './Radio.scss';

interface RadioProps {
  radios: {
    label?: string;
    checked?: boolean;
  }[];
}

export const Radio = ({ radios }: RadioProps) => {
  return (
    <div className='radio-group'>
      {radios.map(({ checked, label }, i) => (
        <label className='radio' key={i}>
          <input type='radio' className='radio__input' checked={checked} />
          <span className='radio__text'>{label}</span>
        </label>
      ))}
    </div>
  );
};
