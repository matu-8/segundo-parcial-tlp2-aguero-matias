import { useState } from "react"

export const useAuth = () => {
    const [errors, setErrors] = useState('');
    const register = async () => {
        setErrors('')
        try {
            const response = await fetch('http://localhost:3000/api', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                credentials:'include',
                body:JSON.stringify(userData)
            })
        } catch (error) {
            
        }
    }
  return (
    <div>useAuth</div>
  )
}
