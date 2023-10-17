import { useSelector } from 'react-redux'
import './MessengerChat.css'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { selectMessages } from '../../store/slices/messages/messagesSlice'

function MessengerChat() {
  const {currentDialog} = useSelector(selectMessages)
  const {currentUser} = useSelector(selectUsers)
  return (
	 <div className='MessengerChat'>
		{
      currentDialog.map(message => (
        <h1
          key={message.id}
          style={message.fromId === currentUser.id ? {
            backgroundColor: '#5f04fb',
            color: 'white',
            textAlign: 'right',
          } : {
            backgroundColor: '#040006',
            color: 'white',
            textAlign: 'left'
          }}
        >{message.body}</h1>
      ))
    }
	 </div>
  )
}

export default MessengerChat
