import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail
            image='https://en.wikipedia.org/wiki/John_Wick_(film)#/media/File:John_Wick_TeaserPoster.jpg'
            title='A first meetup'
            address='Athens, Greece'
            description='This is a First meetup!'
        />
    );
}

// for dynamic pages
export async function getStaticPaths() {
    return {
        fallback: true,
        paths: [
            {
                params: {
                        meetupId: 'm1',
                }, 
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
        ],
    };
}

export async function getStaticProps(context) {
// fetch data for a single meetup
    
    const meetupId = context.params.meetupId;

    console.log(meetupId);
    
    return {
        props: {
            meetupData: {
            image:
                "https://en.wikipedia.org/wiki/John_Wick_(film)#/media/File:John_Wick_TeaserPoster.jpg",
            id: "meetupId",
            title: "First Meetup",
            address: "Athens, Greece",
            description: "This is a First meetup!",
            },
        },
    };
}

export default MeetupDetails;