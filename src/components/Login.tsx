import type { Dispatch, SetStateAction } from "react";   

interface LoginProps {
    setIsLogged: Dispatch<SetStateAction<boolean>>
}

export default function Login ({setIsLogged} : LoginProps) {
    
    const handleLogin = () => {
        setIsLogged(true);
    }

    return (
        <div className="text-center ">
            <h2 className="text-center ">
                Log in to access the team page
            </h2>
            <input className="mx-5 bg-blue-500" type="text" />
            <button onClick={handleLogin} className="rounded-full text-white px-5 py-5 bg-blue-500 transition delay-75 duration-300 ease-in-out hover:bg-blue-400 ">
                Log in 
            </button>
        </div>
    );
} 