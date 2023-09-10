"use client";

import { useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h2 className="text-xl font-semibold">Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
