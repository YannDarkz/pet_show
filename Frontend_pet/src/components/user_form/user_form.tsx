import React from 'react'; 
import { useState } from "react"


interface CadastroFormProps {
    onNext: (data: { username: string; age: number; password: string }) => void
}

const UserForm: React.FC<CadastroFormProps> = ({ onNext }) => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password != confirmPassword) {
            alert("Senhas não conferem");
            return;
        }
        onNext({ username: username, age: Number(age), password: password })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Cadastro</h1>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Idade"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Confirmação de Senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />

            <button type="submit"> Próximo </button>

        </form>
    )
}

export default UserForm