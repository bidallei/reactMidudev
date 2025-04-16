// TwitterFollowCard.js
import { useState } from "react";

export function TwitterFollowCard ({children, username}) {
    // const state = useState(false)
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]  // Estas tres líneas se pueden escribir así:
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-avatar"
                src={`https://unavatar.io/github/${username}`} 
                alt={`Avatar de ${children}`}
                />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span 
                    className="tw-followCard-infoUserName">@{username}</span>
                </div>
            </header>
            
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}