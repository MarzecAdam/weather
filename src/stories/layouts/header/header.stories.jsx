import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from '../../../Layouts/header/header';

export default {
    title: 'weather/layout/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => (
    <MemoryRouter>
        <Header {...args} />
    </MemoryRouter>
);

export const Default = Template.bind({});
