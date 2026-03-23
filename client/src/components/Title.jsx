import React from 'react'

const Title = ({title,subTitle,align="center"}) => {
    const isLeft= align === "left";
  return (
    <div className={`flex flex-col justify-center  ${isLeft? "items-start text-left" : "items-center text-center"}`}>
      <h1 className='font-semibold text-4xl md:text-[40px]'>
        {title}
      </h1>
      <p className='text-sm md:text-base text-gray-500/90 mt-2'>{subTitle}</p>
    </div>
  )
}

export default Title
