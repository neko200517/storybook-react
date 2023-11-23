import './Discrousure.scss';

interface DiscrousureProps {
  label?: string;
  content?: React.ReactNode;
}

export const Discrousure = ({ label, content }: DiscrousureProps) => {
  return (
    <div className='discrousure'>
      <input
        type='checkbox'
        id='discrosureCheckbox'
        className='discrousure__checkbox'
      />
      <div className='discrousure__title'>
        {label}
        <label className='discrousure__toggle' htmlFor='discrosureCheckbox' />
      </div>
      <div className='discrousure__content'>{content}</div>
    </div>
  );
};
