import React, {useState} from 'react'
import PasswordForm from '../PasswordForm'
import PasswordList from '../PasswordList'

function PasswordManager() {
  const [website, setWebsite] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwords, setPasswords] = useState([])

  const handleSubmit = event => {
    event.preventDefault()
    const newPassword = {
      id: new Date().getTime(),
      website,
      username,
      password,
      showPassword: false,
    }
    setPasswords(prevPasswords => [...prevPasswords, newPassword])
    setWebsite('')
    setUsername('')
    setPassword('')
  }

  const handleDelete = id => {
    setPasswords(prevPasswords =>
      prevPasswords.filter(password => password.id !== id),
    )
  }

  const handleChange = event => {
    const {name, value} = event.target
    if (name === 'website') {
      setWebsite(value)
    } else if (name === 'username') {
      setUsername(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  return (
    <div>
      <h1>Password Manager</h1>
      <PasswordForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        website={website}
        username={username}
        password={password}
      />
      <PasswordList passwords={passwords} onDelete={handleDelete} />
    </div>
  )
}

export default PasswordManager
