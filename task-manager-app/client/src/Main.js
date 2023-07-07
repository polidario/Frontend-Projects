import { AuthContext } from "./context/AuthContext.ts";
import React, { useState } from 'react';
export default function Root({ children }) {
    const [user, setUser] = useState();

    return (
        <AuthContext.Provider value={{ user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
}