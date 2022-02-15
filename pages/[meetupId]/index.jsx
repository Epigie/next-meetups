import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";

const meetup = {
  id: "m1",
  title: "Meetup One",
  image:
    "https://yt3.ggpht.com/ytc/AKedOLSyAdQwVXXJbAG8WKUUjEdZ90qPDm8GKvJBGAIkuQ=s900-c-k-c0x00ffffff-no-rj",
  address: "Address one",
  description: "Description one",
};

const MeetupDetailsPage = () => {
  return <MeetupDetails meetup={meetup} />;
};

export default MeetupDetailsPage;
