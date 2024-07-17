import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", location: "" });
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/create-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const jsonData = await response.json()
        console.log(jsonData)
        if (!jsonData.success) {
            alert("Enter Valid data");
        } else {
            navigate('/login');
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
                    <div className="mb-3">
                        <label for="" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name" value={credentials.name} onChange={onChange}
                            aria-describedby="helpId"
                            placeholder=""
                        />
                        <small id="helpId" className="form-text text-muted">Help text</small>
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email" value={credentials.email} onChange={onChange}
                            aria-describedby="emailHelpId"
                            placeholder="abc@mail.com" />
                        <small id="emailHelpId" className="form-text text-muted"
                        >Help text</small>
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            aria-describedby="helpId"
                            placeholder="" value={credentials.password} onChange={onChange}
                        />
                        <small id="helpId" className="form-text text-muted">Help text</small>
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            name="location"
                            id="location"
                            aria-describedby="helpId"
                            placeholder="" value={credentials.location} onChange={onChange}
                        />
                        <small id="helpId" className="form-text text-muted">Help text</small>
                    </div>
                    <button className='btn btn-success' type='submit'>Submit</button>
                    Already have account? Go to <Link to={"/login"}>login</Link>
                </form>
            </div>
        </>
    );
}

export default Signup;
