import TimeBlock from "./TimeBlock.js";


function TimeWall({zones=[], currentZone=3, func}){
    return (
        <div id="conteiner-clocks">
            {
                zones.map(zone => 
                    <TimeBlock
                        key={zone["name"]} 
                        zone={zone} 
                        currentZone={currentZone}
                        func={func}/>
                    )
            }
        </div>
    )
}

export default TimeWall;