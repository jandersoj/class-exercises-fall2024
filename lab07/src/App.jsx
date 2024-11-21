import React from "react";
import Profile from  "./Profile.jsx";
import ButtonCount from "./ButtonCount.jsx";

export default function App() {
    const people = [
        {
            "name": "Anita",
            "image_url": "https://picsum.photos/id/216/100/100"
        },
        {
            "name": "Ben",
            "image_url": "https://picsum.photos/id/217/100/100"
        },
        {
            "name": "Adwaina",
            "image_url": "https://picsum.photos/id/218/100/100"
        },
        {
            "name": "Laciesha",
            "image_url": "https://picsum.photos/id/219/100/100"
        }
    ];
    return (
        <>
            <header>
                <h1>My First App</h1>
            </header>
            <main>
                <p>Hello React!</p>
                <ButtonCount val={1}/>
                <ButtonCount val={11}/>
                <ButtonCount val={21}/>
                <ButtonCount val={31}/>
                {people.map((person)=>{
                    return(
                        <Profile
                            name={person.name}
                            image={person.image_url}
                        />

                    );
                })}
 
            </main>
        </>
    );
}