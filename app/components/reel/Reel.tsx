    "use client"
import React from 'react'
import { RootState } from '@/app/redux/store/store'
import {useSelector} from 'react-redux'
const Reel = () => {
    const data = useSelector((state: RootState) => state.search)
    console.log(data);
    
  return (
    <div>Reel</div>
  )
}

export default Reel