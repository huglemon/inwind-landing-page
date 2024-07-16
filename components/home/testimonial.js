'use client';
import TestimonialCard from './testimonial/card';
import { TestimonialsList } from '@/lib/testimonialsList';
import { motion } from 'framer-motion';
import { MdFeedback } from 'react-icons/md';

export default function Feature({ locale, langName = 'en' }) {
	let list = TestimonialsList[`TESTIMONIAL_${langName.toUpperCase()}`] || [];
	return (
		<section
			id='testimonial'
			className='relative py-10 md:py-20'
		>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
				}}
			>
				<div className='relative z-10 flex flex-col gap-5 items-start md:items-center mb-10 mx-auto'>
					<div className='relative inline-flex items-center justify-center gap-2 border-2 border-base-content px-5 md:px-10 py-1 md:py-3 rounded-full text-lg md:text-2xl font-semibold overflow-hidden group'>
						<div className='inline-flex items-center justify-center gap-2 z-10'>
							<MdFeedback /> <h2>{locale.h2}</h2>
						</div>
						<div className='absolute w-0 h-full bg-base-content z-[0]'></div>
					</div>

					<h3 className='font-bold text-3xl md:text-5xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] md:text-center bg-clip-text text-transparent !leading-[1.25em]'>
						{locale.h3}
					</h3>

					<h4 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 md:text-center'>
						{locale.description1}
						<a
							title='feedback'
							className='text-primary'
							href='#'
						>
							{locale.description2}
						</a>
						{locale.description3}
					</h4>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
				}}
			>
				<div className='relative z-10 w-full md:w-10/12 mx-auto columns-1 md:columns-3 gap-5'>
					{list.map((item, index) => {
						return (
							<TestimonialCard
								key={index}
								testimonialItem={item}
								langName={langName}
							/>
						);
					})}
				</div>
			</motion.div>

			<div className='hidden md:block absolute left-[20%] top-[70%] z-0'>
				<div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
			</div>
		</section>
	);
}
