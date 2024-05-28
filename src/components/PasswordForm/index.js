import React from 'react'

function PasswordForm({onSubmit, onChange, website, username, password}) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter Website"
        name="website"
        value={website}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Enter Username"
        name="username"
        value={username}
        onChange={onChange}
      />
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <button type="submit">Add Password</button>
    </form>
  )
}

export default PasswordForm
