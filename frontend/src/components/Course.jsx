import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Cards from './Cards'
import axios from "axios"

const Course = () => {
  const [book, setBook] = useState([])

  useEffect(() => {
    const getBook = async () => {
      try {
      const res =  await axios.get("http://localhost:3000/book/get-book") 
      console.log(res.data)
      setBook(res.data.data) 
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[])
  return ( 
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-1'>
      <div className='mt-28 items-center justify-center text-center'>
       <h1 className='text-2xl md:text-4xl'>We delighted to have you <span className='text-pink-500'>here! :)</span></h1> 
       <p className='mt-12 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, perferendis ipsum ea rerum esse eaque. Doloribus, ipsam quas ratione sequi accusamus quibusdam, et dolorum animi ut velit omnis ducimus explicabo veniam id iusto, aliquam distinctio minus. Similique, temporibus facere vero cupiditate rerum ea? Cumque, rem! Libero iure et amet harum.</p>
       <Link to="/"><button className="btn btn-success mt-6 text-black">Back</button></Link>
      </div>
      <div className='mt-12 grid grid-col-1 md:grid-cols-3 items-center justify-center'>
       {book.map((item, idx) => {
        return <Cards item={item} key={idx}/> 
       })}
      </div>
    </div>
    </>
  )
}

export default Course
