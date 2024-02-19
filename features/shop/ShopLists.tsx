import React from 'react';
import { ShopCardProps } from '@/app/types';
import { ShopCard } from '.';

/**
 * @description APIから取得した店舗情報を繰り返し表示するコンポーネント
 */
const ShopLists = ({ params }: { params: ShopCardProps[] }) => {
  return (
    <div>
      {params.map((param, index) => (
        <ShopCard key={index} params={param} />
      ))}
    </div>
  );
};

export default ShopLists;
