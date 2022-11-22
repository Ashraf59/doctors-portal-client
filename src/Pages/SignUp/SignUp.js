import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const {createUser, updateUser} = useContext(AuthContext);

    const {register, handleSubmit, formState: { errors }} = useForm();

    const [signOutError, setSignOutError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/')
    }

    const handleSignUp = (data) => {
        console.log(data);
        setSignOutError('');
        createUser(data.email, data.password)
        .then( result => {
            const user = result.user;
            console.log(user)
            const userInfo = {
                displayName: data.name 
            }
            updateUser (userInfo)

            .then(() => {
                console.log(data.name, data.email);
                saveUser(data.name, data.email);
                
            })
            .catch(error => console.log(error))
        })
        .catch(error => {
            console.error(error.message)
            setSignOutError(error.message)
        })
        
    }

    const saveUser = (name, email) => {
        const user = {name, email}
        fetch('https://doctors-portal-server-two-roan.vercel.app/users', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            setCreatedUserEmail(email)

        })
    }

    
    return (
        <div className='h-[500px]  flex justify-center items-center '>
        <div className='w-96 p-7 shadow shadow-slate-500 mt-10 rounded-lg'>
            <h2 className='text-4xl text-center'>Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
  
    <div className="form-control w-full max-w-xs">
        <label className="label"><span className="label-text">Name</span></label>
        <input type="text" {...register("name")}  className="input input-bordered w-full max-w-xs"/>
    </div>
    <div className="form-control w-full max-w-xs">
        <label className="label"><span className="label-text">Email</span></label>
        <input type="email" {...register("email", { required: true })}  className="input input-bordered w-full max-w-xs"/>
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
    </div>
    <div className="form-control w-full max-w-xs">
        <label className="label"><span className="label-text">Password</span></label>
        <input type="password" 
        {...register("password", 
        { required: 'Password is required',
         minLength: {value: 6, message: 'You have to give at least 6 digits' },
        pattern: {value:/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/, message: 'Password must be strong'}
         })}  className="input input-bordered w-full max-w-xs"/>
        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
        
    </div>
  <input className='btn btn-accent w-full my-4' value="Sign Up" type="submit" />
  <div>
    {signOutError && <p className='text-red-600'>{signOutError}</p>}
  </div>
</form>
<p>Already have an account? <Link className='text-secondary' to='/login'>Please login</Link></p>
<div className='divider'>OR</div>
<button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default SignUp;