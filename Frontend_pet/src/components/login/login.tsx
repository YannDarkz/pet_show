import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("user", username, "pass", password);
        try {
           const response = await axios.post(`http://186.247.89.58:8080/api/user/loginUser${username}Pass${password}`)

           const userData = response.data
           console.log("usersDados", userData);
           localStorage.setItem("userData", JSON.stringify(userData));
           navigate("/userProfile");
           
            

        } catch (error) {
            console.error("Erro ao verificar login", error)
            setError("Erro ao tentar fazer o login. Tente Novamente.");
        }
    }

    // const user = response.data.find(
    //     (user: { username: string; password: string }) =>
    //         user.username === username && user.password === password
    // );

    // if(user){
    //     console.log("Login Bem-Sucedido",user);
    //     toast.success('Login Bem-Sucedido!', {
    //         draggable: true,
    //         closeOnClick: true,
    //     })
    // }else {
    //     // setError("Nome de usuário ou senha incorretos")
    //     toast.error('Nome de usuário ou senha incorretos.', {
    //         draggable: true,
    //         closeOnClick: true,
    //     })
    //     console.log("deu b.o");

    // }

    // const loginRequest = {
    //     username: username,
    //     password: password
    // }
    // console.log("Dados do Usuário", loginRequest);

    return (
        <form onSubmit={handleSubmit}>

            <h1>Login</h1>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button type="submit"> Entrar </button>
        </form>
    )
}

export default LoginForm