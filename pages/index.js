import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A First Meetup",
        image:
        "https://en.wikipedia.org/wiki/John_Wick_(film)#/media/File:John_Wick_TeaserPoster.jpg",
        address: "Athens, Greece",
        description: "This is a First meetup!",
    },

    {
        id: "m2",
        title: "A First Meetup",
        image: "https://unsplash.com/photos/RwHv7LgeC7s",
        address: "Chania, Greece",
        description: "This is a Second meetup!",
    },
];

function HomePage(props) {
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        // send http request and fetch data
        setLoadedMeetups(DUMMY_MEETUPS)
        
    }, []);

    return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps() {
    //fetch data from an API
    return {
        props: {
            meetups:DUMMY_MEETUPS
        }, 
        revalidate: 10
    };
}

export default HomePage;