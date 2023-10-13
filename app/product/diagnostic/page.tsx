import FAQ from '@/components/FAQ'
import DiagnosticInfo from '@/components/layouts/Product/DiagnosticInfo'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='h-screen w-full justify-center flex items-center'>AI Diagnostic</div>
      <DiagnosticInfo />
      <FAQ variant='dark'/>
    </>
  )
}

export default page