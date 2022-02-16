import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";

const meetupData = {
  id: "m1",
  title: "Meetup One",
  image:
    "https://yt3.ggpht.com/ytc/AKedOLSyAdQwVXXJbAG8WKUUjEdZ90qPDm8GKvJBGAIkuQ=s900-c-k-c0x00ffffff-no-rj",
  address: "Address one",
  description: "Description one",
};

const MeetupDetailsScreen = () => {
  return (
    <MeetupDetails
      meetup={meetupData}
      id="m1"
      title="Meetup One"
      image="https://yt3.ggpht.com/ytc/AKedOLSyAdQwVXXJbAG8WKUUjEdZ90qPDm8GKvJBGAIkuQ=s900-c-k-c0x00ffffff-no-rj"
      address="Address one"
      description="Description one"
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  // fetch data for a single meetup from API

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "Meetup One",
        image:
          "https://yt3.ggpht.com/ytc/AKedOLSyAdQwVXXJbAG8WKUUjEdZ90qPDm8GKvJBGAIkuQ=s900-c-k-c0x00ffffff-no-rj",
        address: "Address one",
        description: "Description one",
      },
    },
    revalidate: 10,
  };
};

export default MeetupDetailsScreen;
