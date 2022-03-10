import {React,useState} from 'react'
import Champs from '../Util/Champs'

const Championships = () => {
    const [champ,setChamp] = useState(Champs)
    console.log(champ)
    return (
        <div className="Champ-Container">
            <h2 className="champs-title">Celtics Championships</h2>
            <div className="Card-Holder-Champs">
            {champ.map((final)=>{
                const {id,SeriesFinal,FinalsMVP,Year,Celtics,Opponent,CeltsScore,OpponentScore,CeltsLogo,OpponentLogo,Banner} = final
                return (
                    <div key={id} className="Champs-Card">
                        <img src={Banner} alt={Year} />
                        <div>
                            <h4>{FinalsMVP}</h4>
                            <p>{SeriesFinal}</p>
                        </div>
                        {/* Display flex the outside div */}
                        <div>
                            <div>
                                <img src={CeltsLogo} alt={Celtics} />
                                <h3>{Celtics}</h3>
                                <p>{CeltsScore}</p>
                            </div>
                            <div>
                                <img src={OpponentLogo} alt={Opponent} />
                                <h3>{Opponent}</h3>
                                <p>{OpponentScore}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Championships
