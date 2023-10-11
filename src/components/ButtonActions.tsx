/** @format */

import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

function ButtonActions() {
  return (
    <div>
      <Link href="edit/1" className="btn mr-2 rounded-full hover:text-red-500">
        <Pencil />
        Edit
      </Link>
      <button className="btn btn-error rounded-full hover:text-white">
        <Trash />
        Delete
      </button>
    </div>
  );
}

export default ButtonActions;
