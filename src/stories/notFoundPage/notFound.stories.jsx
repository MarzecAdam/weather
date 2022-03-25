import React from 'react';

import { NotFound } from '../../../src/Pages/NotFound/NotFound';

export default {
    title: 'weather/NotFound',
    component: NotFound,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <NotFound {...args} />;

export const PageNotFound = Template.bind({});
