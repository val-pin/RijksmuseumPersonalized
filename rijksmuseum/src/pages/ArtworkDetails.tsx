import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArtObjectType, DetailsFetchResult } from "../types/CustomTypes";
import { AuthContext } from "../context/AuthContext";
import CommentsSection from "../components/CommentsSection";
import ProtectedRoute from "../components/ProtectedRoute";
import ErrorPage from "./ErrorPage";
import { Button } from "react-bootstrap";
// import CommentsSection from "../components/CommentsSection";

type Props = {};

export default ArtworkDetails;

function ArtworkDetails({}: Props) {
  const { objectNumber } = useParams();

  const { user } = useContext(AuthContext);

  console.log("objectNumber :>> ", objectNumber);

  const [artwork, setArtwork] = useState<ArtObjectType | null>(null);

  const [scale, setScale] = useState<1 | 5>(5);

  const fetchArtworkDetails = async () => {
    try {
      const response = await fetch(
        `https://www.rijksmuseum.nl/api/en/collection/${objectNumber}?key=sR8nRxDt`
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }

      const data = (await response.json()) as DetailsFetchResult;

      setArtwork(data.artObject);
      console.log("data :>> ", data);
      console.log("aquisition date :>> ", data.artObject.acquisition.date);
      console.log("aquisition date :>> ", data.artObject.artistRole);
      console.log("art object page :>> ", data.artObjectPage.audioFile1);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    fetchArtworkDetails();
  }, []);
  if (!artwork) {
    return <h4>..loading..</h4>;
  }
  return (
    <div style={{ marginBottom: "1rem" }}>
      <h4>{artwork.label.makerLine}:</h4> <h4>{artwork.title}</h4>
      {/* <p>Materials: {artwork.materials}</p> */}
      <p>{artwork.plaqueDescriptionEnglish}</p>
      {/* <p>
        artist role :{" "}
        {artwork.artistRole ? artwork.artistRole : "No artist role"}
      </p> */}
      <p>Acquisition date: {artwork.acquisition.date}</p>
      <img
        src={artwork.webImage.url}
        alt={`picture of the paiting ${artwork.longTitle}`}
        // style={{ width: "300px", height: "400px" }}
        height={artwork.webImage.height / scale}
        width={artwork.webImage.width / scale}
      />
      <div style={{ marginBottom: "1rem" }}>
        <Button
          variant="info"
          onClick={() => setScale((s) => (s === 1 ? 5 : 1))}
        >
          🔎
        </Button>
      </div>
      <ProtectedRoute message={"You need to login to see comments!"}>
        {/* pass the object number as props to CommentsSection*/}
        <CommentsSection />
      </ProtectedRoute>
    </div>
  );
}
