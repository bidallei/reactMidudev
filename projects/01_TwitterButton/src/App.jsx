// App.js

import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App () {
    return (
        <section className = "App" >
            <TwitterFollowCard
                username="midudev" 
                name="Miguel Ángel Durán" 
                isFollowing={false}
            />
            
            <TwitterFollowCard
                username="pheralb" 
                name="Pablo Hernández" 
                isFollowing={true}
            />
            
            <TwitterFollowCard
                username="elonmusk" 
                name="Elon Musk" 
                isFollowing={false}
            />
        </section>
    )
}

