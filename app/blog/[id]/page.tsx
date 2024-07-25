import React from 'react'
import Image from 'next/image'

const SingleArticle = ({params}:any) => {
    const blogId = params.id
  return (
    <div className='w-full border-b nb-5'>
        <div className='md:w-[50%] w-full m-auto'>
            <Image
            src={"/img.png"}
            alt='blog-image'
            width={500}
            height={500}
            className='w-full object-contain my-5'
            />
            <h1>Title {blogId}</h1>
            <br />
            <div className='my-5'>
                <p className='m-0'>Html Content ayege</p>
            </div>
        </div>

    </div>
  )
}

export default SingleArticle