import React, { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/ContextProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const cPassword = form.cPassword.value

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(e => console.log(e))


        console.log(name, email, password, cPassword)
    }



    return (
        <div className="flex justify-center items-center w-[30%] mx-auto h-screen">
            <form onSubmit={handleRegister} className="card-body bg-base-200 shadow-xl rounded-lg" >
                <h3 className='text-center text-3xl font-semi capitalize pb-3'>register now</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter Name</span>
                    </label>
                    <input name="name" type="text" placeholder="Name" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="text" placeholder="email" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="Password" placeholder="Password" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input name="cPassword" type="Password" placeholder="Confirm Password" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Register;