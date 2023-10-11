/** @format */

import BackButton from "@/components/BackButton";
import ButtonActions from "@/components/ButtonActions";
import { db } from "@/lib/db";
import { FC } from "react";

interface BlogPageProps {
  params: {
    id: string;
  };
}

async function getPost (id: string) {
const response = await db.post.findFirst({
  where: {
    id: id,
  },
  select: {
    id: true,
    title: true,
    content: true,
    tag: true,
  }
})

return response;
}

const BlogPage: FC<BlogPageProps> = async ({params}) => {
  const post = await getPost(params.id);

  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">{post?.title}</h2>
        <ButtonActions />
      </div>
      <span className="badge badge-accent">{post?.tag.name}</span>
      <p className="text-slate-700 ">{post?.content}</p>
    </div>
  );
}

export default BlogPage;
