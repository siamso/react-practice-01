import React from "react";
import { useSelector } from "react-redux";
import { selectAllusers } from "../users/usersSlice";

function PostAuthor({ userId }) {
  const users = useSelector(selectAllusers);
  const author = users.find((user) => user.id === userId);
  console.log(author);
  return <span>by {author ? author.name : "Unknown Author"}</span>;
}
export default PostAuthor;
