import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import Tweet from "./Tweet";
import { Unsubscribe } from "firebase/auth";

export interface ITweet {
  id: string;
  photo?: string;
  tweet: string;
  userId: string;
  username: string;
  createdAt: number;
}

export default function Timeline() {
  const [tweets, setTweet] = useState<ITweet[]>([]);
  const fetchTweets = async () => {
    const tweetsQuery = query(
      collection(db, "tweets"),
      orderBy("createdAt", "desc")
    );
    const spanshot = await getDocs(tweetsQuery);
    const tweets = spanshot.docs.map((doc) => {
      const { tweet, createdAt, userId, username, photo } = doc.data();
      return {
        tweet,
        createdAt,
        userId,
        username,
        photo,
        id: doc.id,
      };
    });
    setTweet(tweets);
  };
  useEffect(() => {
    // let unsubscribe: Unsubscribe | null = null;
    // const fetchTweets = async () => {
    //   const tweetsQuery = query(
    //     collection(db, "tweets"),
    //     orderBy("createdAt", "desc"),
    //     limit(25)
    //   );
    //   unsubscribe = await onSnapshot(tweetsQuery, (snapshot) => {
    //     const tweets = snapshot.docs.map((doc) => {
    //       const { tweet, createdAt, userId, username, photo } = doc.data();
    //       return {
    //         tweet,
    //         createdAt,
    //         userId,
    //         username,
    //         photo,
    //         id: doc.id,
    //       };
    //     });
    //     setTweet(tweets);
    //   });
    // };
    fetchTweets();
    // return () => {
    //   unsubscribe && unsubscribe();
    // };
  }, []);

  const testTweets = [
    {
      tweet: "1",
      createdAt: "2015-02-15",
      userId: "1",
      username: "kelly",
      photo:
        "https://cdnetphoto.appphotocard.com/boards/172/2153004/6747735/c8e530d1917580d4e5ba8767f1b83dcb.jpg",
      id: "1",
    },
    {
      tweet: "1",
      createdAt: "2015-02-15",
      userId: "1",
      username: "kelly",
      id: "2",
    },
  ];

  return (
    <Wrapper>
      {testTweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
