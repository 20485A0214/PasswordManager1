import PasswordItem from './components/PasswordItem'

function PasswordList({passwords, onDelete}) {
  return (
    <ul>
      {passwords.map(password => (
        <PasswordItem
          key={password.id}
          password={password}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default PasswordList
