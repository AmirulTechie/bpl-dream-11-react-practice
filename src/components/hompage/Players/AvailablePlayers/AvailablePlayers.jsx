import React from 'react';
import Card from '../../../Ui/Card';

const AvailablePlayers = ({ Players, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {Players.map((player)=>{
                    
                    return <Card player={player} setCoin={setCoin} coin={coin} key={player.playerName}  selectedPlayers = {selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>
                })}
                M
            </div>

        </div>
    );
};

export default AvailablePlayers;