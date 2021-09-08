import React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Name } from '../../components/Name';

// Export default state ? - We need to have below meta portion to show on the screen

export default {
    title: 'Name',
    component: Name,
    argTypes: { // We need to pass any prop that requires control like backgroundcolor, booleans
    //   name: {
    //     control: 'string'
    //   }
    isWorking: {
        control: 'boolean'
    },
    backgroundColor: {
        control: 'color'
    }
    },
} as ComponentMeta<typeof Name>;


const Template: ComponentStory<typeof Name> = (args) => <Name {...args} />

/* Now show all the varities of your compoennt */

// Component with Name prop
export const WithName = Template.bind({});

WithName.args = {
    name: 'Manoj',
    isWorking: true,
    backgroundColor: 'red'
}

// Component with Name prop
export const WithOutName = Template.bind({});

WithOutName.args = {
    // name: ''
    isWorking:  false
}