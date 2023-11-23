import { useState, useEffect, useRef } from 'react';
import './Dropdown.scss';

interface DropdownProps {
  menus: string[];
  onSelect: (value: number) => void;
}

export const Dropdown = ({ menus, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownWidth, setdropdownWidth] = useState(0);
  const [selectedLabel, setSelectedLabel] = useState('選択してください');
  const [currentIndex, setCurrentIndex] = useState<number | undefined>(
    undefined
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    // メニューの幅を決める
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      setdropdownWidth(rect.width);
    }
    setIsOpen((prev) => !prev);
  };

  const selectItem = (label: string, value: number) => {
    setSelectedLabel(label);
    setIsOpen(false);
    setCurrentIndex(value);
    onSelect(value);
  };

  return (
    <div className='dropdown' ref={dropdownRef}>
      <button className='dropdown__btn' onClick={toggleDropdown}>
        {selectedLabel}
      </button>
      {isOpen && (
        <ul className='dropdown__menu' style={{ minWidth: dropdownWidth }}>
          {menus.map((menu, i) => (
            <li
              className={`dropdown__item ${
                currentIndex === i + 1 && 'dropdown__item--active'
              }`}
              data-value={i + 1}
              onClick={() => selectItem(menu, i + 1)}
              key={i}
            >
              {menu}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
