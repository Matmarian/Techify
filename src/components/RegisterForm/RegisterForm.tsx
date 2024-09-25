"use client"
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { validateAddress, validateEmail, validateName, validatePassword, validatePhone } from "@/helper/validation";
import { RegisterForm as Data } from "../../../interfaces/forms";
import { registerService } from "@/services/authServices";
import router from "next/router";

const RegisterForm = () => {
  const initialData: Data = { email: "", password: "", address: "", phone: "", name: "" };
  const initialDirty = { email: "false", password: "false", address: "false", phone: "false", name: "false" };

  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);
  const [dirty, setDirty] = useState(initialDirty);

  const handleSubmit = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await registerService(apiUrl + "/users/register", data);

    if (!response.message) {
      alert("You are Registered!");
      router.back();
    } else {
      alert(response.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setDirty({ ...dirty, [e.target.name]: "true" });
  };

  useEffect(() => {
    setErrors({
      email: validateEmail(data.email),
      password: validatePassword(data.password),
      address: validateAddress(data.address),
      phone: validatePhone(data.phone),
      name: validateName(data.name),
    });
  }, [data]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-[400px] mx-auto pt-8 gap-4">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={data.email}
        placeholder="mail@mail.com"
        onChange={handleChange}
        onBlur={handleBlur}
        className="p-2 border rounded-md"
      />
      {dirty.email ? <p className="text-red-700">{errors.email}</p> : null}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={data.password}
        placeholder="At least 8 characters"
        onChange={handleChange}
        onBlur={handleBlur}
        className="p-2 border rounded-md"
      />
      {dirty.password ? <p className="text-red-700">{errors.password}</p> : null}

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={data.name}
        placeholder="Your name"
        onChange={handleChange}
        onBlur={handleBlur}
        className="p-2 border rounded-md"
      />
      {dirty.name ? <p className="text-red-700">{errors.name}</p> : null}

      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        name="address"
        value={data.address}
        placeholder="Your address"
        onChange={handleChange}
        onBlur={handleBlur}
        className="p-2 border rounded-md"
      />
      {dirty.address ? <p className="text-red-700">{errors.address}</p> : null}

      <label htmlFor="phone">Phone</label>
      <input
        type="phone"
        id="phone"
        name="phone"
        value={data.phone}
        placeholder="At least 10 characters"
        onChange={handleChange}
        onBlur={handleBlur}
        className="p-2 border rounded-md"
      />
      {dirty.phone ? <p className="text-red-700">{errors.phone}</p> : null}

      <Button variant="Sixth">Register</Button>
    </form>
  );
};

export default RegisterForm;
