'use client';
import HeroIcons from './icons';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { IoDocumentText } from 'react-icons/io5';

import { useEffect, useState } from 'react';
export default function Hero({ locale, CTALocale }) {
	const [tilt, setTilt] = useState(45);
	const [duration, setDuration] = useState(0.8);

	useEffect(() => {
		const handleScroll = () => {
			const maxTilt = 45; // 最大倾斜角度
			const scrollY = window.scrollY;
			const tiltValue = Math.max(maxTilt - scrollY / 8, 0); // 根据滚动值调整
			setTilt(tiltValue);
			setDuration(0.3);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<section
				className='relative z-10 flex flex-col items-start md:items-center py-10 md:py-20 overflow-hidden'
				style={{ perspective: '800px' }}
			>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
				>
					<h1 className='font-bold text-5xl md:text-7xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] text-center bg-clip-text text-transparent !leading-[1.25em] mb-5'>
						{locale.h1}
					</h1>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 0.2,
						duration: 1,
					}}
				>
					<h2 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 md:text-center mb-5 md:mb-10'>{locale.h2}</h2>

					<div className='w-full md:w-8/12 mx-auto flex flex-col md:flex-row md:items-center justify-between gap-y-5'>
						<HeroIcons />

						<div className='flex flex-col md:flex-row gap-2'>
							<a
								title='get source code'
								className='btn btn-sm md:btn-md btn-base border-none hover:ring-1 ring-base-content text-base-100 hover:text-base-content bg-base-content hover:bg-base-100 rounded-full'
								href='https://github.com/huglemon/inwind-landing-page'
							>
								<SiGithub />
								{CTALocale.btn1}
							</a>
							<a
								title='get source code'
								className='btn btn-sm md:btn-md btn-base rounded-full'
								href='https://huglemon.com/blog/i-open-sourced-a-saas-landing-page'
							>
								<IoDocumentText /> {CTALocale.btn2}
							</a>
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 100, rotateX: '0deg' }}
					animate={{ opacity: 1, y: 0, rotateX: `${tilt}deg` }}
					transition={{
						delay: duration == 0.8 ? 0.4 : 0,
						duration: duration,
					}}
					className='w-full'
				>
					<Image
						width={1024}
						height={600}
						src={'/og.png'}
						className='hidden md:flex w-full -mt-10'
						alt='app demo'
					/>
				</motion.div>
			</section>

			<div className='absolute w-[100%] left-[0] top-[10%] md:top-[20%] h-[300px]'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					id='patternId'
					width='100%'
					height='100%'
				>
					<defs>
						<pattern
							id='a'
							patternUnits='userSpaceOnUse'
							width='20'
							height='20'
							patternTransform='scale(3) rotate(0)'
						>
							<rect
								x='0'
								y='0'
								width='100%'
								height='100%'
								fill='hsla(0, 0%, 100%, 0)'
							></rect>
							<path
								d='M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z'
								strokeWidth='0.5'
								className='stroke-base-content/50'
								fill='none'
							></path>
						</pattern>
					</defs>
					<rect
						width='800%'
						height='800%'
						transform='translate(0,0)'
						fill='url(#a)'
					></rect>
				</svg>
				<div className='bg-gradient-to-b from-base-100  from-20% to-transparent absolute inset-0 '></div>
				<div className='bg-gradient-to-l from-base-100  from-1% to-transparent to-30% absolute inset-0'></div>
				<div className='bg-gradient-to-r from-base-100  from-1% to-transparent to-30% absolute inset-0'></div>
				<div className='bg-gradient-to-t from-base-100  from-1% to-transparent to-30% absolute inset-0'></div>
			</div>
		</>
	);
}
