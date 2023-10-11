/** @format */
"use client";
import FormPost from "@/components/FormPost";
import { FormInputPost } from "@/types";
import { SubmitHandler } from "react-hook-form";

function EditPostPage() {
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Update</h1>
      <FormPost submit={handleEditPost} isEditing />
    </div>
  );
}

export default EditPostPage;
