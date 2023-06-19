"use client";

import { useState } from "react";
import { Button } from "../Buttons";
import Loading from "@/app/loading";

export function RaiseErrors() {
  const [isLoading, setIsLoading] = useState(false);

  function handleFrontEndError() {
    throw new Error("Front-end error raised from button click");
  }

  async function handleBackEndError() {
    setIsLoading(true);
    await fetch("api/sentry");
    setIsLoading(false);
  }

  return (
    <div>
      {isLoading && <Loading />}
      <h2 className="mb-4 text-2xl font-bold">Sentry</h2>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button onClick={handleFrontEndError}>Front-End Error</Button>
        <Button onClick={handleBackEndError}>Back-End Error</Button>
      </div>
    </div>
  );
}
