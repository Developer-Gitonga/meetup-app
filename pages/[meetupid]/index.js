import { getStaticProps } from "..";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {

    return (
        <MeetupDetail
            image='https://en.wikipedia.org/wiki/John_Wick_(film)#/media/File:John_Wick_TeaserPoster.jpg'
            title='A first meetup'
            address='Athens, Greece'
            description='A Nation within the city'
        />
        
    );
}

export async function getStaticProps() {

    return {
        props: {
            meetupData: {
                image: '',
                id: 'm1',
                title: 'First Meetup',
                address: 'Athens, Greece',
                description: 'This is a first meetup',
            }
        }

    }
}

export default MeetupDetails;