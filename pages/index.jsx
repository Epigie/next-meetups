import React from "react";
import { useState, useEffect } from "react";
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

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-meetups-2b66e-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);
  return <MeetupList meetups={loadedMeetups} />;
};

export default HomePage;
