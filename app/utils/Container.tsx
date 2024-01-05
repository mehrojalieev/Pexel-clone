import React from 'react'
import { Children } from '../types'

const Container = ({children}: Children) => {
  return (
    <div className='container'>{children}</div>
  )
}

export default Container