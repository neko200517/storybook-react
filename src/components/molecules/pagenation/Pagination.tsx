import { MaterialIcon } from '../../atoms/icon/MaterialIcon';
import './Pagination.scss';

interface PaginationProps {
  maxPage: number;
  activeIndex: number;
}

const VIEW_MAX_PAGE = 5;
const VIEW_OFFSET = 1;

export const Pagination = ({ maxPage, activeIndex }: PaginationProps) => {
  let viewPages = [];
  if (maxPage > VIEW_MAX_PAGE) {
    const startPage =
      activeIndex - VIEW_OFFSET > 0 ? activeIndex - VIEW_OFFSET : 1;
    const endPage =
      activeIndex + VIEW_OFFSET <= maxPage
        ? activeIndex + VIEW_OFFSET
        : maxPage;

    // Start pages
    // 常に1を表示
    if (startPage > 1) {
      viewPages.push({ index: 1, active: activeIndex === 1 });
    }
    if (startPage > 2) {
      viewPages.push({ more: true });
    }

    // Middle pages
    // activeIndex - 1, activeIndex, activeIndex + 1を表示
    for (let i = startPage; i <= endPage; i++) {
      viewPages.push({ index: i, active: activeIndex === i });
    }

    // End pages
    // 常にmaxPageを表示
    if (endPage < maxPage - 1) {
      viewPages.push({ more: true });
    }
    if (endPage < maxPage) {
      viewPages.push({ index: maxPage, active: activeIndex === maxPage });
    }
  } else {
    viewPages = Array.from({ length: maxPage }, (_, index) => {
      return { index: index + 1, active: activeIndex === index + 1 };
    });
  }

  return (
    <ul className='pagination'>
      <li
        className={`pagination__item ${
          activeIndex <= 1 && 'pagination__item--disabled'
        }`}
      >
        <a href={`?page=${1}`} className='pagination__link'>
          <MaterialIcon icon='first_page' />
        </a>
      </li>
      <li
        className={`pagination__item ${
          activeIndex <= 1 && 'pagination__item--disabled'
        }`}
      >
        <a href={`?page=${activeIndex - 1}`} className='pagination__link'>
          <MaterialIcon icon='chevron_left' />
        </a>
      </li>

      {viewPages.map((page) =>
        page.more ? (
          <li className='pagination__item pagination__item--more'>
            <MaterialIcon icon='more_horiz' />
          </li>
        ) : (
          <li
            className={`pagination__item ${
              page.active && 'pagination__item--active'
            }`}
          >
            <a href={`?page=${page.index}`} className='pagination__link'>
              {page.index}
            </a>
          </li>
        )
      )}

      <li
        className={`pagination__item ${
          activeIndex >= maxPage && 'pagination__item--disabled'
        }`}
      >
        <a href={`?page=${activeIndex + 1}`} className='pagination__link'>
          <MaterialIcon icon='chevron_right' />
        </a>
      </li>
      <li
        className={`pagination__item ${
          activeIndex >= maxPage && 'pagination__item--disabled'
        }`}
      >
        <a href={`?page=${maxPage}`} className='pagination__link'>
          <MaterialIcon icon='last_page' />
        </a>
      </li>
    </ul>
  );
};
