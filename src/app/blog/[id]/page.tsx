/** @format */
"use client";
import BackButton from "@/components/BackButton";
import ButtonActions from "@/components/ButtonActions";

function BlogPage() {
  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">Post One</h2>
        <ButtonActions />
      </div>
      <p className="text-slate-700 ">content Post one</p>
    </div>
  );
}

export default BlogPage;
