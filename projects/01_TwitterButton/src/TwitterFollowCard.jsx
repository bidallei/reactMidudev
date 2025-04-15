// TwitterFollowCard.js

export function TwitterFollowCard ({username, name, isFollowing}) {
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-avatar"
                src={`https://unavatar.io/github/${username}`} 
                alt={`Avatar de ${name}`}
                />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span 
                    className="tw-followCard-infoUserName">@{username}</span>
                </div>
            </header>
            
            <aside>
                <button className="tw-followCard-button">
                    {isFollowing ? 'Siguiendo' : 'Seguir'}
                </button>
            </aside>
        </article>
    );
}