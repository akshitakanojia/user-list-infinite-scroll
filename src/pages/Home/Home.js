import React, { useState, useRef, useCallback } from 'react'

import style from './Home.module.css'
import UserCard from '../../components/UserCard/UserCard'
import axios from 'axios'
import useGetUsers from '../../useGetUsers'

const Home = (props) => {
  if (localStorage.getItem('userlist_loggedIn') === 'false') {
    props.history.push('/')
  }

  const [pageNumber, setPageNumber] = useState(1)

  const { loading, error, users } = useGetUsers(pageNumber)

  const observer = useRef()

  const lastCard = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading])

  return (
    <div className={style.container}>
      {users?.map((user, index) => {
        if (users.length === index + 1) {
          return <UserCard user={user} refProp={() => <div ref={lastCard}></div>} />
        }
        else {
          return <UserCard user={user} />
        }
      })}
      {loading&&<div>Loading...</div>}
    </div>
  )
}

export default Home
