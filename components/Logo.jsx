import Image from "next/image";
import Link from "next/link";

export default function Logo({ size = 140 }) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="Dwaith InfoTech Logo"
        width={200}
        height={size / 3}
        priority
        className="
          object-contain
          cursor-pointer
          drop-shadow-[0_0_10px_rgba(59,130,246,0.35)]
          hover:drop-shadow-[0_0_18px_rgba(59,130,246,0.6)]
          transition
        "
      />
    </Link>
  );
}
