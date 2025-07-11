"use client";

import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const SearchFormReset = () => {
  const handleReset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) {
      form.reset();
    }
  };

  return (
    <button type="reset" onClick={handleReset}>
      <Link href="/" className="search-btn text-white">
        <X className="size-5f" />
      </Link>
    </button>
  );
};

export default SearchFormReset;
