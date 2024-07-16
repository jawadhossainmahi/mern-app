import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/login-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        if (!response.status == 200) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const jsonData = await response.json()
        console.log(jsonData)
        if (!jsonData.success) {
            alert("Enter Valid data");
        }
        if (jsonData.success) {
            navigate('/')
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
        console.log(credentials)
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>

                    <div class="mb-3">
                        <label for="" class="form-label">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            name="email"
                            id="email" value={credentials.email} onChange={onChange}
                            aria-describedby="emailHelpId"
                            placeholder="abc@mail.com" />
                        <small id="emailHelpId" class="form-text text-muted"
                        >Help text</small>
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            name="password"
                            id="password"
                            aria-describedby="helpId"
                            placeholder="" value={credentials.password} onChange={onChange}
                        />
                        <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>

                    <button className='btn btn-success' type='submit'>Submit</button>
                    Don't have account? Go to <Link to={"/signup"}>Signup</Link>
                </form>
            </div>
        </>
    );
}

export default Login;
