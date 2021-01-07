import React from "react";

export default function File({ file, onClick }) {
  const { name, iconLink, thumbnailLink, description } = file;
  return (
    <div
      className="shadow hover:shadow-lg cursor-pointer transition duration-75 pb-4"
      onClick={onClick}
    >
      <div className="w-full h-32 overflow-hidden">
        <img src={thumbnailLink} className="w-full h-auto" alt="" />
      </div>

      <span className="p-4 font-bold overflow-ellipsis overflow-hidden whitespace-nowrap block">
        <img src={iconLink} className="mr-4 h-4 w-4 inline-block" alt="" />

        {name}
      </span>

      <span className="p-4">{description}</span>
    </div>
  );
}
