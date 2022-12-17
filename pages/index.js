import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    router.push("/product");
  };
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Product</Link>
      <Link href="/users">Users</Link>
      <Link href="/posts">Posts</Link>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
};

export default Home;
