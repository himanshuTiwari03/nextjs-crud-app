// import {HiPencilAlt} from "react-icons/hi";
// import RemoveBtn from "./RemoveBtn";
// import Link from "next/link";
// export default function TopicsList() {
//     return (
//         <div className="p-4 border-1 my-3 flex justify-between gap-5 items-start ">
//             <div>
//                 <h2>Topic Ttile</h2>
//                 <div>Topic Description</div>
//             </div>
//             <div className="flex gap-2">
//                 <RemoveBtn  />
//             <Link href="/editTopic/2"><HiPencilAlt size={20}/></Link>
//             </div>
//         </div>


//     );
// }

import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

// const getTopics = async () => {
//   try {
//     const res = await fetch("http://localhost:3001/api/topics", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }

//     return res.json();
//   } catch (error) {
//     console.log("Error loading topics: ", error);
//   }
// };
const getTopics = async () => {
  try {
    const res = await fetch("https://nextjs-crud-app-one.vercel.app/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return await res.json(); // assuming your API returns { topics: [...] }
  } catch (error) {
    console.log("Error loading topics: ", error);
    return { topics: [] }; //  Prevent destructure error
  }
};


export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
