// export default function EditTopicForm() {
//     return (
//         <form action="" className="flex flex-col gap-2">
//             <input
//                 className="border border-slate-500 px-8 py-2"
//                 placeholder="Topic Title"
//                 type="text" name="" id="" />
//             <input
//                 className="border border-slate-500 px-8 py-2"
//                 placeholder="Topic Description"
//                 type="text" name="" id="" />
//             <button className="bg-slate-800 font-bold text-white px-6 w-fit h-10">Edit Topic</button>
//         </form>
//     )
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://nextjs-crud-app-one.vercel.app/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button className="bg-slate-800 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
}
