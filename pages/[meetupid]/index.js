import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";
import { Fragment } from 'react';

function MeetupDetails() {
    return (
        <Fragment>
        <Head>
            <title>{props.meetupData.title}</title>
            <meta name='description'
                content={props.meetupData.description} />
        </Head>
        <MeetupDetail
            image='https://en.wikipedia.org/wiki/John_Wick_(film)#/media/File:John_Wick_TeaserPoster.jpg'
            title='A first meetup'
            address='Athens, Greece'
            description='This is a First meetup!'
            />
        </Fragment>
    );
}

// for dynamic pages
export async function getStaticPaths() {

    const client = await MongoClient.connect(
        "mongodb+srv://dev-git:reactmeetup@clustersandbox.blnwdno.mongodb.net/meetup"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.findOne({_id: meetupId }).toArray();

    client.close();

    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: { meetupId: meetup._id.toString() },
        })),
    };
}

export async function getStaticProps(context) {
// fetch data for a single meetup
    
const meetupId = context.params.meetupId;

const client = await MongoClient.connect(
    "mongodb+srv://dev-git:reactmeetup@clustersandbox.blnwdno.mongodb.net/meetup"
);
const db = client.db();

const meetupsCollection = db.collection("meetups");

const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
});

console.log(selectedMeetup);

client.close();    
    
    return {
        props: {
            meetupData: {
            id: selectedMeetup._id.toString(),
            title: selectedMeetup.title,
            address: selectedMeetup.address,
            image: selectedMeetup.image,
            description: selectedMeetup.description,
            },
        },
    };
}

export default MeetupDetails;