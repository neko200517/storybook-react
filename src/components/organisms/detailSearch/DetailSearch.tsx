import { Radio } from '../../atoms/radio/Radio';
import { TextInput } from '../../atoms/textInput/TextInput';
import { IconButton } from '../../atoms/iconButton/IconButton';

import './DetailSearch.scss';

interface DetailSearchProps {
  label?: string;
  content?: React.ReactNode;
}

const radios = [
  { label: '検索条件1', checked: true },
  { label: '検索条件2' },
  { label: '検索条件3' },
];

export const DetailSearch = ({}: DetailSearchProps) => {
  return (
    <div className='detail-search'>
      <div className='detail-search__form'>
        <div className='detail-search__form-row'>
          <TextInput type='date' placeholder='開始日' />
          <span>～</span>
          <TextInput type='date' placeholder='終了日' />
          <TextInput type='text' placeholder='キーワード' />
        </div>
        <div className='detail-search__form-row'>
          <Radio radios={radios} />
        </div>
      </div>

      <div className='detail-search__ctrl'>
        <IconButton icon='search' variant='primary' size='small'>
          検索
        </IconButton>
      </div>
    </div>
  );
};
