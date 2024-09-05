import React from 'react'; 
import { useState } from "react";
import UserForm from "../user_form/user_form";
import PetForm from "../pet_form/petForm";
import axios from "axios";


const Cadastro: React.FC = () => {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({ username: '', age: 0, password: '' });
    const [petData, setPetData] = useState({ animal: '', name: '', gender: '' });

    const handleNext = (data: { username: string; age: number; password: string }) => {
        setUserData(data);
        setStep(2)
    }

    const handleSubmit = (data: { animal: string; name: string; gender: string, life: number, needs: { urine: number, faecs: number },
        death: boolean,
        create: string,
        update: string  }) => {
        setPetData(data);
        console.log("Pet Dados", petData);
        
        const allData = {
            username: userData.username,
            age: userData.age,
            password: userData.password,
            pets: [data]
            
        };

        // axios.post('http://localhost:5000/users', allData)
        axios.post('http://186.247.89.58:8080/api/user/adduser', allData)
        .then((response) => {
          console.log('Dados enviados com sucesso:', response.data);
        })
        .catch((error) => {
          console.error('Erro ao enviar os dados:', error);
        });
    }
    return (
        <div>
            {step === 1 && <UserForm onNext={handleNext} />}
            {step === 2 && <PetForm onSubmit={handleSubmit} />}
        </div>
    )

}

export default Cadastro