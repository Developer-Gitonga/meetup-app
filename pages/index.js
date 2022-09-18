import { MongoClient } from "mongodb";
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
        title: "A Second Meetup",
        image: "https://unsplash.com/photos/RwHv7LgeC7s",
        address: "Chania, Greece",
        description: "This is a Second meetup!",
    },
];

function HomePage(props) {
    return <MeetupList meetups={props.meetups} />;
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

export async function getStaticProps() {

    //fetch data from an API
    const client = await MongoClient.connect(
        "mongodb+srv://dev-git:reactmeetup@clustersandbox.blnwdno.mongodb.net/meetup"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find().toArray();

    client.close();
    
    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        }, 
        revalidate: 1
    };
}

export default HomePage;