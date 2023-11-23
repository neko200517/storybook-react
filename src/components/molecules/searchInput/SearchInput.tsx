import { useState } from 'react';
import { TextInput } from '../../atoms/textInput/TextInput';
import { Button } from '../../atoms/button/Button';
import { MaterialIcon } from '../../atoms/icon/MaterialIcon';
import './SearchInput.scss';

interface SearchInputProps {
  onSearch: (keyword: string) => void;
}

export const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [keyword, setKeyword] = useState('');

  const onChangeInput = (value: string) => {
    setKeyword(value);
  };

  const onClickSearch = () => {
    onSearch(keyword);
  };

  return (
    <div className='search-input'>
      <MaterialIcon className='search-input__icon' icon='search' />
      <TextInput
        className='search-input__text-input'
        placeholder='キーワード'
        onChangeInput={onChangeInput}
      />
      <Button
        className='search-input__btn'
        variant='primary'
        onClick={onClickSearch}
      >
        検索
      </Button>
    </div>
  );
};
