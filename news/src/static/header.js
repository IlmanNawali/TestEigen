import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/tambah.css'
const Header = () =>{
    return(
    <div className='wrapper'>
        <nav className='head'>
          <div className="container-flex">
             <div className="bg-sidebar"></div>
             <ul className="sidebar">
                <li className="nav-item">
                    <a className="nav-link" href='/'>Indonesia </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"href='/newsUS'>US </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='/newsSport'>Sport </a>
                </li>
             </ul>
          </div>
        </nav>
    </div>  
    )
}

export default Header;