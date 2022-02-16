import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "Meetup One",
    image:
      "https://yt3.ggpht.com/ytc/AKedOLSyAdQwVXXJbAG8WKUUjEdZ90qPDm8GKvJBGAIkuQ=s900-c-k-c0x00ffffff-no-rj",
    address: "Address one",
    description: "Description one",
  },
  {
    id: "m2",
    title: "Meetup Two",
    image:
      "https://yt3.ggpht.com/ytc/AKedOLSyAdQwVXXJbAG8WKUUjEdZ90qPDm8GKvJBGAIkuQ=s900-c-k-c0x00ffffff-no-rj",
    address: "Address Two",
    description: "Description Two",
  },
  {
    id: "m3",
    title: "Meetup Three",
    image:
      "https://yt3.ggpht.com/ytc/AKedOLSyAdQwVXXJbAG8WKUUjEdZ90qPDm8GKvJBGAIkuQ=s900-c-k-c0x00ffffff-no-rj",
    address: "Address Three",
    description: "Description Three",
  },
];

const HomeScreen = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   //fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_DATA,
//     },
//   };
// };

export const getStaticProps = async () => {
  // fetch data from API
  return {
    props: {
      meetups: DUMMY_DATA,
    },
    revalidate: 10,
  };
};

export default HomeScreen;
