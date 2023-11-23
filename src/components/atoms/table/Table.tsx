import './Table.scss';

type BodyType = {
  data?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
};

export interface TableProps {
  headers?: string[];
  rows?: BodyType[][];
}

export const Table = ({ headers, rows }: TableProps) => {
  return (
    <div className='table-container'>
      <table className='table'>
        <thead>
          <tr className='table__row'>
            <th className='table__header table__header--corner-sticky'></th>
            {headers?.map((head, i) => (
              <th className='table__header table__header--top-sticky' key={i}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((bodies, i) => {
            return (
              <tr className='table__row' key={`tbody__tr-${i}`}>
                <th
                  className='table__header table__header--left-sticky table__header--center'
                  key={`tbody__th-${i}`}
                >
                  {i + 1}
                </th>
                {bodies?.map((body, j) => {
                  const align = body.align ? `table__text--${body.align}` : '';
                  return (
                    <th
                      className={`table__text ${align}`}
                      key={`tbody__th-${i + j}`}
                    >
                      {body.data}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
