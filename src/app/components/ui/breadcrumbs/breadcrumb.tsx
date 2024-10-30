import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

type BreadProps = {
  description: string;
};

export function BreadCrumb({ description }: BreadProps) {
  const [mouseOn, setMouseOn] = useState(false);

  return (
    <>
      <Link
        href="/dashboard"
        className={`flex items-center mb-10`}
        onMouseEnter={() => setMouseOn(true)}
        onMouseLeave={() => setMouseOn(false)}
      >
        <FaArrowLeft
          className={`mr-2 text-xs ${
            mouseOn ? "text-tuftsBlue" : "text-gray-600"
          }`}
        />
        <span
          className={` text-sm ${
            mouseOn ? "hover:underline" : "text-gray-600"
          }`}
        >
          {description}
        </span>
      </Link>
    </>
  );
}