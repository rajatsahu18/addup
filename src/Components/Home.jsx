/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUserData } from '../Redux/auth/action'
import { TodoList } from './TodoList'
import About from './About';
import Sidebar from './../Routes/Sidebar';


const Home = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth.auth)
    const token = useSelector(state => state.auth.token)
    const username = useSelector(state => state.auth.username)
    useEffect(() => {
        dispatch(getUserData(username, token))
    }, [dispatch])

    return (
        !auth ?
        <div>
            <About/>
        </div> : 
        <div>
            <TodoList/>
            <Sidebar/>
        </div>
    )
}

export default Home
