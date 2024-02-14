import * as HomeComponents from '@/features/index';
import { Button } from './components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <HomeComponents.HomeDetail />
      <div className='py-4'>
        <Link href='/map'>
          <Button className='w-full items-center justify-center p-6'>カフェを探す</Button>
        </Link>
      </div>
    </div>
  );
}
