import React from 'react';

interface SkeletonLoaderProps {
  className?: string;
  count?: number;
  type?: 'card' | 'text' | 'image';
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  className = '',
  count = 1,
  type = 'card',
}) => {
  const skeletonMap = {
    card: (
      <div className="animate-pulse rounded-xl bg-white p-6 shadow-md border border-gray-100">
        <div className="h-48 bg-gray-200 rounded-lg mb-4" />
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-3 bg-gray-200 rounded w-1/2 mb-4" />
        <div className="h-3 bg-gray-200 rounded w-full mb-2" />
        <div className="h-3 bg-gray-200 rounded w-2/3" />
      </div>
    ),
    text: (
      <div className="animate-pulse space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-4 bg-gray-200 rounded w-4/6" />
      </div>
    ),
    image: (
      <div className="animate-pulse h-64 bg-gray-200 rounded-xl" />
    ),
  };

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={className}>
          {skeletonMap[type]}
        </div>
      ))}
    </>
  );
};

export default SkeletonLoader;
