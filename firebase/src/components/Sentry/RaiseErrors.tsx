"use client";

import { useState } from "react";
import { Button } from "../Buttons";
import Loading from "@/app/loading";
import { Snackbar } from "../Feedback/Snackbar";

export function RaiseErrors() {
  const [isLoading, setIsLoading] = useState(false);
  const [snakMessage, setSnackMessage] = useState("");

  function handleFrontEndError() {
    setSnackMessage("Front-end error raised, check the logs on Sentry.io");
    throw new Error("Front-end error raised from button click");
  }

  async function handleBackEndError() {
    setIsLoading(true);
    await fetch("api/sentry");
    setIsLoading(false);
    setSnackMessage("Back-end error raised, check the logs on Sentry.io");
  }

  function handleSnakClose() {
    setSnackMessage("");
  }

  return (
    <div>
      {isLoading && <Loading />}
      <Snackbar open={!!snakMessage} message={snakMessage} onClose={handleSnakClose} type="success" />
      <h2 className="mb-4 text-2xl font-bold">Sentry</h2>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button onClick={handleFrontEndError}>Front-End Error</Button>
        <Button onClick={handleBackEndError}>Back-End Error</Button>
      </div>
    </div>
  );
}
