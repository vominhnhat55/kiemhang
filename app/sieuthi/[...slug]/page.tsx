import MarketData from '@/data/marketdata';

import TableProduct from '@/table/product/page';
import {ArrowLeft} from 'lucide-react';
import Link from 'next/link';
export default async function Page({
  params,
}: {
  params: Promise<{slug: string}>;
}) {
  const slug = (await params).slug;
  const nameMarket = MarketData.filter((framework) => {
    console.log(framework.value, slug[0]);
    return framework.value === slug[0];
  })[0];
  console.log(nameMarket);

  return (
    <div className='flex flex-col justify-center items-center gap-2 mt-4 text-2xl font-semibold text-green-600'>
      <div className='flex justify-between w-full items-center px-3'>
        <div className='text-blue-600 cursor-pointer'>
          <Link href='/'>
            <ArrowLeft />
          </Link>
        </div>
        <div>
          <h3 className='text-center'>Kiểm hàng siêu thị: </h3>
          <h3 className='text-center'>
            {' '}
            {nameMarket ? nameMarket.label : 'Siêu thị không hợp lệ'}{' '}
          </h3>
        </div>
        <div></div>
      </div>
      <div className='w-full px-9'>
        <TableProduct />
      </div>
    </div>
  );
}
