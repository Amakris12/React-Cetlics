import {React, useState} from 'react'
import East from '../Util/East'
import West from '../Util/West'
const Standings = () => {
    const [east,setEast] = useState(East)
    const [west,setWest] = useState(West)
    return (
        <div className="standings">
           <div className="east">
               <h2 className="Standings-header">NBA Eastern Conference</h2>
               {east.map((ES)=>{
               const {id,Name,Record,Image} = ES;
               return(
                   <div key={id} className="east-Standings">
                       <img src={Image} alt={Name} />
                       <h3>{Name}</h3>
                       <h5>{Record}</h5>
                   </div>
               )
            })} 
           </div>
           <div className="west">
               <h2 className="Standings-header">NBA Western Conference</h2>
               {west.map((WS)=>{
               const {id,Name,Record,Image} = WS;
               return(
                   <div key={id} className="West-Standings">
                       <img src={Image} alt={Name} />
                       <h3>{Name}</h3>
                       <h5>{Record}</h5>
                   </div>
               )
           })}
           </div>
        </div>
    )
}

export default Standings
