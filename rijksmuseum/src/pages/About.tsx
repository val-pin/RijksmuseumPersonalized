import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div
      style={{
        backgroundImage: `url(https://www.rijksmuseum.nl/assets/90ea9a61-b432-45b0-ac8d-c3fa04979ecb?w=2048&h=1539&fx=4995&fy=2255&format=webp&c=c08df4851fc51427e4f9ce6f63e1a48c8c599b0e76fe0bd439750f7eab162f58)`,
        height: "100vh",
        backgroundSize: "cover",
        // backgroundPosition: center;
      }}
    >
      <h2>About the Rijksmuseum</h2>
      <p>
        The Rijksmuseum is the national museum of the Netherlands. We tell the
        story of 800 years of Dutch history, from 1200 to now. In addition, we
        organize several exhibitions per year from our own collection and with
        (inter) national loans.<br></br>
        <p></p>When the Rijksmuseum first opened 200 years ago, it wasn’t in
        Amsterdam. So where did it start out? And what did Napoleon have to do
        with its relocation? The{" "}
        <Link to="https://www.rijksmuseum.nl/en/about-us/what-we-do/history">
          history
        </Link>{" "}
        of the Rijksmuseum reads like a real page-turner.
      </p>
    </div>
  );
}
