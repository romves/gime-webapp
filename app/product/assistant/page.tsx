import FAQ from '@/components/FAQ'
import Value from '@/components/layouts/About/Value'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='h-screen w-full justify-center flex items-center'>AI Assistant</div>
      <Value />
      <FAQ />
    </>
  )
}

export default page