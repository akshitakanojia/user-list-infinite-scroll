import React from 'react'
import style from './UserCard.module.css'

const UserCard = ({user,refProp}) => {
  return (
    <div className={style.card_container}>
      {refProp&&refProp()}
      <div className={style.img_wrapper}>
        <img className={style.profile_img} src={user.picture.medium} />
      </div>
      <p>{user.name.first} {user.name.last}</p>
    </div>
  )
}

export default UserCard
