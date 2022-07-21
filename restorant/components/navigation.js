import Link from "next/link"
function Navigation() {
  return ( 
<>
<div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded " >
            <Link href='./'><a className="navbar-brand ortala">Özlem Pide Kebap Salonu</a></Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse giris" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="active ">
                            <Link href="/register  "><a className="nav-link ">Kaydol</a></Link>
                        </li>
                        <li className="">
                            <Link href="/giris"><a className="nav-link ">Giriş</a></Link>
                        </li>
                        <li className="">
                            <a className="nav-link ">Sepet</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
</>
     
);
}

export default Navigation