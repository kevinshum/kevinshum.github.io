import React from "react";
import { render } from "react-dom";
import "./sass/main.scss"
import 'react-select/dist/react-select.css';
import Multiselect from './components/multiselect';
import { HomeLinkHeaders } from "./components/text";
// import { DividerThick2 } from "./components/ui";
import Grid from 'react-css-grid';

import { injectGlobal } from 'styled-components'
import profile from './profile.png';

import vision from './public/3dvision.pdf';
import photo from './public/profile.png';
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

const DividerRealThick =
    <Divider
        w={1}
        border={8}
        borderColor='#3A3A3A'
    />;
const DividerThick =
    <Divider
        w={1}
        border={6}
        borderColor='#3A3A3A'
    />;

const DividerThinPadded =
    <Box mt={80}>
        <Divider
            w={1}
            border={3}
            borderColor='black'
        />
    </Box >;

function SectionHeading(props) {
    return <div>
        {DividerThick}
        <Text fontSize='5' color='black' fontWeight='bold'>{props.title}</Text>
    </div>;
}

function NiceButton(props) {
    const buttonLink = props.link;
    const buttonTitle = props.title;
    const buttonLinkTarget = props.target;
    return <a href={buttonLink} target={buttonLinkTarget}><button class="button" ><span>{buttonTitle}</span></button></a>;
}

