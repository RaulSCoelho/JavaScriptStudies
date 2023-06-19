"use client";

import { Button } from "../Buttons";

export function RaiseErrors() {
  function handleFrontEndError() {
    throw new Error("Front-end error raised from button click");
  }

  async function handleBackEndError() {
    await fetch("api/sentry");
  }

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Sentry</h2>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button onClick={handleFrontEndError}>Front-End Error</Button>
        <Button onClick={handleBackEndError}>Back-End Error</Button>
      </div>
    </div>
  );
}
