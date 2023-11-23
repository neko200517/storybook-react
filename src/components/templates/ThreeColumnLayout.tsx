import './_layout.scss';

interface ThreeColumnLayoutProps {
  header?: React.ReactNode;
  left?: React.ReactNode;
  main?: React.ReactNode;
  right?: React.ReactNode;
  footer?: React.ReactNode;
}

export const ThreeColumnLayout = ({
  header,
  left,
  main,
  right,
  footer,
}: ThreeColumnLayoutProps) => {
  return (
    <div className='wrap wrap--three-column'>
      {header && <header className='header-area'>{header}</header>}
      {left && <aside className='left-area'>{left}</aside>}
      {main && (
        <main className='main-area'>
          <div className='content-area'>{main}</div>
        </main>
      )}
      {right && <aside className='right-area'>{right}</aside>}
      {footer && <footer className='footer-area'>{footer}</footer>}
    </div>
  );
};
