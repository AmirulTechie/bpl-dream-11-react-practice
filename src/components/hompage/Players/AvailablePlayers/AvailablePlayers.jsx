import React from 'react';
import Card from '../../../Ui/Card';

const AvailablePlayers = ({ Players }) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {Players.map((player)=>{
                    return <Card player={player}></Card>
                })}
            </div>

        </div>
    );
};

export default AvailablePlayers;