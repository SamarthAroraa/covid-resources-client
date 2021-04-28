import React, { useState } from "react";

export default function TagInput() {
  const [tags, setTags] = useState([]);
  const [inputState, setInputState] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTags([...tags, inputState]);
          setInputState("");
        }}
        class="w-full mx-auto flex justify-center flex-col items-center"
      >
          <div class="relative mr-4 lg:w-full xl:w-1/2 w-4/5 md:w-full text-left my-5">
            <label for="hero-field" class="leading-7 text-lg text-gray-600">
              Others
            </label>
            <input
              type="text"
              value={inputState}
              onChange={(e) => setInputState(e.target.value)}
              placeholder="Enter if any other requirement"
              id="hero-field"
              name="hero-field"
              class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-blue-200 focus:bg-transparent border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
      </form>
      <div className="relative mr-4 lg:w-full xl:w-1/2 w-4/5 md:w-full text-left my-1 flex w-full flex-wrap justify-around">
        {tags.map((tag) => (
          <div
            className="mt-2 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none rounded text-lg mx-2 cursor-pointer"
            onClick={() => setTags(t => t.filter(tag_ => tag_ !== tag))}
            >{tag}</div>
        ))}
      </div>
    </>
  );
}
