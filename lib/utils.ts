import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// @ts-ignore
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
