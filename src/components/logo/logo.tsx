import Link from "next/link";

import { Icons } from "@/components/icons";

export function Logo() {
  return (
    <div className="  ml-3 flex gap-1 md:gap-10">
      <Link href="/" className="flex items-center xl:space-x-2">
        <Icons.logo className="h-20 w-20 fill-black dark:fill-white xl:h-20 xl:w-20 2xl:h-22 2xl:w-22" />
      </Link>
    </div>
  );
}
