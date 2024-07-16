import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", location: "" });
    const handleSubmit = async (e) => {
        e.preventDefault()
        const resposone = await fetch("http://localhost:5000/api/create-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })
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
                        <label for="" class="form-label">Name</label>
                        <input
                            type="text"
                            class="form-control"
                            name="name"
                            id="name" value={credentials.name} onChange={onChange}
                            aria-describedby="helpId"
                            placeholder=""
                        />
                        <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
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
                    <div class="mb-3">
                        <label for="" class="form-label">Address</label>
                        <input
                            type="text"
                            class="form-control"
                            name="location"
                            id="location"
                            aria-describedby="helpId"
                            placeholder="" value={credentials.location} onChange={onChange}
                        />
                        <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                    <button className='btn btn-success' type='submit'>Submit</button>
                    Already have account? Go to <Link to={"/login"}>login</Link>
                </form>
            </div>
        </>
    );
}

export default Signup;
