"use client";

import { startTransition, useRef, useState } from "react";

import Image from "next/image";
import { PhenomenaRegular } from "@/app/lib/fonts";
import { createComment } from "@/app/lib/actions/post.action";
import decor from "@/public/decor-2.png";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface CommentsFormProps {
  slug: string;
}

export default function CommentsForm({ slug }: CommentsFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const user = formData.get("user")?.toString().trim();
    const desc = formData.get("message")?.toString().trim();

    if (!user || !desc) {
      toast.error("Моля, попълнете всички полета");
      setLoading(false);
      return;
    }

    try {
      const res = await createComment({
        user: String(formData.get("user")),
        desc: String(formData.get("message")),
        postSlug: slug,
      });

      if (res?.error) {
        toast.error(res.error);
        return;
      }

      toast.success("Коментарът е изпратен.");
      formRef.current?.reset();
      startTransition(() => router.refresh());
    } catch {
      toast.error("Възникна грешка при изпращането.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="relative">
        <input
          // required
          id="user"
          name="user"
          aria-label="Name"
          className="block text-xl px-2.5 py-3 w-[340px] sm:w-[580px] bg-transparent border border-[#222927] appearance-none focus:outline-none focus:ring-0 peer resize-none"
          placeholder=""
        />
        <label
          htmlFor="user"
          className="absolute text-xl text-gray-500 duration-300 transform -translate-y-5 sm:-translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#eeeeed] px-2 peer-focus:px-2 peer-focus:text-[#415064] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Име
        </label>
      </div>

      <div className="relative mt-4">
        <textarea
          // required
          id="message"
          name="message"
          aria-label="Message"
          cols={50}
          rows={6}
          placeholder=""
          className="block text-xl px-2.5 pb-1.5 pt-3 w-[340px] sm:w-[580px] bg-transparent border border-[#222927] appearance-none focus:outline-none focus:ring-0 peer resize-none"
        />
        <label
          htmlFor="message"
          className="absolute text-xl text-gray-500 duration-300 transform -translate-y-5 sm:-translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#eeeeed] px-2 peer-focus:px-2 peer-focus:text-[#415064] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Здравейте...
        </label>
      </div>

      <div className="mt-8 flex justify-center lg:justify-start">
        <button
          type="submit"
          className={loading ? "cursor-not-allowed" : ""}
          disabled={loading}
        >
          <div className="flex items-center">
            <span
              className={`px-5 py-2 border-y border-l border-[#222927] text-2xl ${PhenomenaRegular.className}`}
            >
              {loading ? "Изпращане..." : "Изпрати"}
            </span>
            <Image src={decor} alt="Decor" className="w-10 h-2" />
          </div>
        </button>
      </div>

      {loading && (
        <p className="mt-2 text-center text-lg text-gray-500">
          Моля, изчакайте...
        </p>
      )}
    </form>
  );
}
