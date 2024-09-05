import React, { useEffect, useState } from 'react';


const UserProfile = () => {
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        const storedUserDta = localStorage.getItem("userData");

        if (storedUserDta) {
            setUserData(JSON.parse(storedUserDta));
        }
    }, [])

    return (
        <div>
            {userData ? (
                <div>
                    <h1>Bem-vindo, {userData.username}!</h1>
                    <p>Idade: {userData.age}</p>
                    <p>Nome do pet: {userData.pets[0].name}</p>
                    <div>
                        <h3>necessidades:</h3>
                        <p> {`urina: ${userData.pets[0].needs.urine} `} </p>
                        <p> {`fezes ${userData.pets[0].needs.faecs}`} </p>
                    </div>
                </div>
            ) : (
                <p>Carregando perfil...</p>
            )}
        </div>
    )
}

export default UserProfile