import React from 'react';
import {
    Segment,
    Header,
    Label,
    List,
    Icon,
} from 'semantic-ui-react';

import Item from './item';

export default function Project({ name, description, external, github, npm, tags }) {
    const tagLabels = [];
    tags.forEach(tag => tagLabels.push(<Label> {tag} </Label>))

    const githubItem = github === undefined ? undefined : <Item link={github} iconName="github" />;
    const npmItem = npm === undefined ? undefined : <Item link={npm} iconName="npm" />;
    const externalItem = external === undefined ? undefined : <Item link={external} iconName="external" />;

    return (
            <Segment>
            <Header as="h5">
                <List horizontal size="large" floated="right">
                    {githubItem}
                    {npmItem}
                    {externalItem}
                </List>
                <Icon name="folder outline" />
                <br /> {name}
                <Header.Subheader style={{ marginTop: '0.75em' }}>
                    {description}
                </Header.Subheader>
            </Header>
            <Label.Group horizontal size="small">
                {tagLabels}
            </Label.Group>
        </Segment>
    );
}