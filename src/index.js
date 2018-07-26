import React from "react";
import { render } from "react-dom";
import "./sass/main.scss"
import 'react-select/dist/react-select.css';
import Multiselect from './components/multiselect';
import { HomeLinkHeaders } from "./components/text";
// import { DividerThick2 } from "./components/ui";
// import Grid from 'react-css-grid';

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


// #########################################################
// COMPONENTS
// #########################################################

const DividerThick =
    <Divider
        w={1}
        border={8}
        borderColor='#3A3A3A'
    />;

const DividerThinPadded =
    <Box mt={80}>
        <Divider
            w={1}
            border={3}
            borderColor='white'
        />
    </Box >;

function SectionHeading(props) {
    return <div>
        <Divider
            // w={1}
            border={8}
            borderColor='white'
        />
        <Text fontSize='5' color='white' fontWeight='bold'>{props.title}</Text>
    </div>;
}

// @param: props = list of things to populate list 
function NiceList(props) {
    const listEntries = props.entries;
    const listEntriesHTML = listEntries.map((entry) =>
        <li>{entry}</li>
    );
    return (
        <list>{listEntriesHTML}</list>
    );
}

function NiceColumn(props) {
    const columnTitle = props.title;
    const columnEntries = props.entries;
    const columnWidth = props.width;
    return <Column w={columnWidth}>
        <Text fontSize='2' color='white' fontWeight='bold'>{columnTitle}</Text>
        <Box pt={25} >
            <NiceList entries={columnEntries} />
        </Box>
    </Column>;
}

const scholarTableEntries = [
    { title: "Writing", entries: ["Article1"] },
    { title: "Papers", entries: ["Article1", "Article2"] },
    { title: "Keynotes", entries: ["Article1"] }
];

const athleteTableEntries = [
    { title: "Bio", entries: ["Article1"] },
    { title: "Results", entries: ["Article1", "Article2"] },
    { title: "Performances", entries: ["Article1"] }
];

const engineerTableEntries = [
    { title: "Roles", entries: [`Software Engineering Intern`, ""] },
    { title: "Projects", entries: ["Article1", "Article2"] },
    { title: "Portfolio", entries: ["Article1"] }
];

function NiceTable(props) {
    const tableEntries = props.entries;
    const numEntries = tableEntries.length;
    const columnsHTML = tableEntries.map(column =>
        <NiceColumn title={column.title} entries={column.entries} width={1 / numEntries} />
    );
    return <div>
        {DividerThinPadded}
        <Row >
            {columnsHTML}
        </Row >
    </div>;
}

// #########################################################
// SECTIONS
// #########################################################

// {/* --------- INTRO --------- */}

const Intro =
    <section class="intro">
        <div class="content">
            <bottom-right>
                <Image src={require('./public/profile2.png')} width="400" height="500" />
            </bottom-right>
            <Flex mx={100} mt={200} id="z-top">

                {/* vertical line
                {DividerThick}  */}

                <Box width={1 / 2} px={2} >
                    {DividerThick}
                    {HomeLinkHeaders}
                </Box>
            </Flex>

        </div>
    </section>;

const scholarSectionDescription = "I'm a senior at MIT, Class of 2019, studying Computer Science and concentrating in Theater Arts. I spent Spring 2018 abroad at ETH Zürich in Switzerland, on the inaugural MIT EECS x ETH exchange program.";

// TODO : fix this doesnt work 
function NiceSectionWithTable(props) {
    // const sectionId = props.id;
    // const sectionDescription = props.desc;
    // const sectionTableEntries = props.tableEntires;

    const sectionId = "scholar";
    const sectionDescription = scholarSectionDescription;
    const sectionTableEntries = scholarTableEntries;
    <section-flex id={sectionId}>
        <div class="content">

            <SectionHeading title={sectionId.toUpperCase()} />

            <Flex flexWrap='wrap' pt={50}>
                <Box width={[1, 2 / 3]} p={0}>
                    <Text fontSize='2'>
                        {sectionDescription}
                    </Text>
                </Box>

            </Flex>
            <NiceTable entries={sectionTableEntries} />
        </div>
    </section-flex >
};

// #########################################################
// SECTIONS
// #########################################################



