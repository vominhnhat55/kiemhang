import {ProductType, columns} from './columns';
import {DataTable} from './data-table';

async function getData(): Promise<ProductType[]> {
  // Fetch data from your API here.
  return [
    {
      mst: 'st01',
      amount: 10,
      name: 'hạnh nhân nướng',
    },
    {
      mst: 'st01',
      amount: 25,
      name: 'hạnh nhân nướng 100g',
    },
    {
      mst: 'st01',
      amount: 34,
      name: 'hạnh nhân nướng 200g',
    },
    {
      mst: 'st01',
      amount: 34,
      name: 'hạnh nhân nướng 300g',
    },
    {
      mst: 'st01',
      amount: 34,
      name: 'bí xanh nướng 100g',
    },
    {
      mst: 'st01',
      amount: 34,
      name: 'hạt đát 300g',
    },
    {
      mst: 'st01',
      amount: 34,
      name: 'bí xanh nướng 300g',
    },
    {
      mst: 'st01',
      amount: 34,
      name: 'bí xanh nước 200g',
    },
  ];
}

export default async function TableProduct() {
  const data = await getData();

  return (
    <div className='py-10 w-full mx-4 mt-[100px]'>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
