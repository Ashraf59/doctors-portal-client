import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../../Pages/Home/Home/Shared/Loading/Loading';

const AddDoctor = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const {data: specialities, isLoading} = useQuery({
        queryKey: ['speciality'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpeciality')
            const data = await res.json();
            return data
        }
    })

    const handleAddDoctor = data => {
        console.log(data);
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7 shadow shadow-slate-500 mt-10 rounded-lg mx-auto'>
            <h2 className="text-4xl text-center">Add a Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
  
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
      <label className="label"><span className="label-text">Speciality</span></label>
      <select className="select select-bordered w-full max-w-xs">
            {
                specialities.map(speciality => <option
                key = {speciality._id}
                value = {speciality.name}
                
                >{speciality.name}</option>)
            }
            
      </select>
  </div>
<input className='btn btn-accent w-full my-4' value="Add Doctor" type="submit" />
<div>
</div>
</form>
        </div>
    );
};

export default AddDoctor;