'use client'
import { useAuthContext } from "@/app/context/AuthContext"

export default function Profile() {

    const {user} = useAuthContext()

    return (
        <div className="mt-20">
            <h3>Bienvenido {user?._id}</h3>
        </div>
    )
}