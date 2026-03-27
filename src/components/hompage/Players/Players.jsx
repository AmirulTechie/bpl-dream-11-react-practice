import { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise }) => {
    const playersData = use(playersPromise);
    const [selectedType, setSelectedType] = useState("available");
    return (
        <>
        <div className="mt-10 flex justify-between">
                {selectedType === "available" ? <h2 className='font-bold text-2xl'>Available Players</h2> : <h2 className='font-bold text-2xl'>Selected Players (0 / 6)</h2>}
            <div>
                    <button
                    onClick={() => setSelectedType("available")}
                    className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}>Available</button>
                    <button
                    onClick={() => setSelectedType("selected")}
                    className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}>Selected <span>0</span></button>
            </div>
            </div>
        <div className='mt-8'>
            
            
                {selectedType === "available" ? <AvailablePlayers Players={playersData}></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>}
        </div>
        </>
    );
};

export default Players;