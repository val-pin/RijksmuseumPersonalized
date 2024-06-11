import React, { ChangeEvent, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArtworkCard from "../components/ArtworkCard";
import { Artwork } from "../types/CustomTypes";

const ArtworksList = () => {
  const [artworks, setArtworks] = useState<Artwork[] | null>(null);
  const [artistName, setArtistName] = useState("floral%20still%20life");

  const getArtworks = async () => {
    try {
      const response = await fetch(
        `https://www.rijksmuseum.nl/api/en/collection?key=sR8nRxDt&imgonly=True&p=1&ps=15&q=${artistName}`
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      const artData = data.artObjects as Artwork[];
      console.log("artData :>> ", artData);
      setArtworks(artData);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  //Create function that updates the value of artistName when the user types

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    //  console.log('e.target.value :>> ', e.target.value);
    setArtistName(e.target.value);
  }
  // function handleCheckboxClick(e: MouseEvent<HTMLInputElement>) {
  //   console.log("e.target.name :>> ", (e.target as HTMLInputElement).name);
  // }

  useEffect(() => {
    getArtworks();
  }, [artistName]);

  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <input type="text" onChange={handleInputChange} />
      </div>
      {/* <label htmlFor="vincent">vincent</label>
      <input
        type="checkbox"
        name="vincent"
        id="vincent"
        onClick={handleCheckboxClick}
      /> */}
      {/* {console.log("artworks in jsx", artworks)} */}
      <Container>
        <Row>
          {artworks?.map((artwork) => {
            return (
              <ArtworkCard
                longTitle={artwork.longTitle}
                webImage={artwork.webImage}
                objectNumber={artwork.objectNumber}
                key={artwork.objectNumber}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ArtworksList;
