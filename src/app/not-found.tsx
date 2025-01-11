import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: "Page Not Found"
}

const NotFound = () => {
  return (
    <>
      <Header />
      <div className='px-2 w-full animate-appear'>
          <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4 mt-10">
            <h2 className="text-2xl">Oops! Page Not Found</h2>
            <Image
              className="m-0 rounded-xl"
              src="/images/404.png"
              width={500}
              height={500}
              sizes='500px'
              alt='Page Not Found'
              placeholder='blur'
              blurDataURL='/images/blurred_404_image.png'
              priority={false}
              title='Page Not Found'
              loading={false ? "eager" : "lazy"}
            />
          </div>
      </div>
    </>
  )
}

export default NotFound