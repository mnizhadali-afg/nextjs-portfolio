import Image from 'next/image';
import { IconAppWindow } from '@tabler/icons-react';
import DirectionAwareHover from '@/app/aceternity-ui/direction-aware-hover';

const Hobbies = () => {
  return (
    <div className='container py-32'>
      <p className='text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-l from-red-500 to-blue-500 py-8'>
        Hobbies - iPhonography
      </p>
      <div className='flex columns-4 gap-3'>
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
    </div>
  );
};
export default Hobbies;
