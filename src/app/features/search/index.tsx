import { SearchOutlined } from '@ant-design/icons';
import { Input, Layout } from 'antd';
import { useGetAnimeByIdQuery, useSearchAnimeQuery } from '../../api/animeApi';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../../hooks/useDebounce';
import AnimeList from '../../../components/AnimeList';

const SearchPage = () => {
  const [URLSearchParams, SetURLSearchParams] = useSearchParams();
  const q = URLSearchParams.get('q') || '';
  const page = Number(URLSearchParams.get('page') || '1');
  const debouncedQ = useDebounce(q, 250);
  const { data, isLoading, isFetching } = useSearchAnimeQuery(
    { q: debouncedQ, page },
    {
      skip: false,
    },
  );
  const numericId = 20;
  const { data: detail } = useGetAnimeByIdQuery(numericId, { skip: !numericId });
  console.log('detail', detail);
  const searchResults = useMemo(() => data?.data || [], [data]);
  const pagination = useMemo(() => data?.pagination, [data]);
  return (
    <Layout
      className="min-h-[calc(100vh-64px)]!"
      style={{
        padding: '25px 45px',
        display: 'flex',
        flexDirection: 'column',
        gap: 25,
      }}
    >
      <Input
        style={{
          width: '50%',
          margin: '0 auto 0 auto',
        }}
        value={q}
        size="large"
        placeholder="Type to search..."
        onChange={(e) => {
          const query = e.target.value;
          SetURLSearchParams({ q: query, page: '1' });
        }}
        suffix={<SearchOutlined />}
      />
      <AnimeList data={searchResults} pagination={pagination} isLoading={isLoading || isFetching} />
    </Layout>
  );
};

export default SearchPage;
