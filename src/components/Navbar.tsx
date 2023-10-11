/** @format */

import { ReplaceAll } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar bg-indigo-500/95">
      <div className="container">
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl font-bold text-white">
            <ReplaceAll />
          </Link>
        </div>
        <div className="flex-none">
          <Link href="/create" className="btn btn-ghost text-white">
            {" "}
            Create post
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
