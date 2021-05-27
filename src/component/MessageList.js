import React, { useRef, useEffect } from 'react';

import { useMessage } from '../hooks';

import Message from './Message';

const MessageList = ({ setBottomRef }) => {
	const { messages } = useMessage();

	const bottomRef = useRef();

	useEffect(() => {
		setBottomRef(bottomRef);
	}, [setBottomRef]);

	return (
		<div className='w-full h-full'>
			{messages &&
				messages.map((msg) => <Message key={msg.id} message={msg} />)}
			<div ref={bottomRef}></div>
		</div>
	);
};

export default MessageList;
