import React from 'react';
import "../sass/main.scss"

function LinkHeader(props) {
    return <div className="LinkHeader">
        <a href={props.link} target="_blank"><b>{props.title}</b></a>
    </div>;

}

export const HomeLinkHeaders =
    <div>
        {/* <LinkHeader title="KEVIN SHUM"
            link="http://mitadmissions.org/blogs/profile/kshum"
        /> */}
        <LinkHeader title="SCHOLAR"
            link="http://mitadmissions.org/blogs/profile/kshum"
        />
        <LinkHeader title="ATHLETE"
            link="http://www.isuresults.com/bios/isufs00034586.htm"
        />
        <LinkHeader title="ENGINEER"
            link="http://kevinshum.com/portfolio"
        />
    </div>;