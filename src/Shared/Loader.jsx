import React from 'react';
import { Bars } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='bg-white w-full h-screen flex justify-center items-center'>
            <Bars
                height="80"
                width="80"
                color="#19A7CE"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loader;