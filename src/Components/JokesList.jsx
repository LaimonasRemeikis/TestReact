import {useEffect, useState} from 'react';
import axios from 'axios';
import Setup from './Setup';
import Delivery from './Delivery';


function JokesList() {

    const [jokes, setJokes] = useState([]);

    useEffect(() => {

        axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10')
        .then(res => {
            console.log(res.data);
            setJokes(res.data.jokes)
        })
    }, []);

    return (
        <ul>
            {
                jokes.map(joke => <div key={joke.id} >{joke.delivery}{joke.setup}</div>)
             
            }
        </ul>
    )
   
}

export default JokesList;