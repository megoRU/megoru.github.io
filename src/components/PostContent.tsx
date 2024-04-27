// import React from "react";
import ReactMarkdown from "react-markdown";
import { PostType } from "../interfaces/interfaces";

interface Props {
    post: PostType;
}

const PostContent = ({ post }: Props) => {
    return (
        <article className="content">
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
    );
};

export default PostContent;