import React from 'react'
import Conversation from '../../../../backend/models/conversation.model'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput />
        <div className='divider px-4'></div>
        <Conversations />
        <LogoutButton />
    </div>
  )
}

export default Sidebar

/* starded code
import React from 'react'
import Conversation from '../../../../backend/models/conversation.model'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput />
        <div className='divider px-4'></div>
        <Conversations />
        <LogoutButton />
    </div>
  )
}

export default Sidebar
*/