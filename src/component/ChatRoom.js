import React, { useState } from 'react';

import MessageList from './MessageList';
import SendChat from './SendChat';

const ChatRoom = () => {
	const [bottomRef, setBottomRef] = useState(null);

	const scrollBottom = () => {
		bottomRef && bottomRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className='mx-5 min-h-vh90 flex flex-col'>
			<h1 className='text-center text-orange font-mont lg:text-4xl text-2xl my-5'>
				🥳 Welcome to Wuchat 🎉
			</h1>
			<MessageList setBottomRef={setBottomRef} className='flex-1' />
			<SendChat scrollBottom={scrollBottom} />
		</div>
	);
};

export default ChatRoom;
