'use client'

import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='login'>
        <section>
            <form>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='password' />
                <button type='submit'>Sign Up</button>
                <p>OR</p>
                <Link href='/login'>Log In</Link>
            </form>
        </section>
    </div>
  )
}

export default page