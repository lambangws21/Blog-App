/** @format */
"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { FC } from "react";
import { FormInputPost } from "@/types";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col gap-5 items-center justify-center mt-10">
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
        placeholder="Description of the procedure..."></textarea>
      <select
        {...(register("tag"), { required: true })}
        className="select select-bordered w-full max-w-lg"
        defaultValue={""}>
        <option disabled value="">
          Chose Doctor
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormPost;
