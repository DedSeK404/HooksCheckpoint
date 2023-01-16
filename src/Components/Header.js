import  logo  from "./Logo.png";

export const Header = () => {
    return(
        <div className="header">
            <button>TV Shows</button>
            <button> Movies</button>
            <img className="logo" src={logo} alt="0"/>
            <button>Recently Added</button>
            <button>My list</button>
        </div>
    )
}

