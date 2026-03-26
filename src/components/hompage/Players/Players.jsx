import React, { use } from 'react';

const Players = ({ playersPromise }) => {
    const playersData = use(playersPromise);
    console.log(playersData)
    return (
        <>
        Players
        </>
    );
};

export default Players;