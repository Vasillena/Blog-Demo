/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { PhenomenaRegular } from "@/app/lib/fonts";
import decor from "@/public/decor-2.png";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY!;

export default function ContactForm() {
  function handleSubmit(e: any) {
    e.preventDefault();

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
        apikey: WEB3FORMS_KEY,
        redirect: "https://blog-demo-pi-lac.vercel.app/thank-you",
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          window.location.href =
            "https://blog-demo-pi-lac.vercel.app/thank-you";
          console.log(result);
        } else {
          console.error("Form submission failed:", result);
          window.location.href =
            "https://blog-demo-pi-lac.vercel.app/form-failed";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        window.location.href =
          "https://blog-demo-pi-lac.vercel.app/form-failed";
      });
  }

  return (
    <div className="mt-3 flex flex-col items-center lg:items-start">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <div className="relative ">
            <input
              type="text"
              id="name"
              name="name"
              aria-label="Full Name"
              required
              className="block px-2.5 py-3 w-85 sm:w-95 bg-transparent border-b border-[#222927] appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=""
            />
            <label
              htmlFor="name"
              className="absolute text-xl text-gray-500 duration-300 transform -translate-y-5 sm:-translate-y-4 scale-75 top-2 z-10 origin-left bg-[#eeeeed] px-2 peer-focus:px-2 peer-focus:text-[#415064] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              aria-label="Email"
              required
              className="block px-2.5 py-3 w-85 sm:w-95 bg-transparent border-b border-[#222927] appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=""
            />
            <label
              htmlFor="email"
              className="absolute text-xl text-gray-500 duration-300 transform -translate-y-5 sm:-translate-y-4 scale-75 top-2 z-10 origin-left bg-[#eeeeed] px-2 peer-focus:px-2 peer-focus:text-[#415064] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Email
            </label>
          </div>

          <div className="relative mt-12">
            <textarea
              id="message"
              name="message"
              aria-label="Message"
              cols={50}
              rows={6}
              placeholder=""
              required
              className="block px-2.5 py-3 w-85 sm:w-95 lg:w-145 bg-transparent border border-[#222927] appearance-none focus:outline-none focus:ring-0 peer resize-none"
            />
            <label
              htmlFor="message"
              className="absolute text-xl text-gray-500 duration-300 transform -translate-y-5 sm:-translate-y-4 scale-75 top-2 z-10 origin-left bg-[#eeeeed] px-2 peer-focus:px-2 peer-focus:text-[#415064] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Hi...
            </label>
          </div>

          <div className="mt-8 flex justify-center lg:justify-start">
            <button type="submit">
              <div className="flex items-center">
                <span
                  className={`px-5 py-2 border-y border-l border-[#222927] text-2xl ${PhenomenaRegular.className}`}
                >
                  Send
                </span>
                <Image src={decor} alt="Decor" className="w-10 h-1" />
              </div>
            </button>
          </div>

          <div>
            <label htmlFor="email" />
            <input type="hidden" name="apikey" value={WEB3FORMS_KEY} />
            <input
              type="hidden"
              name="redirect"
              value="https://blog-demo-pi-lac.vercel.app/thank-you"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
