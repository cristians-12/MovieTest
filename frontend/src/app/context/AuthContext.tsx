'use client'

import { createContext, useContext, useEffect, useState } from "react"
import Cookies from 'js-cookie'
import useToast from "../hooks/toast/useToast";
import { AuthContextType, User } from "@/types/user/user.type";

const AuthContext = createContext<AuthContextType | undefined>(undefined);



export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('Debes usar el useMovieContext dentro del proveedor')
    }
    return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<number[]>([]);
    const [id, setId] = useState<string>('');
    const [user, setUser] = useState<User | undefined>();
    const [isAuthenticated, setisAuthenticated] = useState<boolean>(false);
    const { success, errorToast } = useToast();

    const logOut = () => {
        Cookies.remove('Authentification');
        localStorage.removeItem('user');
        setisAuthenticated(false);
        setUser(undefined);
    }

    const checkOutUser = async () => {
        const storedUser = localStorage.getItem('user');

        if (!storedUser) {
            console.log("No user found in local storage");
            return;
        }
        let parsedUser: User;
        try {
            parsedUser = JSON.parse(storedUser);
        } catch (error) {
            console.error("Error parsing user from localStorage", error);
            return;
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/users/${parsedUser?._id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (!response.ok) {
                errorToast()
                throw new Error('Bad response');
            }
            const data = await response.json();
            setUser(data)
            localStorage.setItem('user', JSON.stringify(data));
        } catch (error) {
            console.error(error);
        }
    }

    const loginUser = async (email: string, pass: string) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    email: email,
                    password: pass,
                }),
            });

            if (!response.ok) {
                errorToast()
                throw new Error('Bad response');
            }
            const data = await response.json();
            setUser(data)
            console.log(data)
            localStorage.setItem('user', JSON.stringify(data));
            success()
        } catch (error) {
            console.error(error);
        }

        setisAuthenticated(true);
    };

    useEffect(() => {
        function checkLogin() {
            const cookies = Cookies.get();
            const storedUser = localStorage.getItem('user');
            console.log('storage:' + storedUser)
            if (cookies.Authentification && storedUser) {
                try {
                    setisAuthenticated(true);
                    const parsedUser = JSON.parse(storedUser);
                    setUser(parsedUser);
                } catch (error) {
                    console.log(error);
                    setisAuthenticated(false);
                }
            } else {
                console.log("No authentication cookie found");
            }
        }
        checkOutUser();
        checkLogin();
    }, []);


    return (
        <AuthContext.Provider value={{ favorites, setFavorites, id, setId, user, setUser, isAuthenticated, logOut, loginUser, checkOutUser }}>
            {children}
        </AuthContext.Provider>
    );
};