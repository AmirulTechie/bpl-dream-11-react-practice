import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    const handleDeleteSelectedPlayer = (player)=>{
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price);
        toast.warning(`Deleted player ${player.playerName}`)
    }
    return (
        <div className='space-y-5'>
            {   selectedPlayers.length === 0 ? 
            <div className='h-100 flex flex-col items-center justify-center'>
                <h2 className='font-bold text-xl opacity-80'>No Player Selected Yet</h2>
                <p className='text-sm'>Go to available tab to select player</p>
            </div> 
                :
                selectedPlayers.map((player, index)=>{
                    return(
                        <div key={index} className='flex items-center gap-6 justify-between p-4 rounded-2xl border'>
                            <div className='space-y-4 flex items-center gap-6'>
                                <div>
                                <img src={player.image} alt="" className='h-18.75 w-auto rounded-md'/>
                                </div>
                                <div>
                                <h2 className='font-semibold text-xl flex items-center gap-0.5'><FaUser></FaUser> {player.playerName}</h2>
                                <p>{player.playerType}</p>
                                </div>
                            </div>
                            
                            <button onClick={()=>handleDeleteSelectedPlayer(player)} className='btn text-red-500'><MdDelete></MdDelete></button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SelectedPlayers;