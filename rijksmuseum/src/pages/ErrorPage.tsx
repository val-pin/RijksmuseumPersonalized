import React from "react";
import { ErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError() as ErrorResponse;
  console.log("error :>> ", error);
  return (
    <div>
      <h3>Nothing found to display :/ </h3>
    </div>
  );
}

export default ErrorPage;
