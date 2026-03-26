import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
const Card = ({player}) => {
    return (
            <div className="card bg-base-100 w-96 shadow-sm h-full flex flex-col">
                        <figure>
                            <img
                                width={380}
                                height={240}
                                src={player.image}
                                alt="player-image"
                                style={{ objectFit: 'cover' }}
                            />
                        </figure>
                        <div className="card-body flex flex-col grow">
                            <h2 className="card-title"><FaUser />{player.playerName}</h2>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-3 items-center'>
                                    <FaFlag />
                                    <p>{player.playerCountry}</p>
                                </div>
                                <button className='btn btn-soft'>{player.playerType}</button>
                            </div>
                            <div className="divider"></div>

                            <div className='flex flex-col grow justify-between'>
                                <div className='flex justify-between'>
                                    <div className='flex flex-col text-left'>
                                        <p className='font-bold'>Rating:</p>
                                        <p className='font-bold'>Batting Style:</p>
                                        <p className='font-bold'>Bowling Style:</p>
                                    </div>
                                    <div className='flex flex-col text-left'>
                                        <p>{player.rating}</p>
                                        <p>{player.battingStyle}</p>
                                        <p>{player.bowlingStyle}</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center mt-3'>
                                    <p className='font-bold'>Price: <span>${player.price}</span></p>
                                    <button className='btn'>Choose Player</button>
                                </div>
                            </div>
                        </div>
                    </div>
    );
};

export default Card;