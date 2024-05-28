function PasswordItem({password, onDelete}) {
    return (
      <li>
        <div>{password.website}</div>
        <div>{password.username}</div>
        <div>{password.showPassword ? password.password : '********'}</div>
        <button onClick={() => onDelete(password.id)} data-testid="delete">
          Delete
        </button>
      </li>
    )
  }
  
  export default PasswordItem
  