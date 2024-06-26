"use client"
import React from 'react'
import { Button, Link } from '@nextui-org/react'

// Define the prop type for PrimaryButton
interface PrimaryButtonProps {
  text: string;
  url:string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, url }) => {
  return (
    <Button as={Link} className="w-[60vw] lg:w-[10vw] bg-gradient-to-r from-[#4b2e83] to-[#9d71f7] text-[12px]" href={url} variant="flat">
      {text}
    </Button>
  )
}
export default PrimaryButton;
