// export default function addTopic() {
//     return (
//         <form action="" className="flex flex-col gap-2">
//             <input 
//             className="border border-slate-500 px-8 py-2"
//             placeholder="Topic Title"
//             type="text" name="" id="" />
//                         <input 
//             className="border border-slate-500 px-8 py-2"
//             placeholder="Topic Description"
//             type="text" name="" id="" />
//             <button className="bg-slate-800 font-bold text-white px-6 w-fit h-10">Add Topic</button>
//         </form>
//     )
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("https://nextjs-crud-app-one.vercel.app/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-slate-800 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}
