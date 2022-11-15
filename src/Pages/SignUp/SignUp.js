import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const handleSignUp = (data) => {
        console.log(data)
    }
    return (
        <div className='h-[500px]  flex justify-center items-center '>
        <div className='w-96 p-7'>
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
        { required: 'Password is required', minLength: 
        {value: 6, message: 'You have to give at least 6 digits' },
        pattern: {value:/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/, message: 'Password must be strong'}
         })}  className="input input-bordered w-full max-w-xs"/>
        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
        
    </div>
  <input className='btn btn-accent w-full' value="Sign Up" type="submit" />
</form>
<p>Already have an account? <Link className='text-secondary' to='/login'>Please login</Link></p>
<div className='divider'>OR</div>
<button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default SignUp;