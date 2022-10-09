import APIDEV1 from "../assets/img/events/APIDev-1.png";
import APIDev from "../assets/img/events/APIDev.png";
import APIDev_1 from "../assets/img/events/APIDev1.png";
import cloudalt from "../assets/img/events/cloudalt.jpeg";
import CloudTour2 from "../assets/img/events/CloudTour-1.png";
import CloudTour from "../assets/img/events/CloudTour.png";
import CloudTour1 from "../assets/img/events/CloudTour1.png";
import cp_session1 from "../assets/img/events/cp_session_1.jpeg";
import cp_session2 from "../assets/img/events/cp_session_2.jpeg";
import cp_session from "../assets/img/events/cp-session-1.jpeg";
import Error2Code from "../assets/img/events/Error2Code.jpeg";
import GITHUB2 from "../assets/img/events/GITHUB-1.png";
import GITHUB from "../assets/img/events/GITHUB.png";
import GITHUB1 from "../assets/img/events/GITHUB1.png";
import missioncode2 from "../assets/img/events/missoncode-1.jpg";
import missioncode from "../assets/img/events/missoncode.jpg";
import missioncode1 from "../assets/img/events/missoncode1.jpg";
import nn2 from "../assets/img/events/nnl-1.jpeg";
import nn from "../assets/img/events/nnl.png";
import nn1 from "../assets/img/events/nnl1.jpeg";
import peaky from "../assets/img/events/Peakydesigners.jpeg";
import Recruitments from "../assets/img/events/Recruitments.jpeg";
import upcoming2 from "../assets/img/events/upcoming-2.jpeg";
import webdesign2 from "../assets/img/events/WeDesign-1.png";
import webdesign from "../assets/img/events/WeDesign.png";
import webdesign1 from "../assets/img/events/WeDesign1.png";
import CTF from "../assets/img/events/CTF.jpg"

export const upcoming = [
    {
        name:"Capture The Flag Challenge",
        images:[CTF]
    }
]

export const ongoing = [
    {
        name: "Recruitments 2022-2023",
        date: "15nth August 2022",
        description: `A chance to be a part of a collaborative space that encourages young programmers to actively develop professional solutions`,
        images: [Recruitments]

    }
]



export const past = [
    {
        name: "Let's Code It",
        date: "26-02-2022 to 26-03-2022",
        description: `An 8 week long eevngt covering the to expose the
        students to the domain of competitive programming. Covering a wide range of
        topics covering algorithms to data structures and more, with a good mix of
        sessions and assignments.`,
        images: [cp_session1,cp_session,cp_session2]
    },
    
    {
        name: "November Notion League 2.0",
        date: "20th to 25th November 2021",
        description: ` A 5-day long event consisting of 5 tracks focussing on different domains of
        technology ranging from coding, web design, digital forensics, AI/ML, to ideation.`,
        images: [nn2,nn,nn1]
    },
    {
        name: "WeDesign",
        date: "10-04-2021",
        description: ` WeDesign was a front-end development workshop. We focused on teaching
        participants how to build a one-page website using pure HTML, CSS, and JavaScript, and how to use the
        TMDB API for their data. Created a searchable movie website and hosted it on Github pages.`,
        images: [webdesign2,webdesign,webdesign1]
    },
    {
        name: "API Development Workshop",
        date: "01-05-2021 to 02-05-2021",
        description: `A 2-day workshop about backend API development, covering both the
        theoretical and practical aspects of the same. It covered hands-on development of APIs using 2 popular
        frameworks: Flask (Python) and .NET (C#).`,
        images: [APIDEV1,APIDev,APIDev_1]
    },
    {
        name: "The Cloud Tour",
        date: "10-10-2021",
        description: `This event was based on Cloud Computing using Microsoft Azure cloud
        services. The participants worked together with the speaker and created a Virtual Machine using Azure
        and deployed it as a static website on Azure Portal. In addition to this, the application procedure for
        Microsoft Learn Student Ambassador Program was also unfurled.`,
        images: [cloudalt,CloudTour,CloudTour1]
    },
    {
        name: "Introduction to Git & Github",
        date: "16-10-2021",
        description: `This was a hands-on workshop on Git, Github and Azure and static web apps.
        Basic terminologies related to Git, GitHub, Azure Cloud Platform, Azure Static webpage services were
        covered.`,
        images: [GITHUB2,GITHUB,GITHUB1]
    },
    {
        name: "MISSION CODE",
        date: "26.05.2021 - 29.05.2021",
        description: `MISSION CODE was a 3-day event from 26th - 29th May 2021 which comprised of
        2 questions each day starting at 12 noon. Each participant was given 24 hours to answer the questions,
        cumulatively the participants attempted 6 questions over the period of three days.`,
        images: [missioncode1,missioncode,missioncode2]
    },
]