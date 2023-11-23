import './_layout.scss';

interface BasicLaytouProps {
  header?: React.ReactNode;
  side?: React.ReactNode;
  main?: React.ReactNode;
}

export const BasicLayout = ({ header, side, main }: BasicLaytouProps) => {
  return (
    <div className='wrap'>
      {header && <header className='header-area'>{header}</header>}
      {side && <aside className='side-area'>{side}</aside>}
      {main && (
        <main className='main-area'>
          <div className='content-area'>{main}</div>
        </main>
      )}
    </div>
  );
};
