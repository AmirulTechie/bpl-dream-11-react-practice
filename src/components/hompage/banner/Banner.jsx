import React from 'react';
import MainLogo from '../../../assets/banner-main.png'
import Shadow from '../../../assets/bg-shadow.png'

const banner = ({coin, setCoin}) => {
    const freeCoinBtnHandler = ()=>{
        let giveFreeCoin = coin + 1000000;
        setCoin(giveFreeCoin);
    }
    return (
        <div className='mt-10 bg-[#131313] rounded-xl bg-no-repeat text-center'>
            <div style={{ backgroundImage: (`url(${Shadow})`) }} className='flex flex-col justify-center items-center bg-cover bg-center rounded-xl gap-4 md:gap-6 p-5 md:p-12'>
            <img className='mt-5' src={MainLogo} alt="" />
            <h2 className='text-white text-xl md:text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <h5 className='text-white opacity-70 font-inter text-sm md:text-2xl'>Beyond Boundaries Beyond Limits</h5>
                <button onClick={() => freeCoinBtnHandler()} className="btn btn-outline btn-success mb-5">Claim Free Credit</button>
            </div>
        </div>
    );
};

export default banner;