import {Button} from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {ProductType} from './columns';

export function DialogProduct({
  product,
  children,
}: {
  product: ProductType;
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle className='text-center'>
            Cập nhật số lượng sản phẩm
          </DialogTitle>
          <DialogDescription className='text-center hidden'>
            Chỉnh sửa sản phẩm
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='items-center gap-4 font-bold '>
            <h1 className='text-center'>Tến sản phẩm : </h1>
            <h1 className='text-center underline text-xl text-blue-800'>
              {product.name}
            </h1>
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='Số lượng' className='text-right'>
              Số lượng
            </Label>
            <Input
              id='username'
              defaultValue={product.amount}
              className='col-span-3'
              type='number'
            />
          </div>
        </div>
        <DialogFooter className='sm:justify-start'>
          <Button type='button' variant='default'>
            Lưu
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
