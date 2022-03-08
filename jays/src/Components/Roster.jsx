import {React,useState} from 'react'
import CelticsRoster from '../Util/Roster'
const Roster = () => {
  const [team, setTeam] = useState(CelticsRoster)
  console.log(team)
  
  return (
    <div className="roster-Container">
        <h1 className="Roster-title">Celtics 2022 Roster</h1>
        <div className="roster">
          {team.map((squad)=>{
              const {id,Name,Position,Height,Wieght,Image} = squad;
              return(
                <div key={id}>
                  <div className="roster-card">
                    <img className="roster-Image" src={Image} alt={Name} />
                    <h2 className="Roster-Player">{Name}</h2>
                    <ul className="Roster-Info">
                      <li className="Roster-height">{Height}</li>
                      <li className="Roster-Wieght">{Wieght}</li>
                      <li className="Roster-Position">{Position}</li>
                      <li className="Roster-College"></li>
                    </ul>
                  </div>
                </div>
              )
          })}
          
        </div>
    </div>
  )
}

export default Roster