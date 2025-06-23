import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatQuantity(number: number, text: string): string {
  return number > 1
    ? `${text}s: ${number.toFixed(0)}`
    : `${text}: ${number.toFixed(0)}`;
}
