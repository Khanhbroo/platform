import React from "react";
import Link from "next/link";

import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createAt,
    views,
    author: { _id: authorId, name },
    title,
    category,
    _id: postId,
    image,
    description,
  } = post;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link
            href={`/user/${authorId}`}
            className="hover:underline"
            target="_blank"
          >
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>

          <Link
            href={`/startup/${postId}`}
            className="hover:underline"
            target="_blank"
          >
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>

        <Link
          href={`/user/${authorId}`}
          className="hover:underline"
          target="_blank"
        >
          <Image
            src="https://placehold.co/48x48"
            alt="user_image"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${postId}`} target="_blank">
        <p className="startup-card_desc !font-medium">{description}</p>

        <img src={image} alt="post-holder" className="startup-card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link
          href={`/?query=${category.toLowerCase()}`}
          className="hover:underline"
          target="_blank"
        >
          <p className="text-16-medium">{category}</p>
        </Link>

        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${postId}`} target="_blank">
            Details
          </Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
