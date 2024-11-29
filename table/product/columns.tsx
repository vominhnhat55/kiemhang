'use client';

import {ColumnDef} from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ProductType = {
  mst: string;
  amount: number;
  name: string;
};

export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: 'mst',
    header: 'MST',
  },
  {
    accessorKey: 'name',
    header: 'Tên sản phẩm',
  },
  {
    accessorKey: 'amount',
    header: 'Số lượng',
  },
];
