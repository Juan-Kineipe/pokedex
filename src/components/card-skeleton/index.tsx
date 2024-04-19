import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CardSkeleton = ({ cards }: any) => {
  return (
    <>
      {Array(cards)
        .fill(0)
        .map((_, i) => (
          <div key={i}>
            <Skeleton width={210} height={266} />
          </div>
        ))}
    </>
  );
};
