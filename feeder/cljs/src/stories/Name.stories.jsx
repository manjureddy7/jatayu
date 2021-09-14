import React from 'react';
import Name from '../components/Name';

export default {
   title: 'Name Component',
   component: Name
}

const Template = (args) => <Name {...args} />;

export const Primary = Template.bind({});

Primary.args = {
   name: "Jatayu",
   company: "npm",
   experience: 4
};
export const Secondary = Template.bind({});

Secondary.args = {
   name: "John",
   company: "Doe",
};