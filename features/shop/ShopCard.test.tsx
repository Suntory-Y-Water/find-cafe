import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ShopCard from './ShopCard';
import { ShopCardProps } from '@/app/types';

const mockStoreData: ShopCardProps[] = [
  {
    storeName: 'パペルブルク',
    storeId: 'store00001',
    businessHours: '月曜日 9:00 ~ 20:00',
    distance: 2000,
    isCompany: false,
  },
  {
    storeName: '店舗３４５６７８９０１２３４５６',
    storeId: 'store00003',
    businessHours: '月曜日 9:00 ~ 20:00',
    distance: 950,
    isCompany: true,
    companyName: 'エスプレッソ・アメリカーノ',
  },
];

describe('ShopCardコンポーネントのテスト', () => {
  test('個人経営の店の場合、企業名称を表示しない', () => {
    render(<ShopCard params={mockStoreData[0]} />);
    expect(screen.queryByText('エスプレッソ・アメリカーノ')).toBeNull();
  });

  test('店舗の名前が14文字以上だったら...を表示する', () => {
    render(<ShopCard params={mockStoreData[1]} />);
    expect(screen.getByText('店舗３４５６７８９０１２３...')).toBeInTheDocument();
  });

  test('企業名称が記載されている', () => {
    render(<ShopCard params={mockStoreData[1]} />);
    expect(screen.getByText('エスプレッソ・アメリカーノ')).toBeInTheDocument();
  });

  test('storeIdがリンク先として設定されている', () => {
    render(<ShopCard params={mockStoreData[0]} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', `detail/${mockStoreData[0].storeId}`);
  });
});
