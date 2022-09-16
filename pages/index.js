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

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;