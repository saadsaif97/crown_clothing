import React, { useState } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from './../form-input/form-input.component'

import './siginin.styles.scss'

const Sigin = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    setForm(() => ({
      email: '',
      password: '',
    }))
  }

  const handleChange = (e) => {
    const name = e.currentTarget.name
    const value = e.currentTarget.value

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='signin-form'>
      <h1>I already have an account</h1>
      <h3>Signin using email and password</h3>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          label='Email'
          value={form.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='password'
          label='Password'
          value={form.password}
          handleChange={handleChange}
          required
        />
        <CustomButton type='submit'> Sigin in </CustomButton>
      </form>
    </div>
  )
}

export default Sigin
