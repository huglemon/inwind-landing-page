'use client';
import React, { useState } from 'react';
export default function FeatureCard({ featureItem = {} }) {
	const [tiltStyle, setTiltStyle] = useState({});

	// const handleMouseMove = (e) => {
	// 	const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
	// 	const { offsetX: x, offsetY: y } = e.nativeEvent;

	// 	const rotateX = (y / height - 0.5) * 50; // 控制倾斜角度范围
	// 	const rotateY = (x / width - 0.5) * -50;

	// 	setTiltStyle({
	// 		transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
	// 	});
	// };

	// const handleMouseLeave = () => {
	// 	setTiltStyle({
	// 		transform: 'rotateX(0deg) rotateY(0deg)',
	// 		transition: 'transform 0.2s ease-out'
	// 	});
	// };

	return (
		<div
			className='w-full min-h-48 p-5 border-2 border-base-content rounded-xl flex flex-col items-center gap-2 transition-all duration-100 shadow-none hover:shadow-2xl hover:scale-110 bg-base-100'
			// onMouseMove={handleMouseMove}
			// onMouseLeave={handleMouseLeave}
			// style={tiltStyle}
		>
			{featureItem.icon && React.createElement(featureItem.icon, { className: 'text-3xl' })}
			<h2 className='text-xl font-bold text-center'>{featureItem.title}</h2>
			<p className='text-center'>{featureItem.description}</p>
		</div>
	);
}
