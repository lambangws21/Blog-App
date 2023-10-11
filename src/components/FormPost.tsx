/** @format */
"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { FC } from "react";
import { FormInputPost } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Tag } from "@prisma/client";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

  // fetch list tag disini
  const { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await axios.get("/api/tags");
      return response.data;
    },
  });
  console.log(dataTags);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col gap-5 items-center justify-center mt-10"
    >
      <input
        type="text"
        name="title"
        {...(register("title"), { required: true })}
        placeholder="Procedure..."
        className="input input-bordered w-full max-w-lg"
      />
      <textarea
        {...(register("content"), { required: true })}
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Description of the procedure..."
      ></textarea>
      {isLoadingTags ? (
        <span className="loading loading-bars loading-lg"></span>
      ) : (
        <select
          {...(register("tag"), { required: true })}
          className="select select-bordered w-full max-w-lg"
          defaultValue={""}
        >
          <option disabled value="">
            Chose Doctor
          </option>
          {dataTags?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      )}
      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormPost;
