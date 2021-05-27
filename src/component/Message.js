import React from 'react';
import { auth } from '../firebase';

const Message = ({ message }) => {
	const { text, uid, photoURL } = message;

	const mine = uid === auth.currentUser.uid;

	return (
		<div
			className={`flex ${
				mine ? 'flex-row-reverse' : 'flex-row'
			} justify-start items-center space-y-6 `}
		>
			<img src={photoURL} alt='User' className='w-10 h-10 rounded-full' />
			<p className='message '>{text}</p>
		</div>
	);
};

export default Message;
