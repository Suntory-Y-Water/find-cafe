import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ShopLists from './ShopLists';
import { ShopCardProps } from '@/app/types';

const mockStoreData: ShopCardProps[] = [
  {
    storeName: '東京ミッドタウン日比谷店',
    storeId: 'store00000',
    businessHours: '月曜日 9:00 ~ 17:00',
    distance: 1200,
    isCompany: true,
    companyName: 'スターバックス・コーヒー',
  },
  {
    storeName: 'パペルブルク',
    storeId: 'store00001',
    businessHours: '月曜日 9:00 ~ 20:00',
    distance: 2000,
    isCompany: false,
  },
  {
    storeName: 'ピーくんカフェ',
    storeId: 'store00005',
    businessHours: '月曜日 9:00 ~ 20:00',
    distance: 10000,
    isCompany: false,
  },
];
describe('ShopLists', () => {
  test('渡された店舗情報がShopCardコンポーネントに表示される', () => {
    render(<ShopLists params={mockStoreData} />);
    mockStoreData.forEach((data) => {
      expect(screen.getByText(data.storeName)).toBeInTheDocument();
    });
  });
});
