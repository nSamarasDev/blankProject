import React from 'react'
import UsersList from '../components/UsersList'


const Users = () => {
  const USERS = [
    { 
      id: 'ul', 
      name: 'Nicholas Samaras', 
      image: 'https://avatars.githubusercontent.com/u/85946038?s=400&u=cc2db6c99dcdabcfd1f946cc2816e4d74b5d36e1&v=4', 
      places: 3 
    }
  ]

  return <UsersList items={USERS} />
}

export default Users
