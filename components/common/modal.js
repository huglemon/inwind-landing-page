export default function Modal({params}) {
	let { id, title, content, closeable = true } = params;
	return (
		<dialog
			id={id}
			className='modal modal-bottom sm:modal-middle'
		>
			<div className='modal-box'>
				<h3 className='font-bold text-lg text-base-content'>{title}</h3>
				<p className='py-4 text-base-content/90'>{content}</p>
				{closeable && (
					<div className='modal-action'>
						<form method='dialog'>
							<button className='btn'>Close</button>
						</form>
					</div>
				)}
			</div>
		</dialog>
	);
}
