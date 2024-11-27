"use client"
import { useEffect, useState } from 'react'
import './style.css'
import { Users } from '@/utils/users';
export default function Page() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        console.log(Users)
        let data:any = Users;
        setUsers(data)
    },[users])
    
    const submit = async (event: any) => {
        event.preventDefault()
        if (!password || !confirmPassword || !name || !email) {
            window.alert("all fields are requred")
        }
        if (password !== confirmPassword) {
            window.alert("Password does not match")
            return;

        }
        await fetch('http://localhost:3000/dev/apis/postApi', {
            method: 'POST',
            body: JSON.stringify({
                Name: name,
                Email: email,
                Password: password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                console.log(response)
                if(response.status === 201){
                    return response.json()
                }else{
                    return null;
                }
            })
            .then((json) => {
                if(json != null){
                    setUsers(json)
                }
            })
            .catch((err)=>console.log(err))

    }
    return (<div>
        <h1>This Is The Add Users Details Page.</h1>
        <div className="wrapper">
            <div className="login-box">
                <h3 className="info-text">User Registration</h3>
                <form className="form-container" action="">
                    <div className="input-addon">
                        <input className="form-element input-field" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" type="text" />

                    </div>
                    <div className="input-addon">
                        <input className="form-element input-field" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
                    </div>
                    <div className="input-addon">
                        <input className="form-element input-field" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />

                    </div>
                    <div className="input-addon">
                        <input className="form-element input-field" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Re-type password" type="password" />

                    </div>
                    <button className="form-element is-submit" value="Create User" onClick={() => submit(event)} >Submit</button>
                </form>
                <p>Or if you already have an user <a href="#">login here.</a></p>
            </div>
        </div>
        <div>
            <h3 className="info-text">User Lists</h3>
            {users.length ?
                users.map((user: any) => (<div key={user.userId}>
                    <p>User ID:{user.userId}, User Name : {user.Name}, User Email: {user.Email}</p>
                </div>))
                : null}
        </div>
    </div>
    )
}