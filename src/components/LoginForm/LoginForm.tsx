"use client"
import {useContext, useEffect, useState} from "react"
import Button from "../Button/Button";
import { validateEmail } from "@/helper/validation";
import { validatePassword } from "@/helper/validation";
import { LoginForm as Data } from "../../../interfaces/forms";
import { loginService } from "@/services/authServices";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/contexts/authContext";

const LoginForm = () => {
    const {setUser} = useContext(AuthContext)

    const router = useRouter()
    const initialData: Data = {email: "", password: ""}
    const initialDirty = {email: "false", password: "false"}

    
    const [data, setData] = useState(initialData)
    const [errors,setErrors] = useState(initialData)
    const [dirty,setDirty] = useState(initialDirty)


    const handleSubmit = async() => {        
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

        
        try {
            const response = await loginService(`${apiUrl}/users/login`, data);           
            if (response.login) {
                alert("Login exitoso");
                setUser(response);
                router.back();
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        } catch (error) {
            console.error("Error durante la solicitud de login:", error); 
        }
    };
    
      
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        setData({...data, [e.target.name]:e.target.value});    
       
    };
    const handleBlur = (e: React.FocusEvent<HTMLInputElement> ) => {        
        setDirty({...dirty, [e.target.name]: "true"});
    };
     

    useEffect(() =>{
        setErrors({
            email: validateEmail(data.email),
            password: validatePassword(data.password),
        });

    }, [data]);

        return (

        <form 
        className="flex flex-col w-1/4 mx-auto pt-8 gap-4">
        <label htmlFor="email">Email</label>
        <input 
        type="email" 
        id="email" 
        name="email" 
        value={data.email} 
        placeholder="mail@mail.com"   
        onChange={handleChange} 
        onBlur={handleBlur}      
        />
        {dirty.email?
        <p className="text-red-700">{errors.email}</p>: null}       
        <label htmlFor="password">Password</label>
        <input 
        type="password" 
        id="password" 
        name="password" 
        value={data.password} 
        placeholder="At least 8 characters"
        onChange={handleChange}
        onBlur={handleBlur}          
        />
        {dirty.password?(
        <p className="text-red-700">{errors.password}</p>): null}
        <Button variant="Sixth" onClick={handleSubmit}>Login</Button> 
        </form> 
    
    );
  
};

export default LoginForm;