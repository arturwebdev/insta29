import { useDispatch, useSelector } from 'react-redux'
import './MessengerPeoplesMessage.css'
import { selectMessages, toggleActiveUser } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'

function MessengerPeoplesMessage({id,name,active,img}) {
	const {activeUserId} = useSelector(selectMessages)
	const {currentUser} = useSelector(selectUsers)
	const dispatch = useDispatch()
  return (
	 <div onClick={() => dispatch(toggleActiveUser({toId: id, fromId: currentUser.id}))} className={`Messenger-left-col-people-message ${activeUserId === id ? 'active' : ''}`}>
		<div className='Messsage-img'>
			<img src={img} alt=''/>
		</div>
		<div className='Message-info'>
			<p>{name}</p>
			<p>{active}</p>
		</div>
	 </div>
  )
}

export default MessengerPeoplesMessage
