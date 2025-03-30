import React from 'react';
import { Logo } from './svg';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

function Footer() {
    return (
        <div className='p-3 lg:px-[80px] py-10'>
            <Logo/>
            <p>Simplifying Retail.</p>
            <div className='mt-5 flex gap-[100px] flex-wrap'>
                <div className='order-2 lg:order-1'>
                    <Image src={"/footer-img.png"} alt='Footer Image' width={377} height={562}/>
                </div>
                <div className='flex flex-col justify-between pb-5 order-1 lg:order-2'>
                <div className='flex gap-10 flex-wrap'>
                    <div>
                        <p className='font-bold'>Company</p>
                        <p className='font-[300] text-[14px] my-2'>About Us</p>
                        <p className='font-[300] text-[14px] my-2'>Careers</p>
                        <p className='font-[300] text-[14px] my-2'>Community</p>
                    </div>
                    <div>
                        <p className='font-bold'>Contact</p>
                        <p className='font-[300] text-[14px] my-2'>Lagos, Nigeria</p>
                        <p className='font-[300] text-[14px] my-2'>hello@bundo.app</p>
                        <p className='font-[300] text-[14px] my-2'>info@bundo.app</p>
                    </div>
                    <div>
                        <p className='font-bold'>Support</p>
                        <p className='font-[300] text-[14px] my-2'>FAQs</p>
                        <p className='font-[300] text-[14px] my-2'>support@bundo.app</p>
                        <p className='font-[300] text-[14px] my-2'>help@bundo.app</p>
                    </div>
                    <div>
                        <p className='font-bold'>Legal</p>
                        <p className='font-[300] text-[14px] my-2'>Privacy Policy</p>
                        <p className='font-[300] text-[14px] my-2'>Terms Of Use</p>
                        <p className='font-[300] text-[14px] my-2'>Vendor Agreement</p>
                    </div>
                </div>
                <div className='flex gap-3 flex-wrap my-3'>
                    <p className='font-[700] text-[18px]'>Keep up with us</p>
                    <div className='text-[#34A853] flex items-center gap-1'>
                        <Instagram size={"16px"} fill='#34A853' color='white'/>
                        <p>Instagram</p>
                    </div>
                    <div className='text-[#34A853] flex items-center gap-1'>
                        <Twitter size={"16px"} fill='#34A853' color='#34A853'/>
                        <p>Twitter</p>
                    </div>
                    <div className='text-[#34A853] flex items-center gap-1'>
                        <Facebook size={"16px"} fill='#34A853' color='#34A853'/>
                        <p>Facebook</p>
                    </div>
                    <div className='text-[#34A853] flex items-center gap-1'>
                        <Linkedin size={"16px"} fill='#34A853' color='#34A853'/>
                        <p>LinkedIn</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;