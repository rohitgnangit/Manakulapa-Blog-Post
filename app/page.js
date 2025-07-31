import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-2xl font-bold pt-20">Read and Upload Programs Here</h2>
        <p className="px-10">This is the website where you can upload your Logical ideas to motivate others</p>
        <p className="px-10">And learn knowledge from others</p>
        <div className="flex">
          <Link href={"/posts"}>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Read Programs</button>
          </Link>
          <Link href={"/write"}>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Save Program</button>
          </Link>

        </div>
      </div>
    </>
  );
}
