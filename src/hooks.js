import { firestore } from './firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const messageRef = firestore.collection('messages');

export const useMessage = () => {
	const query = messageRef.orderBy('createdAt');
	const [messages, loading, error] = useCollectionData(query, {
		idField: 'id',
	});

	return { messages, loading, error };
};