const LINK_TARGET = {
    IN_PAGE: "_top",
    NEW_TAB: "_blank"
}
function NiceLink(props) {
    let linkHref = "https://" + props.link;
    const linkTitle = props.title;
    const linkTarget = props.target;
    // if (!props.link.includes('.pdf')) linkHref = props.link;
    return <a href={linkHref} target={LINK_TARGET.NEW_TAB}>{linkTitle}</a>;
    // < a href={linkHref} target="_blank" >{linkTitle}</a >;

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
        <Text fontSize='2' color='black' fontWeight='bold'>{columnTitle}</Text>
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

const writingLinks = [
    ["Skating or School?",
        "mitadmissions.org/blogs/entry/skating-or-school"],
    ["Around the World in 30 Days",
        "mitadmissions.org/blogs/entry/around-the-world-in-30-days "],
    ["RecomMITted",
        "mitadmissions.org/blogs/entry/ring-delivery-2019 "]
];

const paperLinks = [
    ["Global Alignment of Meshes for the Microsoft HoloLens",
        "", ""],
    ["Mobile Banking Usability Study",
        "", "Mobile apps have increasingly become the preferred method of banking, as clients are able to access their accounts and conduct transactions at their convenience, anytime and anywhere. Due to the widening scope and adoption of mobile banking, the usability of such interfaces becomes increasingly important as a focus of study and directly impacts the user experience of clients across all demographics. With the oppor- tunity to test the latest XXX iOS mobile banking app prototype, we focus on usability of the user interface and the payments workflow. We seek to uncover possible usability issues and discover new ways to improve payments on the mobile platform from an international point of view. For the study, we tested the prototype with thirteen participants spanning relationship managers and multinational university students. Our findings suggest that simplicity, efficiency, and contextual convenience are of the highest priority when designing banking experiences on the mobile platform. We conclude with recommendations for the final design of the interface and underscore the importance of aligning the feature set to the purpose of mobile banking, error prevention, and educating the users on new design and functionality."],
    ["The Hypermasculine Ideal: Rebranding and Reconstructing Male Figure Skating Identity",
        "", ""],
    ["A Comparative Study of Eisenhower’s Cold War and Bush’s War on Terror Rhetoric",
        "", ""]
];

const keynoteLinks = [
    ["MIT Global Teaching Labs, Germany",
        "mitadmissions.org/blogs/entry/skating-or-school"],
    ["Model View Controller",
        "mitadmissions.org/blogs/entry/around-the-world-in-30-days "],
    ["Symposium",
        "mitadmissions.org/blogs/entry/ring-delivery-2019 "],
    ["HCI stuff",
        "mitadmissions.org/blogs/entry/ring-delivery-2019 "]
];

const pressLinks = [
    ["Wikipedia", "en.wikipedia.org/wiki/Kevin_Shum"],
    ["Getty Images", "gettyimages.com/photos/kevin-shum?autocorrect=none&editorialproducts=sport&family=editorial&phrase=kevin%20shum&sort=best#license"],
    ["International Skating Union", "isuresults.com/bios/isufs00034586"],
    ["Diablo Magazine", "diablomag.com/January-2017/2018-Winter-Olympics-Hopeful/"],
    ["Associated Press", "redbluffdailynews.com/2016/01/21/bay-area-teen-takes-junior-silver-at-us-figure-skating-championships/"],
    ["Times Herald News", "timesheraldonline.com/article/zz/20150301/NEWS/150309991"],
    ["Oakland Tribune", "eastbaytimes.com/2015/02/26/piedmont-skater-competing-in-world-junior-championship/"],
    ["Mercury News", "mercurynews.com/2015/01/28/piedmontmontclair-around-the-horn-piedmonts-kevin-shum-shines-in-figure-skating/"],
    ["The Tech", "thetech.com/2017/02/16/figure-skating-hosts-competition"],
    ["Squarespace", "youtube.com/watch?v=9dxua41fAgo"]
];

const skatingBioLinks = [["International Skating Union", "isuresults.com/bios/isufs00034586.htm"]];

const skatingResultsLinks = [
    ["2018 Collegiate Championships — 1st", "facebook.com/153175814722275/photos/ms.c.eJwzMjAwNDI2MjAyM7UwNjYw0jOCChgaG5lYWpobAABt2waD.bps.a.1998564043516767/2001232026583302/?type=3&theater"],
    ["2017 Collegiate Championships — 1st", "facebook.com/153175814722275/photos/a.383980671641787/1950514051655100/?type=3&theater"],
    ["2016 US Championships, Junior — 2nd", "isuresults.com/bios/isufs00034586.htm"],
    ["2015 US Championships, Junior — 2nd", "isuresults.com/bios/isufs00034586.htm"],
    ["2015 World Junior Championships — 20th", "isuresults.com/bios/isufs00034586.htm"],
    ["2016 Junior Grand Prix, Ostrava — 7th", "isuresults.com/bios/isufs00034586.htm"],
    ["2015 Junior Grand Prix, Bratislava — 9th", "isuresults.com/bios/isufs00034586.htm"],
    ["2014 Junior Grand Prix, Nagoya — 7th", "isuresults.com/bios/isufs00034586.htm"],
];

const skatingPerformancesLinks = [
    ["2016-2017", "Skating Club at Dartmouth Skating Spectacular", "to support Skating Club at Dartmouth and Children's Hospital at Dartmouth"],
    ["2015-2018", "An Evening with Champions", "organized by Harvard University to support the Jimmy Fund and Dana-Farber Cancer Institute"],
    ["2015-2017", "MIT Winter Exhibition", " "],
    ["2016", "Skating Stars of the Future at Rockefeller Center", " "],
    ["2016", "Skating Club of Boston: Ice Chips", " "]
]

const engineeringProjectLinks = [
    ["Microsoft Hackathon: OneBoarding", ""],
    ["ETH Zürich Human-Computer Interaction: Usability Study", ""],
    ["ETH Zürich 3D Vision: Global Alignment of Meshes for the Microsoft Hololens", ""],
    ["MIT Media Lab: Spaces that Perform Themselves", "kevinshum.com/portfolio/#opera"],
    ["Interconnected Embedded Systems - BitHunt", ""],
    ["Sports Technology - Machine Learning on Sports Analytics Data", ""],
    ["Digital & Computational Photography - Painterly Rendering", ""],
    ["Resume", "dropbox.com/s/uiuztygpnz9vyua/Kevin_Shum_MIT_2018_Resume.pdf"],
    ["Portfolio", "kevinshum.com/portfolio"]
];
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
            10, 12, 18, 25, 30, 50
        ]
    }}>

        {/* <section-flex id="header" class="active" href="javascript:void(0)"> */}
        <section-flex id="header" justify-content="space-between">
            <Box pt="8%" />

            {/* {DividerRealThick} */}
            <Flex justifyContent="space-between" flexWrap='wrap' mx="auto">
                <Box pr={[0, 0, 0, 5]}>
                    <a href="#top" target={LINK_TARGET.IN_PAGE}><h1>KEVIN SHUM</h1></a>
                </Box>
                <Box pt={1} pr={[0, 0, 0, 0]}>
                    MIT Engineer<br />
                    Collegiate Champion <br />
                    Unicorn <br />
                    Tidbits <br />

                    {/* MIT Engineer /
                    Collegiate Champion
                    / Unicorn /
                    Tidbits <br /> */}
                </Box>
            </Flex>

            <Box pt="5%" />


            <Flex flexWrap='wrap' pt={50}>
                <Box width={[1, 1, 1, 2 / 3]} p={0}>
                    <Text fontSize='2'>
                        Born and raised in the San Francisco Bay Area, Kevin revises Computer Science at MIT, Class of 2019. This past summer, he worked at Microsoft as a Software Engineer Intern in Azure Compute.
            </Text>
                    <Text pt='1em' fontSize='2'>
                        Kevin is the two-time reigning US Collegiate Champion in figure skating, and has traveled the nation and world as a member of Team USA. 🇺🇸
            </Text>
                </Box>
            </Flex>
        </section-flex>


        {/* <div class="center float"> */}
        {/* <Button mt={10} children='Kevin Shum' font-size='3' lineHeight='2' /> */}
        {/* <NiceButton title="KEVIN SHUM " target={LINK_TARGET.IN_PAGE} link="#top" /> */}
        {/* <a href="#top" target={LINK_TARGET.IN_PAGE}><button class="button large" >KEVIN SHUM</button></a> */}
        {/* <a href="#top"><img src={require('./public/banner.png')} width="300" /></a> */}
        {/* </div> */}

        {/* {Intro} */}


        {/* --------- SCHOLAR --------- */}
        {/* <NiceSectionWithTable id="scholar" desc={scholarSectionDescription} tableEntires={scholarTableEntries} /> */}

        <section-flex id="scholar">
            <div class="content">

                <SectionHeading title="MIT COMPUTER SCIENCE" />

                <Flex flexWrap='wrap' pt={50}>
                    <Box width={[1, 1, 1, 2 / 3]} p={0}>
                        <Text fontSize='2'>
                            I'm a senior at <NiceLink title="MIT" link="web.mit.edu/" />, Class of 2019, studying Computer Science and concentrating in Theater Arts. I spent Spring 2018 abroad at <NiceLink title="ETH Zürich" link="ethz.ch/" /> in Switzerland, on the inaugural MIT EECS x ETH exchange program. 📚

                        </Text>
                    </Box>

                    <Box width={[1, 1 / 3]} p={0}></Box>
                </Flex>

                {/* <NiceTable entries={scholarTableEntries} /> */}

                {DividerThinPadded}
                <Flex flexWrap='wrap' mx="auto" >
                    <Box width={[1, 1, 1, 1 / 3]} pt={30} pr={[0, 0, 0, 5]}>
                        <Text fontSize='3' color='black' fontWeight='bold'>Writing</Text>
                        <Box pt={25} >
                            <list>
                                {writingLinks.map(column => <li><NiceLink title={column[0]} link={column[1]} /></li>)}
                            </list>
                        </Box>
                    </Box>
                    <Box width={[1, 1, 1, 1 / 3]} pt={30} pr={[0, 0, 0, 5]}>
                        <Text fontSize='3' color='black' fontWeight='bold'>Papers</Text>
                        <Box pt={25} >
                            <list>
                                {paperLinks.map(column => <li><NiceLink title={column[0]} link={column[1]} /> <i>{column[2]}</i></li>)}
                            </list>
                        </Box>
                    </Box>
                    <Box width={[1, 1, 1, 1 / 3]} pt={30} pr={[0, 0, 0, 5]}>
                        <Text fontSize='3' color='black' fontWeight='bold'>Keynotes</Text>
                        <Box pt={25} >
                            <list>
                                {keynoteLinks.map(column => <li><NiceLink title={column[0]} link={column[1]} /></li>)}
                            </list>
                        </Box>
                    </Box>
                </Flex>
            </div>
        </section-flex >

        {/* --------- ATHLETE --------- */}

        <section-flex id="athlete">
            <div class="content">
                <SectionHeading title="COLLEGIATE CHAMPION" />


                <Flex flexWrap='wrap' pt={50}>
                    <Box width={[1, 1, 1, 2 / 3]} p={0}>
                        <Text fontSize='2'>
                            Since I was 6, my dream was to become a professional figure skater — skating as fast as I can, executing the fastest spins and biggest tricks, competing and performing around the world. 15 years later, I'm still lucky enough to pursue my greatest passion while balancing a full-time workload at MIT.
                            <br /> <br />
                            Along the way, I've competed on <NiceLink title="Team USA" link="isuresults.com/bios/isufs00034586.htm" />, traveling throughout the world on the Junior Grand Prix Circuit and even the World Junior Team. I've picked up two US junior men's silver medals and two consecutive <NiceLink title='US Collegiate Championship' link="facebook.com/153175814722275/photos/ms.c.eJwzMjAwNDI2MjAyM7UwNjYw0jOCChgaG5lYWpobAABt2waD.bps.a.1998564043516767.1073741856.153175814722275/2001232026583302/?type=3&theater" /> titles.
                            <br /> <br />
                            Outside of training and competing, I also serve on the <NiceLink title='US Figure Skating Singles Committee' link='usfsa.org/story?id=84020&menu=leadership' />.  ⛸</Text>
                    </Box>

                    <Box width={[1, 1 / 3]} p={0}></Box>
                </Flex>

                {/* <NiceTable entries={athleteTableEntries} /> */}
                {DividerThinPadded}
                <Flex flexWrap='wrap' mx="auto" >
                    <Box width={[1, 1, 1, 1 / 3]} pt={30} pr={[0, 0, 0, 5]}>
                        <Text fontSize='3' color='black' fontWeight='bold'>Performances</Text>
                        <Box pt={25} >
                            <list>
                                {skatingBioLinks.map(column => <li><NiceLink title={column[0]} link={column[1]} /></li>)}
                            </list>
                        </Box>
                    </Box>
                    <Box width={[1, 1, 1, 1 / 3]} pt={30} pr={[0, 0, 0, 5]}>
                        <Text fontSize='3' color='black' fontWeight='bold'>Results</Text>
                        <Box pt={25} >
                            <list>
                                {skatingResultsLinks.map(column => <li><NiceLink title={column[0]} link={column[1]} /></li>)}
                            </list>
                        </Box>
                    </Box>
                    <Box width={[1, 1, 1, 1 / 3]} pt={30} pr={[0, 0, 0, 5]}>
                        <Text fontSize='3' color='black' fontWeight='bold'>Charity</Text>
                        <Box pt={25} >
                            <list>
                                {skatingPerformancesLinks.map(column => <li><NiceLink title={column[0] + " " + column[1]} link={""} /> {column[2]}</li>)}
                            </list>
                        </Box>
                    </Box>
                </Flex>
            </div>

        </section-flex>

        {/* --------- ENGINEER --------- */}
        {/* <Box
            px={[10, 10, 10, '30em']}
            py={[10, 10, 10, '30em']}
            color='white'
            bg='blue'>
            Hello
        </Box> */}
        <section-flex id="engineer">
            <div class="content">
                <SectionHeading title="UNICORN" />

                <Flex flexWrap='wrap' pt={50}>
                    <Box width={[1, 1, 1, 2 / 3]} p={0}>
                        <Text fontSize='2'>
                            At MIT, I've been able to pursue my other passion, computer science. It all started in high school, when I learned how to program with BYOB in Joy of Computing. From there I've worked with all sorts of hardware and software systems, both front- and back-end, hardware and software, from iOS apps to IoT-connected robotic furniture, from distributed systems to multisensory architectural installations. Ultimately, I aim to become the <i>mythic unicorn</i>, working in both design and development. 🦄
                        </Text>
                    </Box>
                </Flex>

                {DividerThinPadded}
                <Flex flexWrap='wrap' mx="auto" >
                    <Box width={[1, 1, 1, 1 / 2]} pt={30} pr={[0, 0, 0, 5]}>
                        <Text fontSize='3' color='black' fontWeight='bold'>Roles</Text>
                        <Box pt={25} >
                            <list>
                                <li><NiceLink title="Microsoft" link="microsoft.com" /><br />
                                    Software Engineering Intern, Azure Compute
                                    <br /><i>Summer 2018</i>
                                </li>
                                <li><NiceLink title="MIT Media Lab" link="media.mit.edu" /><br />
                                    Undergraduate Researcher, Opera of the Future
                                    <br /><i>Summer & Fall 2017</i>
                                </li>
                                <li><NiceLink title="Priceline" link="priceline.com" /><br />
                                    Mobile Engineering Intern, iOS
                                    <br /><i>Winter 2017</i>
                                </li>
                                <li><NiceLink title="Ori Systems" link="orisystems.com" /><br />
                                    Software Engineering Intern, Mobile
                                    <br /><i>Summer 2016</i>
                                </li>
                            </list>
                        </Box>
                    </Box>
                    <Box width={[1, 1, 1, 1 / 2]} pt={30} pr={[0, 0, 0, 5]}>
                        <Text fontSize='3' color='black' fontWeight='bold'>Portfolio</Text>
                        <Box pt={25} >

                            <list>
                                {engineeringProjectLinks.map(column => <li><NiceLink title={column[0]} link={column[1]} /></li>)}
                            </list>
                        </Box>
                    </Box>
                </Flex>


                <Flex align="center" justify="center"><Image pt="7em" src={require('./public/partners.png')} /></Flex>
                {/* <Text fontSize='1' color='white' fontWeight='italic'>                            <br /><br /> I also have worked on client cases with <NiceLink title="MIT Consulting Group" href="consulting.mit.edu" /> and have collaborated with other brands, from <NiceLink title="Squarespace" link="squarespace.com" /> to <NiceLink title="Credit Suisse" link="credit-suisse.com/" /> in various design and development capacities as well.
</Text> */}

            </div>
        </section-flex>

        {/* --------- TIDBITS --------- */}
        <section-flex id="bio">
            <div class="content">
                <SectionHeading title="TIDBITS" />

                <Flex flexWrap='wrap' pt={50}>
                    <Box width={[1, 1, 1, 2 / 3]} p={0}>
                        <Text fontSize='2'>
                            Outside of scholarship, athletics, and engineering, I've been featured in a world-wide <NiceLink title="ad campaign" link="kevinshum.com/portfolio/#you-should-squarespace" />, been celebrated with my own <NiceLink title="day" link="kevinshum.com/s/kevin-shum-day-31615day" />,, organized a <NiceLink title="career fair" link="xfair.io" />, voted and debated legislation at a <NiceLink title="national convention" link="beta.org/programs/general-convention/" />, worked in a <NiceLink title="law firm" link="sinclairlawoffice.com" />, led tours of my <NiceLink title="department" link="eecs.mit.edu" /> and a <NiceLink title="pre-orientation program" link="eecs.mit.edu/outreach/discover-ee" />,  and <NiceLink title="taught computer science" link="misti.mit.edu/global-teaching-labs" /> at a high school in Germany. I love to travel and blog about my adventures for <NiceLink title="MIT Admissions" link="mitadmissions.org/blogs/author/kshum/archives" />.
                            <br /><br />
                            For my studies, training, and work, I've had the opportunity to explore the world, over 25 countries and counting—from Estonia to Japan, to Hong Kong to the Switzerland. Here's to more adventures to come! 🗺
                            <br />

                        </Text>
                    </Box>
                </Flex>

                {DividerThinPadded}
                <Flex flexWrap='wrap' mx="auto" >
                    <Box width={[1, 1, 1, 1 / 2]} pt={30} pr={[0, 0, 0, 5]}>
                        <Text fontSize='2' color='black' fontWeight='bold'>Extracurricular</Text>
                        <Box pt={25} >
                            <list>
                                <li>Blogger, <NiceLink title="MIT Admissions" link="mitadmissions.org/blogs/author/kshum/archives" />
                                </li>
                                <li>Consultant, <NiceLink title="MIT Consulting Group" link="consulting.mit.edu" />
                                </li>
                                <li>Instructor, <NiceLink title="MIT Global Teaching Labs, Germany" link="misti.mit.edu/global-teaching-labs" />
                                </li>
                                <li>Former Chapter President, <NiceLink title="Beta Theta Pi" link="beta.mit.edu" />
                                </li>
                                <li>xFair & SpecialX Committees, <NiceLink title="TechX" link="techx.io/" />
                                </li>
                                <li>Counselor & Tour Guide, <NiceLink title="MIT EECS" link="eecs.mit.edu" />
                                </li>

                            </list>
                        </Box>
                    </Box>
                    <Box width={[1, 1, 1, 1 / 2]} pt={30} pr={[0, 0, 0, 5]}>
                        <Text fontSize='2' color='black' fontWeight='bold'>Media</Text>
                        <Box pt={25} >
                            <list>
                                <li>
                                    <NiceLink title="Kevin Shum Day" link="kevinshum.com/s/kevin-shum-day-31615" />, 16 March 2015, City of Piedmont
                                </li>
                                <li>
                                    <NiceLink title="Skating Club of Boston" link="scboston.org/membership-information/club-awards/club-award-the-robert-l-black-memorial-award/" />
                                </li>
                                {pressLinks.map(column => <li><NiceLink title={column[0]} link={column[1]} /></li>)}
                            </list>
                        </Box>
                    </Box>
                </Flex>

            </div>
        </section-flex>

        {/* --------- OTHER --------- */}
        <section-flex id="gif">
            <div>
                <Flex mx={0} flexWrap='wrap'>
                    <Box width={[1, 2 / 3]} >
                        {DividerThinPadded}
                        <Text fontSize='2' color='black' pt={20}>
                            <i>
                                When I step out on to the ice, it's an experience like no other. It's part art, part sport. It's elegance. It's strength. It's expressing yourself, stretching your creativity. It's spinning faster, jumping higher, skating stronger. Blades against ice, it's a taste of freedom. For over 15 years, I've relentlessly pursued my passion. It's brought me the greatest joys, the greatest sorrows. I've met the most incredible people, traveling across the country and world. Skating has been everything to me.
                            </i>
                        </Text>
                        <Text fontSize='2' color='black' pt={20}>
                            <i>

                            </i>
                        </Text>
                        <Text fontSize='2' color='black' pt={20}>
                            <i>

                            </i>
                        </Text>
                    </Box>
                </Flex>
            </div>
        </section-flex>

        {/* --------- FOOTER --------- */}
        <footer>
            <Flex mx={0} flexWrap='wrap'>




                <Box width={[1, 2 / 3]} >
                    <NiceButton title="Say Hello! 👋 " target={LINK_TARGET.IN_PAGE} link="mailto:kshum@mit.edu?Subject=Hello%20from%20kevinshum.com" />
                </Box>
                <Box width={[1, 2 / 3]} >
                    <a href="http://instagram.com/kevinshum" target={LINK_TARGET.NEW_TAB}><button class="button" ><span>Find me on Instagram 📷</span></button></a>
                </Box>
                <Box width={[1, 2 / 3]} >
                    <a href="https://www.linkedin.com/in/mrkevinshum/" target={LINK_TARGET.NEW_TAB}><button class="button" ><span>Add me on LinkedIn 💼</span></button></a>
                </Box>

            </Flex>

            {DividerThinPadded}
            <Text fontSize='2' color='black'>© Handcrafted with ❤️in Seattle, 2018.</Text>
        </footer>

    </Provider >
)
render(<App2 />, document.getElementById("asdf"));