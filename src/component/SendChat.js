import React, { useRef } from 'react';
import { firestore, auth } from '../firebase';
import { FaPaperPlane } from 'react-icons/fa';
import firebase from 'firebase';

const SendChat = ({ scrollBottom }) => {
	const messageRef = firestore.collection('messages');
	const { uid, photoURL } = auth.currentUser;

	const chatRef = useRef();

	const sendChat = async (e) => {
		e.preventDefault();
		await messageRef.add({
			text: chatRef.current.value,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid,
			photoURL,
		});
		chatRef.current.value = '';
		scrollBottom();
	};

	return (
		<form onSubmit={sendChat} className='flex my-5 mt-auto'>
			<input
				type='text'
				ref={chatRef}
				className='flex-1 border-none bg-accent text-red px-3'
			/>
			<button className='button lg:w-20 sm:w-10 flex justify-center items-center'>
				<FaPaperPlane />
			</button>
		</form>
	);
};

export default SendChat;
