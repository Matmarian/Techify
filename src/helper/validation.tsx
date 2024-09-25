export const validateEmail = (email:string) => {
    let validation = "";
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) validation="Nust be a valid email"
    return validation;
    };


export const validatePassword = (password: string) => {
    let validation = "";
    const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regexPassword.test(password))
    validation = "Password must be at least 8 characters, contain an uppercase letter, a lowercase letter, a number, and a special character.";
    return validation;
    };


export const validateAddress = (address: string) => {
    let validation = "";
    const regexAddress = /.{8}/;
    if (!regexAddress.test(address))
    validation = "Must be at least 8 characters.";
    return validation;
    };

export const validatePhone = (phone: string) => {
    let validation = "";
    const regexPhone = /.{10}/;
    if (!regexPhone.test(phone))
    validation = "Must be at least 10 characters.";
    return validation;
    };

    export const validateName = (name: any ) => {
        let validation = "";
        const regexName = /.{8}/;    
        if (!regexName.test(name)) {
          validation = "Must be at least 8 characters.";
        }
      
        return validation;
      };
      