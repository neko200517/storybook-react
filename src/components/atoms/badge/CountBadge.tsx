import { useState } from 'react';
import './Badge.scss';

interface CountBadgeProps {
  value?: number;
}

export const CountBadge = ({ value = 0 }: CountBadgeProps) => {
  const [count, setCount] = useState(value);

  const onClickHandle = () => {
    setCount((x) => x + 1);
  };

  return (
    <span className={`badge badge--label badge--count`} onClick={onClickHandle}>
      {count}
    </span>
  );
};
