import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomeDetail from './HomeDetail';

describe('HomeDetail コンポーネントのテスト', () => {
  it('「ここカフェん」が表示されていること', () => {
    const { getByText } = render(<HomeDetail />);
    expect(getByText('ここカフェん')).toBeInTheDocument();
  });

  it('使い方ガイドが正しく表示されていること', () => {
    const { getByText, getAllByText } = render(<HomeDetail />);
    expect(getByText(/位置情報の許可/)).toBeInTheDocument();
    const cafeSearchButtons = getAllByText(/カフェを探す/);
    expect(cafeSearchButtons.length).toBeGreaterThanOrEqual(1); // 少なくとも1つは存在するこ
    expect(getByText(/カフェの詳細をチェック/)).toBeInTheDocument();
    expect(getByText(/カフェへの道のり/)).toBeInTheDocument();
  });

  it('「ヒント」セクションが正しく表示されていること', () => {
    const { getByText } = render(<HomeDetail />);
    expect(
      getByText(/検索バーを使用して、特定のエリアやカフェ名で検索することも可能です。/),
    ).toBeInTheDocument();
  });

  it('「ご意見・ご要望」セクションが正しく表示されていること', () => {
    const { getByText } = render(<HomeDetail />);
    expect(getByText(/ご意見・ご要望/)).toBeInTheDocument();
  });
});
