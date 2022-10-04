import React from 'react';

const Pricing = () => {
    const priceOptions = [
        {id: 1, name: 'Free', price: 0},
        {id: 2, name: 'Medium', price: 9.99},
        {id: 3, name: 'Premium', price: 19.99},
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 text-white p-12 '>Best Deal of the town</h2>
        </div>
    );
};

export default Pricing;