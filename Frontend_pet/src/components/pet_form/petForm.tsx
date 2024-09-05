import React from 'react';
import { useState } from "react";
import IPetFormProps from '../../interfaces/animal.ts'


const PetForm: React.FC<IPetFormProps> = ({ onSubmit }) => {
    const [animal, setAnimal] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [create, setCreate] = useState("");


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // const currentDate = new Date().toISOString();
        const currentDateLocal = new Date().toLocaleString('sv-SE')
        setCreate(currentDateLocal)
        onSubmit({
            animal: animal, name: name, gender: gender, life: 100, needs: { urine: 50, faecs: 50 },
            death: false,
            create: String(currentDateLocal),
            update: ""
        });

    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Escolha seu pet</h1>

            <select value={animal} onChange={(e) => setAnimal(e.target.value)} required>
                <option value="">Selecione o tipo</option>
                <option value="gato">Gato</option>
                <option value="cachorro">Cachorro</option>
                <option value="calopsita">Calopsita</option>
            </select>

            <input
                type="text"
                placeholder="Nome do Pet"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="">Selecione o tipo</option>
                <option value="male">Macho</option>
                <option value="female">Fêmea</option>
            </select>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default PetForm