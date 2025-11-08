import { useParams } from 'react-router-dom';
import { useGetAnimeByIdQuery } from '../../api/animeApi';
import { useMemo } from 'react';
import Loader from '../../../components/Loader';
import { Tag } from 'antd';

const DetailPage = () => {
  const params = useParams();
  const id = Number(params.id);

  const { data, isLoading } = useGetAnimeByIdQuery(id, { skip: !id });
  const detail = useMemo(() => data?.data, [data]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="relative">
        <div className="absolute w-full h-full bg-black opacity-40 z-0"></div>
        <div className="absolute flex flex-col gap-4 z-1 text-white p-10 w-1/2 top-1/2 -translate-y-1/2 translate-x-1/2">
          <h2 className="text-white text-6xl font-bold">{detail?.title}</h2>
        </div>
        <img
          src={detail?.images?.webp?.large_image_url ?? ''}
          alt=""
          className="max-h-[400px] w-full object-cover"
        />
      </div>
      <div className="p-10 max-w-4xl mx-auto flex flex-col gap-6">
        <div className="flex items-center gap-6 justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Release Year</h3>
            <p className="text-lg leading-relaxed">{detail?.year}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Episode</h3>
            <p className="text-lg leading-relaxed">{detail?.episodes}</p>
          </div>
        </div>
        {detail?.genres && detail.genres.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Genres</h3>
            {detail.genres.map((genre) => (
              <Tag key={genre.mal_id} color="blue" className="text-lg">
                {genre.name}
              </Tag>
            ))}
          </div>
        )}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Synopsis</h3>
          <p className="text-lg leading-relaxed">{detail?.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
