import Link from 'next/link'
import React from 'react'
import SingleArticle from './SingleArticle'

const Article = () => {
  return (
    <div className='flex flex-col gap-4 mx-auto max-w-6xl my-10'>
        <span className='font-bold underline my-5'>Recent Article</span>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                [1,2].map((blog:any, index:number)=> <Link href={`/blog/${index}`}><SingleArticle/></Link>)
            }
        </div>
    </div>
  )
}

export default Article