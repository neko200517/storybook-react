import './Dropdown.scss';

interface DropdownProps {
  menus: string[];
}

export const Dropdown_Dom = ({ menus }: DropdownProps) => {
  const resetMenu = () => {
    const dropdownMenus = document.getElementsByClassName('dropdown__menu');
    for (let i = 0; i < dropdownMenus.length; i++) {
      const dropdownMenu = dropdownMenus[i];
      dropdownMenu.classList.remove('dropdown__menu--show');
    }
  };

  // ドロップボタン以外をクリックした場合、メニューを閉じる
  window.addEventListener('click', (e) => {
    const dropdown = (e.target as HTMLButtonElement).closest('.dropdown');
    if (dropdown) return;

    resetMenu();
  });

  // ドロップダウンボタン押下
  const onclickDropDownHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    resetMenu();

    const dropdown = e.currentTarget.closest('.dropdown') as HTMLButtonElement;
    if (dropdown === null) return;

    const rect = dropdown.getBoundingClientRect();
    if (rect === undefined) return;

    const dropdownMenu = dropdown.querySelector(
      '.dropdown__menu'
    ) as HTMLUListElement;
    if (dropdownMenu === null) return;

    dropdownMenu.style.minWidth = `${rect.width}px`;
    dropdownMenu.classList.add('dropdown__menu--show');

    const menuRect = dropdownMenu.getBoundingClientRect();
    if (menuRect === undefined) return;

    if (
      window.innerHeight < rect.top + rect.height + menuRect.height &&
      rect.top > menuRect.height
    ) {
      dropdownMenu.style.top = `-${menuRect.height}px`;
    } else {
      dropdown.style.top = '';
    }
  };

  // メニューアイテム押下
  const onClickDropdownMenuItemHandle = (
    e: React.MouseEvent<HTMLLIElement>
  ) => {
    const value = e.currentTarget.dataset.value;
    const label = e.currentTarget.innerText;

    const dropdown = e.currentTarget.parentElement!.parentElement;
    if (dropdown === null) return;

    const button = dropdown.querySelector(
      '.dropdown__btn'
    ) as HTMLButtonElement;
    if (button === null) return;
    button.innerText = label;

    const items = dropdown.getElementsByClassName(
      'dropdown__item'
    ) as HTMLCollectionOf<HTMLLIElement>;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.classList.remove('dropdown__item--active');
    }

    e.currentTarget.classList.add('dropdown__item--active');
    const dropdownMenu = dropdown.querySelector(
      '.dropdown__menu'
    ) as HTMLUListElement;
    if (dropdownMenu === null) return;
    dropdownMenu.classList.remove('dropdown__menu--show');
  };

  return (
    <div className='dropdown'>
      <button className='dropdown__btn' onClick={onclickDropDownHandle}>
        選択してください
      </button>
      <ul className='dropdown__menu'>
        {menus.map((menu, i) => (
          <li
            className='dropdown__item'
            data-value={i + 1}
            onClick={onClickDropdownMenuItemHandle}
            key={i}
          >
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
};
