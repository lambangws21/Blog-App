/** @format */

import { ChevronLeftCircle } from "lucide-react";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <button className="btn rounded-full" onClick={() => router.back()}>
      <ChevronLeftCircle />
      Back
    </button>
  );
}

export default BackButton;
