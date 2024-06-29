'use client';
import { FaCheck } from 'react-icons/fa';

export default function PricingCard({ pricingItem = {} }) {
	return (
		<div className={`w-full min-h-96 px-5 py-10 border-2 border-base-content rounded-xl flex flex-col items-center gap-2 transition-all duration-100 shadow-none hover:shadow-2xl bg-base-100 ${pricingItem.recommend && 'md:scale-125'}`}>
			<h2 className='text-xl font-bold text-center'>{pricingItem.title}</h2>
			<p className='text-center'>{pricingItem.description}</p>
			<div className='text-4xl font-bold text-center py-5 bg-gradient-to-r from-base-content from-0% to-[#9c9c9c] md:text-center bg-clip-text text-transparent'>
				{pricingItem.price}/{pricingItem.duration}
			</div>

			<ul className='w-full flex flex-col gap-2 py-5'>
				{pricingItem.features &&
					pricingItem.features.map((feature, Featureindex) => {
						return (
							<li
								className='flex items-center gap-2'
								key={Featureindex}
							>
								<FaCheck /> {feature}
							</li>
						);
					})}
			</ul>

			<a
				aria-label='choose plan'
				title='choose plan'
				href='#'
				className='btn btn-wide bg-base-content text-base-100 hover:bg-base-100 hover:text-base-content rounded-full'
			>
				Choose Plan
			</a>
		</div>
	);
}
