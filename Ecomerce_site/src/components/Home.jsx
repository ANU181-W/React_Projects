import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Card from "./Card";
import Loader from "./Loader";

const Home = () => {
  const URL = "https://fakestoreapi.com/products";
  const [loading, Setloading] = useState(false);
  const [posts, Setposts] = useState([]);
  const Fetch_data = async () => {
    Setloading(true);
    try {
      let res = await fetch(URL);
      let data = await res.json();
      console.log(data);
      Setposts(data);
    } catch (error) {
      toast.loading("something went wrong...");

      Setposts([]);
    }
    Setloading(false);
  };
  useEffect(() => {
    Fetch_data();
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : posts.length > 0 ? (
        <div className="card-container">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="not-found">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
