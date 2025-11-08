import { Card as AntdCard, Skeleton } from 'antd';

type CardProps = {
  name?: string;
  thumbnail?: string;
  type?: string;
  isLoading?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const { Meta } = AntdCard;
const Card = ({ name, thumbnail, type, isLoading, onClick }: CardProps) => {
  return (
    <AntdCard
      hoverable
      onClick={onClick}
      style={{ width: '100%', overflow: 'hidden' }}
      cover={
        isLoading ? (
          <div className="h-24" />
        ) : (
          <div className="aspect-16/11 w-full">
            <img src={thumbnail} alt={name} className="h-full w-full object-cover" />
          </div>
        )
      }
    >
      <Meta
        title={isLoading ? <Skeleton /> : name}
        description={!isLoading && type}
        style={{
          padding: 0,
        }}
      />
    </AntdCard>
  );
};

export default Card;
