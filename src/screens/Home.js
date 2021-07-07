import React from 'react';
import { Gallery } from '../components/Gallery';
import { SelectCategory } from '../components/SelectCategory';

export const Home = () => {
    return (
        <div>
            <Gallery />
            <SelectCategory />
        </div>
    );
};