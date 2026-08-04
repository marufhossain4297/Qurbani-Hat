import React from 'react';



const DetailsPage = async({ params }) => {
    const {id} = await params

    const animalsDetails = async() =>{
        const res = await fetch(`https://qurbani-hat-server-lbwm.onrender.com/animals/${id}`)
        const data = res.json()
        return data
    }

    const animalDetails = await animalsDetails(id)
    console.log(animalDetails);
    
    return (
        <div>
            <h2>{animalDetails.name}e</h2>
        </div>
    );
};

export default DetailsPage;