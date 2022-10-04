import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const priceOptions = [
        {id: 1, name: 'Free', price: 0 ,
        features:[
            'Awasome Features',
            'Extra Features',
            'Unnsecessary Features',
            'Will Used FEatures',
            'Hudai Features',
            'Ajaira Features',
        ]
    },
        {id: 2, name: 'Medium', price: 9.99  ,
        features:[
            'EveryThing On free',
            'Extra Features',
            'Unnsecessary Features',
            'Will Used FEatures',
            'Hudai Features',
            'Ajaira Features',
        ]},
        {id: 3, name: 'Premium', price: 19.99  ,
        features:[
            'Everything on premium',
            'Extra Features',
            'Unnsecessary Features',
            'Will Used FEatures',
            'Hudai Features',
            'Ajaira Features',
        ]},
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 text-white p-12 '>Best Deal of the town</h2>
           <div className='grid  lg:grid-cols-3 md:grid-cols-2 gap-3 mt-4'>
           {
              priceOptions.map(option => <PriceOption
              key={option.id}
              option={option}
              ></PriceOption> )  
            }
           </div>
        </div>
    );
};

export default Pricing;