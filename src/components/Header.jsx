import React from 'react'
import { FileText } from 'lucide-react';


function Header() {
  return (
    <div className='bg-gradient-to-r from-purple-700 to-purple-900 text-white flex text-center text-lg py-2 items-center justify-center gap-1 '>
      <FileText size={16}></FileText>
      My Blogs
    </div>
  )
}

export default Header
