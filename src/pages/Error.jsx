import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  console.error("An error occurred:", error);

  const errorMessage = error?.statusText || error?.message || "Unknown error";

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>An unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}

export default ErrorPage;