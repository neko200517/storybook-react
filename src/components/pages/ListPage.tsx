import { BasicLayout } from '../templates/BasicLayout';
import { Header } from '../organisms/header/Header';
import { SideMenu } from '../organisms/sidemenu/SideMenu';
import { Heading } from '../atoms/heading/Heading';
import { Card } from '../atoms/card/Card';
import { Discrousure } from '../molecules/discrousure/Discrousure';
import { DetailSearch } from '../organisms/detailSearch/DetailSearch';
import { Table } from '../atoms/table/Table';
import { ListData } from '../../data/ListData';
import { Pagination } from '../molecules/pagenation/Pagination';
import './ListPage.scss';

const MainArea = () => {
  return (
    <div className='list-page'>
      <Heading level={2}>ユーザー一覧</Heading>
      <div className='flex flex--column flex--gap24'>
        <Card>
          <Discrousure label='検索' content={<DetailSearch />} />
        </Card>
        <div className='flex flex--right'>
          <Pagination maxPage={10} activeIndex={1} />
        </div>
        <Table headers={ListData.headers} rows={ListData.rows} />
        <div className='flex flex--right'>
          <Pagination maxPage={10} activeIndex={1} />
        </div>
      </div>
    </div>
  );
};

interface ListPageProps {}

export const ListPage = ({}: ListPageProps) => {
  return (
    <BasicLayout header={<Header />} side={<SideMenu />} main={<MainArea />} />
  );
};
