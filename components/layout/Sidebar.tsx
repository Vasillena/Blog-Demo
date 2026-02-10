import Categories from "../posts/Categories";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import close from "@/public/close.svg";
import { dancePartner } from "@/app/lib/fonts";
import logo from "@/public/logo.svg";

export default function Sidebar({
  open,
  setOpen,
  menuRef,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <nav
      ref={menuRef}
      className={`fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto transition-transform transform ${
        open ? "translate-x-0" : "-translate-x-full"
      } bg-[#eeeeed] shadow-2xl w-96`}
      tabIndex={-1}
      aria-labelledby="drawer-body-scrolling-label"
    >
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <Image src={close} alt="Close sidebar" />
      </button>
      <div className="h-full flex flex-col justify-between">
        <div className="w-full mx-auto pt-20 pb-10">
          <div className="border-b border-[#222927]">
            <h2 className={`text-5xl text-center ${dancePartner.className}`}>
              Lena
            </h2>
          </div>
          <h2 className="text-2xl font-bold text-center">Categories</h2>
        </div>

        <div className="text-3xl pl-4 mb-4">
          <Link href="/">Home</Link>
          <Suspense fallback={<p>Loading categories...</p>}>
            <Categories />
          </Suspense>
        </div>
        <div className="w-full mx-auto pt-10 pb-20 border-t border-[#222927]">
          <div className=" flex justify-center items-center">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                priority
                style={{
                  width: "60px",
                  height: "auto",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
