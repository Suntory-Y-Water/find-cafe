import { ShopCardProps } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
/**
 * @description APIから取得した店舗情報を表示するカード
 */
const ShopCard = ({ params }: { params: ShopCardProps }) => {
  return (
    <Link href={`detail/${params.storeId}`}>
      <div className='py-2'>
        <div className='rounded-md border p-4 shadow-md outline-none hover:bg-slate-50'>
          <div className='flex justify-between space-x-4'>
            <div className='flex-shrink-0'>
              {params.isCompany === true ? (
                <Image src='/building.svg' alt='company Logo' width={40} height={40} priority />
              ) : (
                <Image src='/coffee.svg' alt='coffee Logo' width={40} height={40} priority />
              )}
            </div>
            <div className='space-y-1'>
              <h4 className='text-sm font-semibold'>
                {params.storeName.length > 13
                  ? params.storeName.substring(0, 13) + '...'
                  : params.storeName}
              </h4>
              <p className='text-sm'>{`営業時間: ${params.businessHours}`}</p>
              {params.isCompany && (
                <div className='items-center pt-2 space-x-1 text-xs text-muted-foreground'>
                  <p>{params.companyName}</p>
                </div>
              )}
              <div className='flex items-center space-x-1'>
                <Image src='/compass.svg' alt='compass Logo' width={16} height={16} priority />
                <span className='text-xs text-muted-foreground'>{`中心から約${params.distance.toLocaleString()}メートル`}</span>
              </div>
            </div>
            <div className='ml-auto flex justify-center items-center'>
              {params.isCompany === true ? (
                <Image
                  src='/green-chevron-right.svg'
                  alt='green-chevron-right'
                  width={24}
                  height={24}
                  priority
                />
              ) : (
                <Image
                  src='/brown-chevron-right.svg'
                  alt='brown-chevron'
                  width={24}
                  height={24}
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShopCard;
