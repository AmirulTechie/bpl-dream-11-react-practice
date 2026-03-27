import { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise, setCoin, coin }) => {
    const playersData = use(playersPromise);
    const [selectedType, setSelectedType] = useState("available");
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    return (
        <>
        <div className="mt-10 flex justify-between">
                {selectedType === "available" ? <h2 className='font-bold text-2xl'>Available Players</h2> : <h2 className='font-bold text-2xl'>Selected Players ({selectedPlayers.length} / {playersData.length})</h2>}
            <div>
                    <button
                    onClick={() => setSelectedType("available")}
                    className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}>Available</button>
                    <button
                    onClick={() => setSelectedType("selected")}
                    className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}>Selected ({selectedPlayers.length})</button>
            </div>
            </div>
        <div className='mt-8'>
                {selectedType === "available" ? <AvailablePlayers Players={playersData} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></AvailablePlayers>:
                <SelectedPlayers selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers} setCoin={setCoin} coin={coin}>
                </SelectedPlayers>}
        </div>
        </>
    );
};

export default Players;