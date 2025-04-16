// App.js

import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users = [
    {
        username: "midudev",
        name: "Miguel Ángel Durán",
        isFollowing: true
    },
    {
        username: "pheralb",
        name: "Pablo Hernández",
        isFollowing: true
    },
    {
        username: "rauchg",
        name: "Guillermo Rauch",
        isFollowing: true
    },
    {
        username: "yyx990803",
        name: "Evan You",
        isFollowing: true
    },
    {
        username: "gaearon",
        name: "Dan Abramov",
        isFollowing: true
    },
    {
        username: "torvalds",
        name: "Linus Torvalds",
        isFollowing: true
    }
]

export function App () {
    return (
        <section className = "App">
            {
                users.map(user => {
                    const {username, name, isFollowing} = user
                
                    return (
                        <TwitterFollowCard
                        key = {username}
                        username = {username}
                        initialIsFollowing = {isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>

                    )
                })
            }
        </section>
    )
}

