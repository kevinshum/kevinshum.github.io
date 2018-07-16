import React from "react";
import { render } from "react-dom";
import "./sass/main.scss"
import 'react-select/dist/react-select.css';
import Multiselect from './components/multiselect';
import { HomeLinkHeaders } from "./components/text";
import Grid from 'react-css-grid';

import { injectGlobal } from 'styled-components'
import profile from './profile.png';

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`

import {
    Provider, Heading, Flex, Text, Relative, Absolute,
    Card,
    Box,
    BackgroundImage,
    Subhead,
    Small, Image,
    Row, Column, Fixed,
    Button, Divider, List

} from 'rebass'



const App2 = props => (
    <Provider>


        <div class="center float">
            {/* <Button mt={10} children='Kevin Shum' font-size='3' lineHeight='2' /> */}
            <a href="#top"><img src={require('./public/banner.png')} width="300" /></a>
        </div>


        {/* --------- INTRO --------- */}

        <section class="intro">
            <div class="content">
                <bottom-right>
                    <Image src={require('./public/profile2.png')} width="400" height="500" />
                </bottom-right>
                <Flex mx={100} mt={200} id="z-top">

                    <Box width={1 / 2} px={2} >
                        <Divider
                            w={1}
                            border={8}
                            borderColor='#3A3A3A'
                        />
                        {HomeLinkHeaders}
                    </Box>
                    {/* <Box width={1 / 2} px={2}>
                        <Image src={require('./public/profile.png')} width="400" height="500" />

                    </Box> */}
                </Flex>

                {/* <Flex alignItems='center'>
                    <Box width={1 / 3}>
                        <Heading
                            py={4}
                            fontSize={[5, 6]}
                            color='white'
                            bg='blue'>
                            Hello
                        </Heading>
                    </Box>
                    <Box width={1 / 3} ml='auto'>
                        <Text>Grid</Text>
                    </Box>
                </Flex> */}

            </div>


        </section>

        {/* --------- BIO --------- */}
        <section-flex id="bio">
            <div class="content">
                <Divider
                    w={1}
                    border='3px'
                    borderColor='white'
                />

                <Text fontSize='7' color='white' fontWeight='bold'>BIO</Text>


                <Flex flexWrap='wrap' pt={50}>
                    <Box width={[1, 2 / 3]} p={0}>
                        <Text fontSize='2'>
                            Greüzi! I'm Kevin―scholar, athlete, and engineer. For my studies, training, and work, I've had the opportunity to travel around the world, over 26 countries and counting.
                        </Text>
                    </Box>

                    <Box width={[1, 1 / 3]} p={0}></Box>
                </Flex>

            </div>
        </section-flex>

        {/* --------- SCHOLAR --------- */}

        <section-flex id="scholar">
            <div class="content">
                <Divider
                    w={1}
                    border='3px'
                    borderColor='white'
                />

                <Text fontSize='7' color='white' fontWeight='bold'>SCHOLAR</Text>


                <Flex flexWrap='wrap' pt={50}>
                    <Box width={[1, 2 / 3]} p={0}>
                        <Text fontSize='2'>
                            As a student-athlete, scholarship comes first. I'm currently a senior at MIT, Class of 2019, studying Computer Science and concentrating in Theater Arts. I spent Spring 2018 abroad at ETH Zürich in Switzerland, on the inaugural MIT EECS x ETH exchange program.
                        </Text>
                    </Box>

                    <Box width={[1, 1 / 3]} p={0}></Box>
                </Flex>

                <Divider
                    pt={50}
                    w={1}
                    border='3px'
                    borderColor='white'
                />
                <Row >
                    <Column><Text fontSize='2' color='white' fontWeight='bold'>Writing</Text>
                        <Box pt={10} >
                            <list>
                                <li></li>
                                <li>First thing</li>
                                <li>Second thing</li>
                                <li>Third thing</li>
                            </list>
                        </Box>
                    </Column>

                    <Column><Text fontSize='2' color='white' fontWeight='bold'>Papers</Text>
                        <Box pt={10} >
                            <list>
                                <li></li>
                                <li>First thing</li>
                                <li>Second thing</li>
                                <li>Third thing</li>
                            </list>
                        </Box>
                    </Column>

                    <Column><Text fontSize='2' color='white' fontWeight='bold'>Keynotes</Text>
                        <Box pt={10} >
                            <list>
                                <li></li>
                                <li>First thing</li>
                                <li>Second thing</li>
                                <li>Third thing</li>
                            </list>
                        </Box>
                    </Column>
                </Row>
            </div>
        </section-flex >

        {/* --------- ATHLETE --------- */}

        <section-flex id="athlete">
            <div class="content">
                <Divider
                    w={1}
                    border='3px'
                    borderColor='white'
                />

                <Text fontSize='7' color='white' fontWeight='bold'>ATHLETE</Text>


                <Flex flexWrap='wrap' pt={50}>
                    <Box width={[1, 2 / 3]} p={0}>
                        <Text fontSize='2'>
                            Since I was 6, my dream was to become a professional figure skater -- skating as fast as I can, doing the fastest spins and biggest tricks, competing and performing. 15 years later, I'm still lucky enough to pursue my greatest passion. Outside of training and competing, I also serve on the US Figure Skating Singles Committee.                        </Text>
                    </Box>

                    <Box width={[1, 1 / 3]} p={0}></Box>
                </Flex>

                <Divider
                    pt={50}
                    w={1}
                    border='3px'
                    borderColor='white'
                />

                <Row >
                    <Column><Text fontSize='2' color='white' fontWeight='bold'>Skating Bio</Text>
                        <Box pt={10} >
                            <list>
                                <li></li>
                                <li>First thing</li>
                                <li>Second thing</li>
                                <li>Third thing</li>
                            </list>
                        </Box>
                    </Column>

                    <Column><Text fontSize='2' color='white' fontWeight='bold'>Results</Text>
                        <Box pt={10} >
                            <list>
                                <li></li>
                                <li>First thing</li>
                                <li>Second thing</li>
                                <li>Third thing</li>
                            </list>
                        </Box>
                    </Column>

                    <Column><Text fontSize='2' color='white' fontWeight='bold'>Performances</Text>
                        <Box pt={10} >
                            <list>
                                <li></li>
                                <li>First thing</li>
                                <li>Second thing</li>
                                <li>Third thing</li>
                            </list>
                        </Box>
                    </Column>
                </Row>

            </div>

        </section-flex>

        {/* --------- ENGINEER --------- */}

        <section-flex id="engineer">
            <div class="content">
                <Divider
                    w={1}
                    border='3px'
                    borderColor='white'
                />

                <Text fontSize='7' color='white' fontWeight='bold'>ENGINEER</Text>


                <Flex flexWrap='wrap' pt={50}>
                    <Box width={[1, 2 / 3]} p={0}>
                        <Text fontSize='2'>
                            Since I was 6, my dream was to become a professional figure skater -- skating as fast as I can, doing the fastest spins and biggest tricks, competing and performing. 15 years later, I'm still lucky enough to pursue my greatest passion. Outside of training and competing, I also serve on the US Figure Skating Singles Committee.                        </Text>
                    </Box>

                    <Box width={[1, 1 / 3]} p={0}></Box>
                </Flex>

                <Divider
                    pt={50}
                    w={1}
                    border='3px'
                    borderColor='white'
                />

                <Row >
                    <Column><Text fontSize='2' color='white' fontWeight='bold'>Skating Bio</Text>
                        <Box pt={10} >
                            <list>
                                <li></li>
                                <li>First thing</li>
                                <li>Second thing</li>
                                <li>Third thing</li>
                            </list>
                        </Box>
                    </Column>

                    <Column><Text fontSize='2' color='white' fontWeight='bold'>Results</Text>
                        <Box pt={10} >
                            <list>
                                <li></li>
                                <li>First thing</li>
                                <li>Second thing</li>
                                <li>Third thing</li>
                            </list>
                        </Box>
                    </Column>

                    <Column><Text fontSize='2' color='white' fontWeight='bold'>Performances</Text>
                        <Box pt={10} >
                            <list>
                                <li></li>
                                <li>First thing</li>
                                <li>Second thing</li>
                                <li>Third thing</li>
                            </list>
                        </Box>
                    </Column>
                </Row>


                {/* <Text fontSize='2' color='white' fontWeight='italic'>Partners</Text> */}

                <Flex align="center" justify="center"><Image pt={75} src={require('./public/partners.png')} /></Flex>



            </div>

        </section-flex>


        {/* --------- OTHER --------- */}


        {/* --------- FOOTER --------- */}

        <footer>
            <section-flex id="footer">

                {/* <div class="content" id="bottom"> */}
                <div id="top" >

                    <Flex
                        mx={0}
                        flexWrap='wrap'
                    >
                        <Box width={[1, 1]} mb={200}>

                            <Text fontSize='5' color='white'><i>
                                When I step out on to the ice, it's an experience like no other.
                                    It's part art, part sport, both equally important. Every movement, breath, detail is scrutinized. The sport demands a mastery of the craft. A never-ending pursuit of delicate strength, creativity, and perfection. </i>
                            </Text>

                        </Box>
                        <Box width={[1, 1]} p={0}>
                            <Divider
                                w={1}
                                border='3px'
                                borderColor='white'
                            />
                            <Text fontSize='1' color='white'>© Handcrafted with love by Kevin Shum, 2018.</Text>
                        </Box>
                    </Flex>

                    {/* <Box pt={10} width={100} id="top">
                        <Text fontSize='1' color='white' fontWeight='italic'><i>Made with love by Kevin, (c) 2018.</i></Text>

                    </Box>
                    <Box pt={10} id="bottom">

                        <Text fontSize='1' color='white' fontWeight='bold'>Made with love by Kevin, (c) 2018.</Text>
                    </Box>
                    <div id="bottom"> */}


                </div>

            </section-flex>
        </footer >


    </Provider >
)


const App = () => {
    return (
        <div id="container">
            <h1 id="subtitle">
                KEVIN SHUM
            </h1>
            <div id="title">
                {HomeLinkHeaders}
            </div>
            <div id="select">
                <Multiselect label="Multiselect" />
            </div>
        </div>
    )
};
// render(<App />, document.getElementById("app"));
render(<App2 />, document.getElementById("asdf"));

const App3 = () => {
    return (
        <div className="module">
            <div id="title">
                <p>this is the: {value}</p>
            </div>
        </div>
    )
};