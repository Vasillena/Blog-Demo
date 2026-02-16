import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-360 w-full mx-auto border-t border-[#222927] flex justify-between">
      <p className="text-center font-light my-10">
        Copyright © {currentYear} - All rights reserved
      </p>
      <div className="flex gap-2 justify-center items-center">
        <p className="text-center font-light my-10">Build by</p>
        <Link href="https://vasilena.space" target="blank">
          <p>VY</p>
        </Link>
      </div>
    </footer>
  );
}
