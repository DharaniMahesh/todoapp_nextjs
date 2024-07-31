'use client'

import React from 'react'

export const Form = () => {
  return (
    <div className='login'>
        <section>
            <form>
                <input type="text" placeholder='Task Title' />
                <input type="text" placeholder='Task Description' />
                <button type='submit'>Add Task</button>
            </form>
        </section>
    </div>
  )
}

export default Form;
