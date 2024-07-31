import React from 'react'
import Form from './addTodoForm'
import { TodoItem } from '@/components/ServerComponents'

const page = () => {
  console.log("testing 123343544343")
  return (
    <div className='container'>
      <Form/>
      <section className='todosContainer'>s
        <TodoItem title={"Sample Task"} description={"qwertyuiopasdfghjkfkfsfaldfkjlskdajflasdfj;lsdfjlfjadladj"} id={"123"} completed={false}/>
      </section>
    </div>
    
  )
}

export default page