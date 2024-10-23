"use client";

import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const TwitterEmbed = () => {
  return (
    <div className="mt-16 space-y-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0">
      <TwitterTweetEmbed tweetId="1179490012217262080" />
      <TwitterTweetEmbed tweetId="1270766885152440322" />
      <TwitterTweetEmbed tweetId="1190262890856624129" />
      <TwitterTweetEmbed tweetId="1221952233312571392" />
      <TwitterTweetEmbed tweetId="1224255205807730688" />
      <TwitterTweetEmbed tweetId="1204031748700545029" />
      <TwitterTweetEmbed tweetId="1255473992099561474" />
      <TwitterTweetEmbed tweetId="1204116859840344066" />
    </div>
  );
};

export default TwitterEmbed;
