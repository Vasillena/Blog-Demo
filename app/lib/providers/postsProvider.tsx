"use client";

import { ReactNode, createContext, useContext } from "react";

import { Post } from "@/app/types";

interface PostsContextType {
  postsPromise: Promise<Post[]>;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
};

export function PostsProvider({
  postsPromise,
  children,
}: {
  postsPromise: Promise<Post[]>;
  children: ReactNode;
}) {
  return (
    <PostsContext.Provider value={{ postsPromise }}>
      {children}
    </PostsContext.Provider>
  );
}
