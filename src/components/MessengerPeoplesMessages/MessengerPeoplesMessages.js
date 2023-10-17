import './MessengerPeoplesMessages.css'
import IMAGES from '../../images'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { useMemo } from 'react'

function MessengerPeoplesMessages() {
	const {usersData, currentUser} = useSelector(selectUsers)

	const message = useMemo(() => {
		return usersData.filter(user => user.id !== currentUser.id)
						.map(user => ({
							id: user.id,
							img: user.avatar,
							name: user.username,
							active: `Active ${Math.round(Math.random() * 58 +  1)}m ago`
						}))
	}, [usersData])
  	return (
	 	<div className='Messenger-left-col-peoples-messages'>
			{
				message.map(el => <MessengerPeoplesMessage key={el.id} id={el.id} img={el.img} name={el.name} active={el.active}/>)
			}
	 	</div>
  	)
}

export default MessengerPeoplesMessages
