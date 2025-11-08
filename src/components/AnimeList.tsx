import Card from './Card';
import type { Anime } from '../app/api/types/AnimeItems';
import { useSearchParams } from 'react-router-dom';
import type { PaginationPlus } from '../app/api/types/PaginationPlus';
import { Pagination } from 'antd';

type AnimeListProps = {
  data: Anime[];
  isLoading?: boolean;
  pagination?: PaginationPlus['pagination'];
};

const loaderData = Array.from({ length: 12 }, (_, i) => i + 1);

const AnimeList = ({ data, isLoading, pagination }: AnimeListProps) => {
  const [URLSearchParams, SetURLSearchParams] = useSearchParams();
  const q = URLSearchParams.get('q') || '';

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {loaderData.map((item) => (
          <Card key={item} isLoading />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 h-full">
      {data.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {data.map((item) => (
              <Card
                key={item.mal_id}
                name={item.title ?? 'No Title'}
                thumbnail={item.images?.webp?.large_image_url ?? ''}
                type={item.type ?? 'No Type'}
              />
            ))}
          </div>
          <div className="flex justify-center items-center mt-auto">
            <Pagination
              responsive
              total={pagination?.items?.total}
              current={pagination?.current_page}
              pageSize={pagination?.items?.per_page}
              showSizeChanger={false}
              onChange={(page) => {
                SetURLSearchParams({ q, page: String(page) });
              }}
            />
          </div>
        </>
      ) : (
        <div className="flex p-6 text-4xl font-semibold text-gray-400">
          No Result with value: {q}
        </div>
      )}
    </div>
  );
};

export default AnimeList;
