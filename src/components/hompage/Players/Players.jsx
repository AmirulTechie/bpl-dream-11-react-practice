import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';

const Players = ({ playersPromise }) => {
    const playersData = use(playersPromise);
    return (
        <>
        <div className="mt-10 flex justify-between">
            <p className='font-bold text-2xl'>Available Players</p>
            <div>
                <button className='btn btn-success'>Available</button>
                <button className="btn">Selected</button>
            </div>
            </div>
        <div className='mt-8'>
            <AvailablePlayers Players = {playersData}></AvailablePlayers>
        </div>
        </>
    );
};

export default Players;