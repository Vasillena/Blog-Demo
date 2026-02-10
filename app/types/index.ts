import { TypedObject } from "@portabletext/types";

export interface Hero {
  _id: string;
  image: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  title: string;
  subtitle: string;
  body: TypedObject[];
  button: string;
}

export interface About {
  _id: string;
  nameField: string;
  nameText: string;
  ageField: string;
  ageText: number;
  locationField: string;
  locationText: string;
  aboutBody: TypedObject[];
  storyTitle: string;
  storyBody: TypedObject[];
  button: string;
}

export interface Summary {
  _id: string;
  title: string;
  body1: TypedObject[];
  body2: TypedObject[];
  expenses: ExpenseItem[];
}

export interface ExpenseItem {
  _key: string;
  description: string;
  price: number;
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
}

export interface Post {
  _id: string;
  createdAt: string;
  date: string;
  slug: string;
  title: string;
  body: TypedObject[];
  img?: string | null;
  views: number;
  category: string;
}

export interface Comment {
  _id: string;
  user: string;
  desc: string;
  createdAt: string;
}
