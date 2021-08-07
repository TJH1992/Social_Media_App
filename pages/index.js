import React from "react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";

function Index({ user, userFollowStats }) {
  console.log({ user, userFollowStats });
  return <div>Homepage</div>;
}

Index.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

    const { name } = ctx.query;
    console.log(name);

    return { posts: res.data };
  } catch (error) {
    return { errorLoading: true };
  }
};

export default Index;
