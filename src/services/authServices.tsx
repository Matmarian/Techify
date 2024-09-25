import { LoginForm, RegisterForm } from "../../interfaces/forms";

export const loginService = async(url: string, data: LoginForm) => {
    try {
     
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        });
        
        if (!response.ok) {
            throw new Error(`Failed to login: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        console.log("Respuesta del servidor:", json); 

        return json;
    } catch (error) {
        console.error("Error en loginService:", error); 
        throw error;
    }
};

export const registerService = async(url:string, data: RegisterForm ) => { 

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
    },    
    body: JSON.stringify(data),   
    });  
    const json = await response.json();

    return json;
}






