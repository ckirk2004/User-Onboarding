import React, { useState } from 'react';

export default function Form(){

    const [formState, setFormState] = useState({
        name:'',
        email: '',
        password: '',
        terms: '',
    });

    const formSubmit = e=> {
        e.preventDefault();
        console.log('Form Submitted!');
    };

    const inputChange = e => {
        console.log('input changed', e.target.name);
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={formSubmit}>
            <label htmlFor='name'>
                Name
                <input 
                type='text' 
                name='name' 
                id='name' 
                placeholder='Type your name here.' 
                value={formState.name} 
                onChange={inputChange} />
            </label>

            <label htmlFor='email'>
                Email
                <input 
                type='email' 
                name='email' 
                id='email'
                placeholder='Type your email here.' 
                value={formState.email} 
                onChange={inputChange} />
            </label>

            <label htmlFor='password'>
                Password
                <input 
                type='text' 
                name='password' 
                id='password'
                placeholder='Type your password here.' 
                value={formState.password} 
                onChange={inputChange} />
            </label>



            <button>Submit</button>


        </form>
    )

    
}