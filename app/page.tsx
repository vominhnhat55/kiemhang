'use client';
import Image from 'next/image';
import * as React from 'react';
import {Check, ChevronsUpDown} from 'lucide-react';
import {useRouter} from 'next/navigation';

import {cn} from '@/lib/utils';
import {Button} from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import MarketData from '@/data/marketdata';

export default function HomePage() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [market, setMarket] = React.useState('');
  const handleNavigation = () => {
    if (market === '') {
      alert('Vui lòng chọn siêu thị');
      return;
    }
    router.push(`/sieuthi/${market}`); // Điều hướng đến trang About
  };

  return (
    <div className='flex h-full w-screen justify-center items-center flex-col gap-4 mt-[200px] px-10 '>
      <h1
        className='font-bold text-xl
      '
      >
        THEO DÕI BIẾN THỂ HÀNG HOÁ
      </h1>
      <Image
        src='https://static.wixstatic.com/media/a3704e_4f1ed9eeeada4798b934de7637cf345e~mv2.png/v1/fill/w_156,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/KASH_Fine%20Food_Logo.png'
        width={100}
        height={100}
        objectFit='contain'
        alt='Picture of the author'
      />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className='w-full max-w-[400px]'>
          <Button
            variant='outline'
            role='combobox'
            aria-expanded={open}
            className='w-full justify-between h-12'
          >
            {market
              ? MarketData.find((framework) => framework.value === market)
                  ?.label
              : 'vui lòng chọn siêu thị'}
            <ChevronsUpDown className='opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-full p-0 max-w-[400px]'>
          <Command>
            <CommandInput placeholder='tìm siêu thị...' />
            <CommandList>
              <CommandEmpty>Không tìm thấy siêu thị</CommandEmpty>
              <CommandGroup>
                {MarketData.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setMarket(currentValue === market ? '' : currentValue);
                      setOpen(false);
                    }}
                  >
                    {framework.label}
                    <Check
                      className={cn(
                        'ml-auto',
                        market === framework.value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <Button className='w-full max-w-[400px]' onClick={handleNavigation}>
        Điều hướng
      </Button>
      <h2>{market}</h2>
    </div>
  );
}
