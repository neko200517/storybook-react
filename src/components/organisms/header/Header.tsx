import { MaterialIcon } from '../../atoms/icon/MaterialIcon';
import LogoImage from '../../../assets/logoipsum-logo-8.svg';
import { Button } from '../../atoms/button/Button';
import { IconButton } from '../../atoms/iconButton/IconButton';
import './Header.scss';
import './GlobalNavi.scss';

interface HeaderProps {
  globalNavi?: boolean;
}

export const Header = ({ globalNavi }: HeaderProps) => {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src={LogoImage} />
      </div>
      <div className='header__content'>
        {globalNavi && (
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
        )}
      </div>
      <div className='header__right'>
        <IconButton icon='help' iconOnly>
          help
        </IconButton>
        <Button variant='primary'>ログイン</Button>
      </div>
    </div>
  );
};
