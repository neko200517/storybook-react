import './Badge.scss';

interface BadgeProps {
  children?: React.ReactNode;
  type?: 'accept' | 'warning' | 'error';
}

export const Badge = ({ children, type }: BadgeProps) => {
  const typeClass = `badge--${type}`;
  return <span className={`badge badge--label ${typeClass}`}>{children}</span>;
};
