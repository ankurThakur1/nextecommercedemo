import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <Link href={"/products"} className="text-3xl">
          <button className="btn">Proceed to Products Page</button>
        </Link>
      </div>
    </>
  );
}
