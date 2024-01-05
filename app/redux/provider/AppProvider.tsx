"use client"
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { Children } from '@/app/types'

const AppProvider = ({children}: Children) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default AppProvider