import './App.css'
export function App () {
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-avatar"
                src="https://unavatar.io/github/mdo" alt="Avatar de Mdo" />
                <div className="tw-followCard-info">
                    <strong>Miguel Pedro José</strong>
                    <span 
                    className="tw-followCard-infoUserName"> @mdo</span>
                </div>
            </header>
            
            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
    );
}