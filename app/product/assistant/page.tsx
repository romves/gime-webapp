import FAQ from '@/components/FAQ'
import AssistantInfo from '@/components/layouts/Product/AssistantInfo'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='h-screen w-full justify-center flex items-center'>AI Assistant</div>
      <AssistantInfo />
      <FAQ variant='primary'/>
    </>
  )
}

export default page