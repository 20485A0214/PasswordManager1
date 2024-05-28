import './index.css'

const User = props => {
  const {eachUser} = props
  const {website, password, userName} = eachUser

  return (
    <li className="listContainer">
      <p className="logo">{userName[0]}</p>
      <div>
        <p className="paragraph">{website}</p>
        <p className="paragraph">{userName}</p>
        <p className="paragraph">{password}</p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
        alt="delete"
        className="delete-icon"
      />
    </li>
  )
}

export default User