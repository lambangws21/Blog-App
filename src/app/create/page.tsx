/** @format */
"use client";
import BackButton from "@/components/BackButton";
import FormPost from "@/components/FormPost";
import { FormInputPost } from "@/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

function CreatePage() {
  const router = useRouter();
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    createPost (data);
  };
  const {mutate: createPost, isLoading } = useMutation ({
    mutationFn: (newPost: FormInputPost) => {
      return axios.post("/api/posts/create", newPost)
    },
    onError: (error) => {
     console.error(error); 
    },
    onSuccess: () => {
      router.push("/")
    }
  })
  return (
    <div>
      <BackButton />
      <h1 className="text-3xl font-bold text-center my-4">Create a post</h1>
      <FormPost submit={handleCreatePost} isEditing={false} />
    </div>
  );
}

export default CreatePage;
