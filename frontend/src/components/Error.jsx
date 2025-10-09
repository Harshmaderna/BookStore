import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    console.log(error)
  return (
    <div className='p-10 flex justify-center flex-col text-red-700 mt-20 text-3xl items-center'>
      <h1>Opps!!!</h1>
      <h3>someting went wrong</h3>
      <h3>{error.status} {error.error.message}</h3>
    </div>
  )
}

export default Error
