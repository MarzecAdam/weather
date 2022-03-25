import React from 'react';

import { Header } from '../../../Layouts/header/header';

export default {
    title: 'Header/nav',
    component: Header,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
