import React from 'react';

import {
    Container,
    Segment,
    Grid,
    Image,
    Header,
    List,
    Divider,
    Label,
    Icon,
} from 'semantic-ui-react';

import {
    Item,
    Project
} from '../components';

import Me from '../static/square-image.jpg';

export default function Home() {
    return (
        <>
            <Segment padded>
                <Grid textAlign="center" style={{ paddingTop: '3em' }}>
                    <Grid.Column mobile={16} computer={13} widescreen={14}>
                        <Image src={Me} size="small" verticalAlign="middle" circular />
                        <Header>
                            Hi. I'm Heanzy Zabala
                            <Header.Subheader>
                                Software Engineer <a style={{ fontWeight: 'bold' }} href="https://www.paymaya.com" > @ PayMaya PH </a>
                            </Header.Subheader>
                        </Header>
                        <List horizontal size="huge" style={{ marginTop: '0em' }}>
                            <Item link="mailto://heanzy.zabala@gmail.com" iconName="mail" />
                            <Item link="https://github.com/heanzyzabala" iconName="github" />
                            <Item link="https://linkedin.com/in/heanzyzabala" iconName="linkedin" />
                            <Item link="https://medium.com/@heanzy.zabala" iconName="medium" />
                        </List>
                        <Divider horizontal>
                            <Header as="h4" textAlign="center">
                                About
                            </Header>
                        </Divider>
                        <Container>
                            <Grid centered>
                                <Grid.Column mobile={16} computer={10} widescreen={10} textAlign="center">
                                    <p>I'm a Software Engineer from the Philippines. I enjoy designing and creating software that delights both users and developers.
                                    In my spare time, I try and explore different technologies and see how can they be applied.</p>
                                </Grid.Column>
                            </Grid>
                        </Container>
                        <Divider horizontal>
                            <Header as="h4" textAlign="center">
                                Projects
                            </Header>
                        </Divider>
                        <Segment basic>
                            <Grid stretched stackable columns={3} textAlign="left">
                                <Grid.Row>
                                    <Grid.Column>
                                        <Project
                                            name="Shortly"
                                            github="https://github.com/heanzyzabala/shortly-client"
                                            external="https://shortly.heanzyzabala.com"
                                            description="A simple and free link shortener."
                                            tags={["react", "react-hooks", "javascript", "mongodb"]}
                                        />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Project
                                            name="Express Starter"
                                            github="https://github.com/heanzyzabala/express-starter"
                                            npm="https://www.npmjs.com/package/create-express-starter"
                                            description="A bootstrap project for express with a ready-to-run application skeleton."
                                            tags={["express", "javascript", "mongodb"]}
                                        />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Project
                                            name="Reply Bot"
                                            github="https://github.com/heanzyzabala/discord-reply-bot"
                                            external="https://top.gg/bot/693108033601011762"
                                            description="A configurable discord bot that adds automated reply function to a server."
                                            tags={["discord.js", "javascript", "mongodb"]}
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Project
                                            name="COVID-19 Tracker"
                                            github="https://github.com/heanzyzabala/covid19tracker"
                                            external="https://covid19tracker.heanzyzabala.com"
                                            description="A dashboard for tracking COVID-19 cases in the Philippines."
                                            tags={["react", "react-hooks", "javascript", "chart.js"]}
                                        />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Project
                                            name="Shortly (API)"
                                            github="https://github.com/heanzyzabala/shortly-service"
                                            description="The backend service providing api for the link shortener."
                                            tags={["express", "javascript", "mongodb"]}
                                        />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Project
                                            name="Portfolio Website"
                                            github="https://github.com/heanzyzabala/heanzyzabala.com"
                                            external="https://heanzyzabala.com"
                                            description="My personal portfolio website made with react and semantic-ui."
                                            tags={["react", "react-hooks", "javascript"]}
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Grid>
                                <Grid.Column>
                                    <Label basic as="a" href="https://github.com/heanzyzabala" target="_link" >
                                        <Icon name="github" /> More
                                    </Label>
                                </Grid.Column>
                            </Grid>
                        </Segment>
                        <Divider horizontal>
                            <Header as="h4" textAlign="center">
                                Contact
                            </Header>
                        </Divider>
                        <Segment basic>
                            <Grid centered columns={1}>
                                <Grid.Column textAlign="center">
                                    <p>
                                        Feel free to contact me if you have any questions:
                                    </p>
                                    <Label basic="as" href="mailto://heanzy.zabala@gmail.com" empty>
                                        <Icon name="mail" /> Send me a mail
                                    </Label>
                                </Grid.Column>
                            </Grid>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
        </>
    );
}