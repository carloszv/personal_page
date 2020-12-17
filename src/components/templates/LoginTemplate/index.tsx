/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { useRouter } from 'next/router'

import app from 'services/firebase/firebase'
import { useAuth } from 'contexts/auth/auth-context'

import PageLayout from 'components/foundations/PageLayout/PageLayout'

import {
  Inner,
  ErrorMessage,
  InputGroup,
  Input,
  ButtonGroupWrapper,
  LoginButton,
} from './styles'

export default function Login() {
  const auth = useAuth()
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (auth) {
      router.push('/admin')
    }
  }, [auth])

  const loginWitheEmail = async (e: any) => {
    e.preventDefault()
    const { user, password } = e.target.elements

    await app
      .auth()
      .signInWithEmailAndPassword(user.value, password.value)
      .then((_result: any) => {
        router.push('/admin')
      })
      .catch((error: any) => {
        setError(error.message)
      })
  }

  return (
    <PageLayout navigation>
      <Inner>
        <Form onSubmit={loginWitheEmail}>
          <h1>Login</h1>
          {error ? <ErrorMessage>{error}</ErrorMessage> : null}
          <InputGroup>
            <Input name="user" placeholder="Email" />
          </InputGroup>
          <InputGroup>
            <Input name="password" type="password" placeholder="Password" />
          </InputGroup>
          <ButtonGroupWrapper>
            <LoginButton type="submit">Login</LoginButton>
          </ButtonGroupWrapper>
        </Form>
      </Inner>
    </PageLayout>
  )
}
