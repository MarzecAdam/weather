import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Card from '../../Pages/home/components/card';

export default {
    title: 'weather/home/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
};

const Template = (args) => (
    <MemoryRouter>
        <Card {...args} />
    </MemoryRouter>
);

export const Default = Template.bind({});
