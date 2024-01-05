'use client'
import Container from '@/app/utils/Container'
import React from 'react'
import Nav from '../nav/Nav'
import { searchFetch } from '@/app/redux/features/searchSlice'
import {useDispatch} from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()
    searchFetch()
    return (
        <div>
            <Container>
                    <Nav/>
            </Container>
            <button onClick={() => dispatch(searchFetch())}>CLick</button>
        </div>
    )
}

export default Header