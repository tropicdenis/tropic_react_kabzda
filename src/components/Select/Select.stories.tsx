import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Select} from "./Select";

export default {
    title: 'Select  ',
    component: Select,
};

export const WithValue = () => {
    const [value, setValue] = useState(2);
    <>
        <Select onChange={action("Value changed")}
                value={value}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'}
                ]}/>;
    </>
}
export const WithoutValue = () =>
    <>
        <Select onChange={action("Value changed")}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'}
                ]}/>;
    </>