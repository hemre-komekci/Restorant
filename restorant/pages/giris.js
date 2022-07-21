import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

function Giris() {
return (

  <><Head>
    <title>Giriş Yap</title>
  </Head><div>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="card">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item text-center"> <a className="nav-link  btl" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Giriş</a> </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="form px-4 pt-5"> <input type="text" name className="form-control" placeholder="E-Posta" /> <input type="text" name className="form-control" placeholder="Şifre" /> <button className="btn btn-dark btn-block">Giriş</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>

);
}

export default Giris;
