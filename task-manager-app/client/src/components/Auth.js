import React, { useState } from 'react';
import { userLogin, userRegister } from '../services/userApi';

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState(null);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const switchView = (status) => {
        setUsername("");
        setPassword("");
        setPasswordConfirm("");
        setIsLogin(status);
        setError(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            if(isLogin) {
                userLogin(username, password).then((res) => {
                    if (res.status === 200) {
                        setError(null);
                        window.location.reload();
                    }
                });
            } else {
                if(password === passwordConfirm) {
                    userRegister(username, password).then((res) => {
                        if (res.status === 200) {
                            console.log(res);
                        }
                    });
                    
                    setError(null);
                } else {
                    setError("Passwords do not match");
                }
            }
        } catch(error) {
            setError(error.response.data.message);
        }

    }
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>{isLogin ? "Login to your account" : "Create an account"}</h2>
            </div>
            
            {
                error && (
                    <div class="sm:mx-auto sm:w-full sm:max-w-sm mt-5 bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md" role="alert">
                        <div class="flex">
                            <div class="py-1"><svg class="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                            <div>
                                <p class="font-bold">Oh uh!</p>
                                <p class="text-sm">{error}</p>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form onSubmit={handleSubmit}
                    className='space-y-6'
                    method='POST'
                    >
                    <div className="form-control">
                        <label 
                            htmlFor="username"
                            className='block text-sm font-medium leading-6 text-gray-900'
                        >Username</label>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            type="text"
                            id="username"
                            name="username"
                            className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label 
                            htmlFor="username"
                            className='block text-sm font-medium leading-6 text-gray-900'
                        >Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            id="password"
                            name="password"
                            className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            required
                        />
                    </div>

                    {!isLogin && (
                        <div className="form-control">
                            <label 
                                htmlFor="confirmPassword"
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >Confirm Password</label>
                            <input
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                                value={passwordConfirm}
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                        
                    )}

                    {isLogin && (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    name="remember_me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                        </div>
                    )}

                    <div>
                        <button type="submit" className="button button-primary w-full m-0">{isLogin ? "Login" : "Create account"}</button>
                    </div>
                </form>


                <div className="flex items-center justify-center mt-5">
                    <div className="text-sm">
                        <button
                            onClick={() => switchView(!isLogin)}
                            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                        >
                            {isLogin ? "Create an account" : "Login to your account"}   
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}