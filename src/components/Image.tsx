import React from 'react'
import Image from 'next/image'

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const CustomImage = ({ src, alt, width = 500, height = 300, className }: CustomImageProps) => {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  )
}

export default CustomImage 