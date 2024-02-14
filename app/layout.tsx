import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import Header from './components/layouts/Header/Header';

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ここカフェん',
  description: 'ここカフェんは、チェーン店以外のカフェを紹介するサイトです。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={`${notoSansJp.className}`}>
        <div className='container max-w-4xl mx-auto'>
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
