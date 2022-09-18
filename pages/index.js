import Head from 'next/head';
import { Fragment } from 'react';
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
    return
    <Fragment>
        <Head>
            <title>React Meetups</title>
            <meta name='description'
            content='Browse a huge list of highly active React meetups!'/>
        </Head>
        <MeetupList meetups={props.meetups} />
    </Fragment>;
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     //   fetch data from an API.. data changes every second
//         return {
//             props: {
//                 meetups:DUMMY_MEETUPS
//             }
//         };
// }

export async function getStaticPaths() {
    //fetch data from an API
    const client = await MongoClient.connect(
        'mongodb+srv://dev-git:reactmeetup@clustersandbox.blnwdno.mongodb.net/meetup'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.findOne({}, { _id: 1 }).toArray();

    client.close();
    
    return {

            fallback: false,
            paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
            })),
    };
}

export async function getStaticProps(context) { 
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(
        'mongodb+srv://dev-git:reactmeetup@clustersandbox.blnwdno.mongodb.net/meetup'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.findOne({_id: meetupId });

    client.close();

    return {
        props: {
            meetupData: selectedMeetup,
            
            

        },

    };
}


export default HomePage;