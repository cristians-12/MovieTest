import { useAuthContext } from "@/app/context/AuthContext";
import { useState } from "react";
import useToast from "../toast/useToast";

const useRegister = () => {
    const [pass, setPass] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [confirmPass, setConfirmPass] = useState<string>('');
    const [passMatch, setPassMatch] = useState<boolean>(false);

    const { loginUser } = useAuthContext();
    const { successRegister, errorToast } = useToast();

    const handlePass: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setPass(e.target.value);
    };

    const handleEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setEmail(e.target.value);
    };

    const handleConfirmPass: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setConfirmPass(e.target.value);
    };

    const handlePassMatch = async () => {
        if (pass !== confirmPass) {
            setPassMatch(true);
        } else {
            setPassMatch(false);
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/users`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({
                        email: email,
                        password: pass,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Server response wasnt ok');

                }
                const data = await response.json();
                console.log(data);
                if (data.success === true) {
                    successRegister()
                } else {
                    errorToast()
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleLogin = async () => {
        loginUser(email,pass)
    }

    

    return {
        handlePass,
        handleEmail,
        email,
        pass,
        confirmPass,
        handleConfirmPass,
        passMatch,
        handlePassMatch,
        handleLogin
    };
};

export default useRegister;
