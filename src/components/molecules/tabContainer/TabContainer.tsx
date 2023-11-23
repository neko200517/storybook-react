import { useState } from 'react';
import './TabContainer.scss';

interface TabContainerProps {
  tabs: {
    value?: string;
    checked?: boolean;
    label?: string;
    disabled?: boolean;
    content?: React.ReactNode;
  }[];
}

export const TabContainer = ({ tabs }: TabContainerProps) => {
  const [_tabs, setTabs] = useState(tabs);

  const selectTab = (index: number) => {
    const newTabs = _tabs.map((tab, i) => ({
      ...tab,
      checked: i === index,
    }));
    setTabs(newTabs);
  };

  return (
    <>
      <div className='tab-container'>
        {_tabs.map((tab, i) => (
          <input
            id={`tab${i}`}
            className='tab-container__radio'
            type='radio'
            name='tabs'
            value={tab.value}
            checked={tab.checked}
            key={i}
            onChange={() => !tab.disabled && selectTab(i)}
          />
        ))}
        <ul className='tab-container__tabs'>
          {_tabs.map((tab, i) => (
            <li
              className={`tab-container__tab-item ${
                tab.disabled && 'tab-container__tab-item--disabled'
              }`}
              key={i}
            >
              <label htmlFor={`tab${i}`} className='tab-container__tab-label'>
                {tab.label}
              </label>
            </li>
          ))}
        </ul>

        {_tabs.map((tab, i) => (
          <div id={`content${i}`} className='tab-container__content' key={i}>
            {tab.content}
          </div>
        ))}
      </div>
    </>
  );
};