const App2 = props => (
    <Provider theme={{
        fonts: {
            sans: '"Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;',
        },
        fontSizes: [
            12, 16, 24, 30, 36, 50
        ]
    }}>

        <div class="center float">
            {/* <Button mt={10} children='Kevin Shum' font-size='3' lineHeight='2' /> */}
            <a href="#top"><img src={require('./public/banner.png')} width="300" /></a>
        </div>

        {Intro}

        {/* --------- BIO --------- */}
        <section-flex id="bio">
            <div class="content">
                <SectionHeading title="BIO" />

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
        {/* <NiceSectionWithTable id="scholar" desc={scholarSectionDescription} tableEntires={scholarTableEntries} /> */}

        <section-flex id="scholar">
            <div class="content">

                <SectionHeading title="SCHOLAR" />

                <Flex flexWrap='wrap' pt={50}>
                    <Box width={[1, 2 / 3]} p={0}>
                        <Text fontSize='2'>
                            I'm a senior at MIT, Class of 2019, studying Computer Science and concentrating in Theater Arts. I spent Spring 2018 abroad at ETH Zürich in Switzerland, on the inaugural MIT EECS x ETH exchange program.
                        </Text>
                    </Box>

                    <Box width={[1, 1 / 3]} p={0}></Box>
                </Flex>

                <NiceTable entries={scholarTableEntries} />
            </div>
        </section-flex >

        {/* --------- ATHLETE --------- */}

        <section-flex id="athlete">
            <div class="content">
                <SectionHeading title="ATHLETE" />


                <Flex flexWrap='wrap' pt={50}>
                    <Box width={[1, 2 / 3]} p={0}>
                        <Text fontSize='2'>
                            Since I was 6, my dream was to become a professional figure skater -- skating as fast as I can, doing the fastest spins and biggest tricks, competing and performing. 15 years later, I'm still lucky enough to pursue my greatest passion. Outside of training and competing, I also serve on the US Figure Skating Singles Committee.                        </Text>
                    </Box>

                    <Box width={[1, 1 / 3]} p={0}></Box>
                </Flex>

                <NiceTable entries={athleteTableEntries} />

            </div>

        </section-flex>

        {/* --------- ENGINEER --------- */}

        <section-flex id="engineer">
            <div class="content">
                <SectionHeading title="ENGINEER" />

                <Flex flexWrap='wrap' pt={50}>
                    <Box width={[1, 2 / 3]} p={0}>
                        <Text fontSize='2'>
                            At MIT, I've been able to pursue my other passion, computer science. It all started in high school, when I learned how to program with BYOB in Joy of Computing. From there I've worked with all sorts of hardware and software systems, both front- and back-end, hardware and software, from iOS apps to IoT-connected robotic furniture, from distributed systems to multisensory architectural installations. Ultimately, I aim to become the mythic unicorn 🦄, working in both design and development.
                        </Text>
                    </Box>

                    <Box width={[1, 1 / 3]} p={0}></Box>
                </Flex>

                <NiceTable entries={engineerTableEntries} />
                {/* <Text fontSize='2' color='white' fontWeight='italic'>Partners</Text> */}
                <Flex align="center" justify="center"><Image pt={75} src={require('./public/partners.png')} /></Flex>

            </div>
        </section-flex>


        {/* --------- OTHER --------- */}
        <section-flex id="gif">
            <div>
                <Flex mx={0} flexWrap='wrap'>
                    <Box width={[1, 2 / 3]} >
                        {DividerThinPadded}
                        <Text fontSize='2' color='white' pt={20}><i>
                            When I step out on to the ice, it's an experience like no other.
                                    It's part art, part sport, both equally important. Every movement, breath, detail is scrutinized. The sport demands a mastery of the craft. A never-ending pursuit of delicate strength, creativity, and perfection. </i>
                        </Text>
                    </Box>
                </Flex>
            </div>
        </section-flex>

        {/* --------- FOOTER --------- */}
        <footer>
            {DividerThinPadded}
            <Text fontSize='1' color='white'>© Handcrafted with ❤️by Kevin Shum, 2018.</Text>
        </footer>

    </Provider >
)
render(<App2 />, document.getElementById("asdf"));