import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodo, updateTodo, deleteTodo } from '../Redux/app/action'
import "./Styling/TodoList.css"
import CircularProgress from '@material-ui/core/CircularProgress';
import { Card } from './Card';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';
import { Login } from './Login';
import Sidebar from './../Routes/Sidebar';


const Personal = () => {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.app.todo)
    const isError = useSelector(state => state.app.isError);
    const isLoading = useSelector(state => state.app.isLoading);
    const auth = useSelector(state => state.auth.auth)

    useEffect(() => {
        dispatch(getTodo())
    }, [dispatch])
    const history = useHistory();

    const statusHandler = (id) => {
        const temp = [...todo];
        const updated = temp.find(item => item.id === id);
        updated.status = !updated.status
        dispatch(updateTodo(updated.status, id))
    }

    const deleteHandler = (id) => {
        dispatch(deleteTodo(id))
    }

    const moveToCreate = () => {
        history.push("/create")
    }

    const temp = [...todo];
    const personal = temp.filter(item => item.personal).length;
    
    return (
        !auth ?
        <div>
            <Login/>
        </div> :
        isLoading?<div style={{marginTop:'250px'}}>< CircularProgress color = "secondary" /></div > : 
        isError ? <div>Something went wrong.</div> :
        (personal === 0) ? <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column',
        alignItems: 'center', background: '#252525', height: "93vh"
            }}>
                <h2 style={{color:'orangeRed'}}>Oops! There is nothing here.</h2>
                <img src="./sad_bg.png" alt=""/>
        </div> :    
        
        (<div className="dashboard">
            <div className="mainCard">
                <div className="heading1">TODO</div>
                {todo?.filter(item=>item.todo === "todo" && item.personal).map((item)=>(
                    <Card {...item} deleteHandler={deleteHandler}
                        statusHandler={statusHandler}
                    />
                ))}
            </div>
            <Sidebar/>
            <div className="mainCard">
                <div className="heading2">IN PROGRESS</div>
                {todo?.filter(item=>item.todo === "inProcess" && item.personal).map((item)=>(
                    <Card {...item} deleteHandler={deleteHandler}
                    statusHandler={statusHandler}/>
                ))}
            </div>
            
            <div className="mainCard">
                <div className="heading3">DONE</div>
                {todo?.filter(item=>item.todo === "done" && item.personal).map((item)=>(
                    <Card {...item} deleteHandler={deleteHandler}
                    statusHandler={statusHandler}/>
                ))}
            </div>
            <div className="addBtn">
                <Fab color="primary" aria-label="add" onClick={moveToCreate}>
                    <AddIcon />
                </Fab>
            </div>
        </div>)
    )
}
export { Personal }



