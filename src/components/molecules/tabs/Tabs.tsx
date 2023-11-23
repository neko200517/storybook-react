import { useState } from 'react';
import './Tabs.scss';

interface TabsProps {
  tabs: {
    label?: string;
    active?: boolean;
    disabled?: boolean;
    content?: React.ReactNode;
  }[];
}

export const Tabs = ({ tabs }: TabsProps) => {
  const [_tabs, setTabs] = useState(tabs);

  const selectTab = (index: number) => {
    const newTabs = _tabs.map((tab, i) => ({
      ...tab,
      active: i === index,
    }));
    setTabs(newTabs);
  };

  return (
    <>
      <ul className='tabs'>
        <>
          {_tabs.map((tab, i) => (
            <li
              className={[
                'tabs__item',
                tab.active && 'tabs__item--active',
                tab.disabled && 'tabs__item--disabled',
              ].join(' ')}
              onClick={() => !tab.disabled && selectTab(i)}
              key={i}
            >
              {tab.label}
            </li>
          ))}
        </>
      </ul>
      <div className='tab-container'>
        {_tabs.map(
          (tab, i) =>
            tab.active && (
              <div className='tab-container__content' key={i}>
                {tab.content}
              </div>
            )
        )}
      </div>
    </>
  );
};
