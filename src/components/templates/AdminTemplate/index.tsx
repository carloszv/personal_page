/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useAuth } from 'contexts/auth/auth-context'
import PageLayout from 'components/foundations/PageLayout/PageLayout'

export default function Admin() {
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (auth === null) {
      router.push('/login')
    }
  }, [router, auth])

  if (auth === null) {
    return null
  }

  return <PageLayout navigation>Admin</PageLayout>
}
