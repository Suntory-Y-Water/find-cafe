'use client';

import { CommandDialog, CommandInput } from '@/app/components/ui/command';
import { useState } from 'react';

// TODO: 検索したあとのマップ表示については、マップ画面実装後に設定する
export function SearchCommand() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          data-testid='search-command'
        >
          <path
            d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
            stroke='#7F4F24'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M21 21L16.65 16.65'
            stroke='#7F4F24'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          name='unique-search-field-name'
          autoComplete='no-autocomplete'
          placeholder='検索したいカフェの名前か住所を入力！'
        />
      </CommandDialog>
    </div>
  );
}
