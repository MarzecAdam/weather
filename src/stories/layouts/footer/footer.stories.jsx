import React from 'react';

import { Footer } from '../../../Layouts/footer/footer';

export default {
    title: 'weather/layout/Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
