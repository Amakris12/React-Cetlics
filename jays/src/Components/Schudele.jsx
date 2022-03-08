import {React,useState} from 'react'
import Games from '../Util/Games'

const Schudele = () => {
    const [games,setGames] = useState(Games)
    console.log(games)
    return (
        <div className="Celtics-Games">
            <h2 className="Games-header">Celtics Recent Games</h2>
            <div className="Game-Container">
            {games.map((vs)=>{
                const {id,Home,Away,HomeScore,AwayScore,HomeRecord,AwayRecord,Day,HomeImage,AwayImage,Time} = vs;
                return (
                    <div className="Game" key={id} >
                    <div className="Game-Peirod">
                        <h4 className="Game-Day">{Day}</h4>
                        <p className="Game-time">{Time}</p>
                    </div>
                    <div>
                        <div className="Game-HomeTeam">
                            <img className="Game-HomeImg" src={HomeImage} alt={Home} />
                            <h3 className="Game-Home">{Home}</h3>
                            {/* <p className="Game-homeRecord">{HomeRecord}</p> */}
                            <p className="Game-homeScore">{HomeScore}</p>
                        </div>
                        <div className="Game-AwayTeam">
                            <img className="Game-AwayImg" src={AwayImage} alt={Away} />
                            <h3 className="Game-Away">{Away}</h3>
                            {/* <p className="Game-awayRecord">{AwayRecord}</p> */}
                            <p className="Game-awayScore">{AwayScore}</p>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>
        </div>
    )
}

export default Schudele
