import React from "react";
import { Col } from "react-bootstrap";
import { WebImage } from "../types/CustomTypes";
import { Link } from "react-router-dom";

type ArtworkCardProps = {
  longTitle: string;
  webImage: WebImage;
  objectNumber: string;
};

export default function ArtworkCard({
  longTitle,
  webImage,
  objectNumber,
}: ArtworkCardProps) {
  return (
    <Col>
      <div className="card">
        <img src={webImage.url} alt={`picture of the paiting ${longTitle}`} />
        <p>{longTitle}</p>
        <p>
          <Link to={`${objectNumber}`}>see details</Link>
          {/* The code below is just an example about how to redirect WITHOUT react router..:DO NOT USE!!! */}
          {/* <a href={`/detailsPageFromWork/${artwork.objectNumber  }`}>More information</a> 

          Collection API

            https://www.rijksmuseum.nl/api/nl/collection?key=[api-key]&involvedMaker=Rembrandt+van+Rijn

          Collection Details API

            https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=[api-key]

        */}
        </p>
      </div>
    </Col>
  );
}
