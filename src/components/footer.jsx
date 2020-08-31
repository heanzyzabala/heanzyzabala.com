import React from 'react';

import {
    Item,
} from '../components';

import {
    Segment,
    Grid,
    Header,
    List,
} from 'semantic-ui-react';

export default function Footer() {
    return (
        <Segment basic padded="very">
            <Grid centered>
                <Grid.Row>
                    <List horizontal size="huge" style={{ marginTop: '0em' }}>
                        <Item link="mailto://heanzy.zabala@gmail.com" iconName="mail" />
                        <Item link="https://github.com/heanzyzabala" iconName="github" />
                        <Item link="https://linkedin.com/in/heanzyzabala" iconName="linkedin" />
                        <Item link="https://medium.com/@heanzy.zabala" iconName="medium" />
                    </List>
                </Grid.Row>
                <Grid.Row style={{ paddingTop: '0em' }}>
                    <Header disabled as="h5" content="© 2020 Heanzy Zabala" />
                </Grid.Row>
            </Grid>
        </Segment>
    );
}