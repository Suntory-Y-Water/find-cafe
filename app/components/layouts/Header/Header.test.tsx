import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Header from './Header';

const mockUsePathname = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: () => jest.fn(),
      replace: () => jest.fn(),
    };
  },
}));

jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe('Headerコンポーネントのテスト', () => {
  it('レンダリングされたら、ホーム画面に戻るSVGが表示されている', () => {
    render(<Header />);
    const homeIcon = screen.getByTestId('home-icon');
    expect(homeIcon).toBeInTheDocument();
  });

  it('ホーム画面に戻るSVGの遷移先がホーム画面に設定されている', () => {
    render(<Header />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });

  it('ホーム画面では検索BOX(<SearchCommand />)が表示されない', async () => {
    mockUsePathname.mockImplementation(() => '/');
    render(<Header />);
    await waitFor(() => {
      expect(screen.queryByTestId('search-command')).toBeNull();
    });
  });

  it('ホーム画面以外では検索BOX(<SearchCommand />)が表示される', () => {
    mockUsePathname.mockImplementation(() => '/map');
    render(<Header />);
    expect(screen.getByTestId('search-command')).toBeInTheDocument();
  });
});
