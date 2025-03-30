import Image from 'next/image';
import React from 'react';

function AmazingDeals() {
    return (
        <div className='p-3 lg:px-[80px] py-10'>
            <p className='text-[32px] font-[500] text-center'>Amazing deals, updated daily</p>
            <div className='flex gap-2 justify-center my-5 flex-wrap'>
                <div className='w-[177px]'>
                    <Image src={"/beauty.png"} alt='' width={150} height={150} className='m-auto mb-3'/>
                    <p className='text-[18px] text-[#1E1E1E] font-[500] text-center'>Beauty& MakeUp</p>
                </div>
                <div className='w-[177px]'>
                    <Image src={"/val.png"} alt='' width={150} height={150} className='m-auto mb-3'/>
                    <p className='text-[18px] text-[#1E1E1E] font-[500] text-center'>Valentine Special</p>
                </div>
                <div className='w-[177px]'>
                    <Image src={"/easter.png"} alt='' width={150} height={150} className='m-auto mb-3'/>
                    <p className='text-[18px] text-[#1E1E1E] font-[500] text-center'>Easter Hunts</p>
                </div>
                <div className='w-[177px]'>
                    <Image src={"/portrait.png"} alt='' width={150} height={150} className='m-auto mb-3'/>
                    <p className='text-[18px] text-[#1E1E1E] font-[500] text-center'>Custom Portraits</p>
                </div>
                <div className='w-[177px]'>
                    <Image src={"/games.png"} alt='' width={150} height={150} className='m-auto mb-3'/>
                    <p className='text-[18px] text-[#1E1E1E] font-[500] text-center'>Video Games</p>
                </div>
            </div>
        </div>
    );
}

export default AmazingDeals;