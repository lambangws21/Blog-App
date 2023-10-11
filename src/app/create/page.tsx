/** @format */
"use client";
import BackButton from "@/components/BackButton";
import FormPost from "@/components/FormPost";
import { FormInputPost } from "@/types";
import { SubmitHandler } from "react-hook-form";

function CreatePage() {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <BackButton />
      <h1 className="text-3xl font-bold text-center my-4">Create a post</h1>
      <FormPost submit={handleCreatePost} isEditing={false} />
    </div>
  );
}

export default CreatePage;
