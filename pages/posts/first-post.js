import Link from "next/link";
import Image from "next/image";

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <Image
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="Your Name"
      />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
