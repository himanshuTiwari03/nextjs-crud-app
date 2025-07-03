import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="flex justify-between items-center list-none bg-slate-800 px-8 py-3">

                <Link className="text-white font-bold" href="/"><li>Blog List</li></Link>
                <Link className="text-white font-bold" href="/addTopic"><li>Add Topic</li></Link>

        </nav>
    );
}
