import React from 'react';
import {
    List,
} from 'semantic-ui-react';

export default function Item({ link, iconName }) {
    return (
        <List.Item as="a" href={link} target="_link">
            <List.Icon name={iconName} />
        </List.Item>
    )
}