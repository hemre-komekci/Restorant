import pideler from '../pidelerdata'
import Pide from '../pages/Pide'
export default function Homescreen() {  
  return (
    <div>
      <div className="row">
        {pideler.map(pide=>{
          return <div className="col-md-4">
            <div>
               <Pide pide = {pide}/>
               
               </div>
          </div>

        })}


      </div>
    </div>
  )
}
