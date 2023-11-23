import './Heading.scss';

interface HeadingProps {
  children?: React.ReactNode;
  level?: number;
}

export const Heading = ({ children, level = 1 }: HeadingProps) => {
  const levelClass = `heading--h${level}`;
  return <h1 className={`heading ${levelClass}`}>{children}</h1>;
};
