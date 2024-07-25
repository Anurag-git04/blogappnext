import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'
import React from 'react'

const SingleArticle = () => {
  return (
    <div className='flex flex-col gap-3 border border-gray-400 p-2'>
        <div className='cursor-pointer'>
            <Image
            src={"/img.png"}
            alt='blog-image'
            width={300}
            height={300}
            className='w-full'
            />
        </div>
        <div className='text-xl font-bold border-t border-b border-black py-2'>
            <h1>Title</h1>
        </div>
        <Button className='float-right my-2 ' variant={'secondary'}>
            Continue Reading<ArrowRight/>
        </Button>
    </div>
  )
}

export default SingleArticle