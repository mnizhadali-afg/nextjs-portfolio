import Image from 'next/image';
import { IconAppWindow } from '@tabler/icons-react';
import DirectionAwareHover from '@/app/aceternity-ui/direction-aware-hover';

const Hobbies = () => {
  return (
    <div className='flex gap-2 px-5 py-5'>
      <DirectionAwareHover imageUrl='/assets/image-1.jpg'>
        <p className='font-bold text-xl'>In the mountains</p>
        <p className='font-normal text-sm'>$1299 / night</p>
      </DirectionAwareHover>
      <DirectionAwareHover imageUrl='/assets/image-2.jpg'>
        <p className='font-bold text-xl'>In the mountains</p>
        <p className='font-normal text-sm'>$1299 / night</p>
      </DirectionAwareHover>
      <DirectionAwareHover imageUrl='/assets/image-3.jpg'>
        <p className='font-bold text-xl'>In the mountains</p>
        <p className='font-normal text-sm'>$1299 / night</p>
      </DirectionAwareHover>
      <DirectionAwareHover imageUrl='/assets/image-4.jpg'>
        <p className='font-bold text-xl'>In the mountains</p>
        <p className='font-normal text-sm'>$1299 / night</p>
      </DirectionAwareHover>
    </div>
  );
};
export default Hobbies;
