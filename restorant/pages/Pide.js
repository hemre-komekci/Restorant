import React, { useState } from 'react'
export default function Pide({ pide }) {
  const [quantity, setquantity] = useState(1)
  const [varient, setvarient] = useState('1')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ margin: "30px" }} className="shadow-lg p-3 mb-5 bg-white rounded ">
      <div onClick={handleShow}><h1>{pide.name}
        <img src={pide.image} className="img-fluid" style={{ width: '50%', height: '50%' }} /></h1></div>
      <div className="flex-container">

        <div className="w-100">
          <p>Seçimler</p>
          <select className="form-control" value={varient} onChange={(e) => { setvarient(e.target.value) }}>
            {pide.varients.map(varient => {
              return <option value={varient}>{varient}</option>
            })}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>Adet</p>
          <select className="form-control" value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
            {[...Array(10).keys()].map((x, i) => {

              return <option value={i + 1}>{i + 1}</option>

            })}
          </select>
        </div>

      </div>

      <div className="flex-container">
        <div className="m-1 w-100 m-1">
          <h1 className="mt-1">Tutar: {pide.prices[0][varient]*quantity}TL</h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn"> Sepete Ekle</button>
        </div>

      </div>
    </div>
  )
}
