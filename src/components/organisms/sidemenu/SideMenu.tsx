import { MaterialIcon } from '../../atoms/icon/MaterialIcon';
import LogoImage from '../../../assets/logoipsum-logo-8.svg';
import { Button } from '../../atoms/button/Button';
import { IconButton } from '../../atoms/iconButton/IconButton';
import './SideMenu.scss';

interface SideMenuProps {
  label?: string;
  content?: React.ReactNode;
}

export const SideMenu = ({}: SideMenuProps) => {
  return (
    <div className='sidemenu'>
      <div className='global-navi'>
        <a href='#' className='global-navi__item'>
          <MaterialIcon icon='person' />
          Menu1
        </a>
        <a href='#' className='global-navi__item'>
          <MaterialIcon icon='shopping_cart' />
          Menu2
        </a>
        <a href='#' className='global-navi__item'>
          <MaterialIcon icon='local_shipping' />
          Menu3
        </a>
      </div>
    </div>
  );
};
