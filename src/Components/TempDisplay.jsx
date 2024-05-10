import React, { useEffect, useState } from 'react';

const TempDisplay = ({children = null}) => {

    return (
        <div className='temp-display'>
            {children}
        </div>
    );
};

export default TempDisplay;