import { Carousel, Spin } from 'antd';
import { useGetTopAnimeQuery } from '../../api/animeApi';
import { useMemo } from 'react';

const HomePage = () => {
  const { data, isLoading } = useGetTopAnimeQuery({});
  const topAnime = useMemo(
    () =>
      data?.data?.map((item) => ({
        id: item.mal_id,
        title: item.title,
        images_url: item.images?.webp?.large_image_url,
        synopsis: item.synopsis,
      })) || [],
    [data],
  );

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }
  return (
    <Carousel autoplay>
      {topAnime.map((item, index) => (
        <div className="relative" key={item.id}>
          <div className="absolute w-full h-full bg-black opacity-40 z-0"></div>
          <div className="absolute flex flex-col gap-4 z-10 text-white p-10 w-1/2 top-1/2 -translate-y-1/2">
            <h4 className="text-[#FAFF02] text-4xl font-semibold">{`#${index + 1} SPOTLIGHT`}</h4>
            <h2 className="text-white text-6xl font-bold">{item.title}</h2>
            <p className="text-xl font-light line-clamp-4 max-w-full">{item.synopsis}</p>
          </div>
          <img
            src={item.images_url ?? ''}
            alt=""
            className="max-h-[calc(100vh-64px)] w-full object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default HomePage;
