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
		<div className='w-full h-full my-5'>
			{messages &&
				messages.map((msg) => <Message key={msg.id} message={msg} />)}
			<div ref={bottomRef}></div>
		</div>
	);
};

export default MessageList;
