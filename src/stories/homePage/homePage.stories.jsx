import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../Pages/home/Home';

export default {
    title: 'weather/home/page',
    component: Home,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => (
    <MemoryRouter>
        <Home {...args} />
    </MemoryRouter>
);

export const Default = Template.bind({});
