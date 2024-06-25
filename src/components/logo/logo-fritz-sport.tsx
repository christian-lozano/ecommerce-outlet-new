import Link from "next/link";
import { IconsFritzSport } from "../iconsFritzSport";

export function LogoFritzSport() {
  return (
    <div className="   flex ">
      <Link
        href="https://fritz-sport-new-ecommerce.vercel.app/"
        className="flex items-center  justify-center"
      >
        <IconsFritzSport.Logo className="h-8 w-8 fill-black dark:fill-white xl:h-24 xl:w-12 2xl:h-36 2xl:w-12" />
      </Link>
    </div>
  );
}
