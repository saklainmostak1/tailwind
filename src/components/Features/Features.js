import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Features = ({feature}) => {
    return (
        <div>
             <div className='flex items-center'>
            <CheckCircleIcon className="h-4 w-4 text-green-500"/>
            <p className='ml-2'>{feature}</p>
            </div>
        </div>
    );
};

export default Features;