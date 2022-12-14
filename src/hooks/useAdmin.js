import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(()=> {
        if(email){
            fetch(`https://doctors-portal-server-two-roan.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsAmin(data.isAdmin);
                setIsAdminLoading(false)
            })
        }
    },[email])
    return [isAdmin, isAdminLoading]
}

export default useAdmin;