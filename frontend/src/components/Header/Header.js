import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logout } from "../../api/apis";

const Header = (props) => {
    const [pagename, setPageName] = useState('');
    useEffect(() => {
        setPageName(props.page);
    }, [])

    return (
        <>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <Link to={"/overview"} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <img className="bi me-2" src="/images/Hoval_Logo.svg" alt="" style={{height: "35px"}} />
                {/* <use xlink:href="//link to admin hsc" /></svg> */}
                <span className="fs-5">HSC - Adminstration</span>
            </Link>

            <ul className="nav nav-pills">
                <li className="nav-item"><Link to={'/overview'} className={`nav-link ${pagename == 'overview' ? 'active' : ""}`}
                    aria-current="page">Übersicht</Link></li>
                <li className="nav-item"><Link to={'create'} className={`nav-link ${pagename == 'create' ? 'active' : ""}`}>Instanz Anlegen</Link></li>
                <li className="nav-item"><Link to={"/monitoring"} className={`nav-link ${pagename == 'monitoring' ? 'active' : ""}`}>Überwachung</Link></li>
                <li className="nav-item"><Link to={"/testing"} className={`nav-link ${pagename == 'testing' ? 'active' : ""}`}>Testing</Link></li>

            </ul>
            <div className="dropdown text-end">
                <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1"
                data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="mdo" width="32" height="32"
                    className="rounded-circle" onClick={Logout} />
                </a>
                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="#">...</a></li>
                    <li><a className="dropdown-item" href="#">Einstellungen</a></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#">Abmelden</a></li>
                </ul>
            </div>
        </header>
        </>
    );
}

export default Header;