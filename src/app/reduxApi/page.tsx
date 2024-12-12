"use client"
import { useDispatch, useSelector } from 'react-redux'
import { apiUsers } from '../redux/usersSclice'
import { useEffect } from 'react';

const ReduxApi = () => {
    const usersLists = useSelector((data: any) => data.usersListData.usersList);
    console.log(usersLists)
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(apiUsers()) 
    },[])
    return (
        <div>
            <h1>These users List from API, i am using the redux to call the API</h1>
            <button onClick={() => { dispatch(apiUsers()) }}>Load Users List</button>


            <br /><br /><br />
            {usersLists.length ? <>
            <ul> <h3>List got fetched from API</h3>
                {usersLists.map((user:any)=>(<li key={user.id}><p>{user.name}</p><p>{user.username}</p><p>{user.email}</p><p>{user.website}</p></li>))}
            </ul>
            </>:null}
        </div>
    )
}

export default ReduxApi
