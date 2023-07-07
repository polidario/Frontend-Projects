import React, { useEffect, useContext, useState } from 'react';
import Auth from "../components/Auth";
import Navigation from '../components/Navigation';
import { getUserDetails, updateUserDetails } from "../services/userApi";
import { AuthContext } from '../context/AuthContext.ts';
import { useAuth } from '../hooks/useAuth.ts';

export default function Profile() {
    const { user } = useAuth();
    const context = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(true);
    const [userDetails, setUserDetails] = useState(null);

    // User details for updating
    const [data, setData] = useState({
        email: userDetails?.email,
        first_name: userDetails?.first_name,
        last_name: userDetails?.last_name,
        date_of_birth: userDetails?.date_of_birth || new Date().toISOString().slice(0, 10)
    });

    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            updateUserDetails(
                user.username, 
                data.email, 
                data.first_name, 
                data.last_name, 
                data.date_of_birth)
            .then(() => {
                fetchUserDetails();
            });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if(user) {
            fetchUserDetails();
            setIsLoading(false);
        }
    }, [user]);

    const fetchUserDetails = async () => {
        await getUserDetails(user.username).then((res) => {
            setUserDetails(res);
            setData({
                email: res.email,
                first_name: res.first_name,
                last_name: res.last_name,
                date_of_birth: res.date_of_birth
            });
            setIsLoading(false);
        });
    };
    if(isLoading) return (<div>Loading...</div>);
    return (
            <>
                <div className='main'>
                    <div className='gradient'/>
                </div>

                {!user ? <Auth /> : (
                    <main className="app">
                        <Navigation />

                        <div className="flex flex-col gap-5 w-full md:w-1/2">
                            <h2 className="text-xl md:text-3xl font-bold pb-5 border-dotted border-gray-700 border-b-2 text-center">Hello, {user.username} 👋</h2>
                            
                            <form onSubmit={(e) => {handleSubmit(e)}} className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="username" className="text-gray-500">Username</label>
                                    <input type="text" name="username" id="username" className="border border-gray-500 rounded-md p-2" value={user.username} disabled/>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="first_name" className="text-gray-500">First Name</label>
                                    <input 
                                        onChange={(e) => handleChange(e)}
                                        type="text" 
                                        name="first_name" id="first_name" 
                                        className="border border-gray-500 rounded-md p-2" 
                                        value={data.first_name} />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="last_name" className="text-gray-500">Last Name</label>
                                    <input 
                                        onChange={(e) => handleChange(e)}
                                        type="text" 
                                        name="last_name" id="last_name" 
                                        className="border border-gray-500 rounded-md p-2" 
                                        value={data.last_name} />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-gray-500">Email</label>
                                    <input 
                                        onChange={(e) => handleChange(e)}
                                        type="email" 
                                        name="email" id="email" 
                                        className="border border-gray-500 rounded-md p-2" 
                                        value={data.email} />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="date_of_birth" className="text-gray-500">Date of Birth</label>
                                    <input 
                                        onChange={(e) => handleChange(e)}
                                        type="date" 
                                        name="date_of_birth" id="date_of_birth" 
                                        className="border border-gray-500 rounded-md p-2" 
                                        value={new Date(data.date_of_birth).toISOString().split('T')[0]} />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <button type="submit" className="button button-primary">Update</button>
                                </div>
                            </form>
                        </div>
                    </main>
                )}
                
            </>
    );
}