import FAQ from '@/components/FAQ'
import DiagnosticInfo from '@/components/layouts/Product/DiagnosticInfo'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="px-1 py-24 lg:py-32 font-grotesk text-[16vw] w-full justify-center flex flex-col items-center leading-[.9]">
        <span className="text-stroke">AI Diagnostic</span>
        <span>AI Diagnostic</span>
        <span className="text-stroke">AI Diagnostic</span>
      </div>
      <DiagnosticInfo />
      <FAQ variant='dark'/>
    </>
  )
}

export default page