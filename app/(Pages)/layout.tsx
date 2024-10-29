import Image from "next/image";
import Navbar from "./ navbar";


export default async function PagesLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <>
      <Image src='/Marble.webp' alt='marble backround' width={2000} height={1000} className="fixed top-0 bottom-0 left-1/2 -translate-x-1/2 h-full mx-auto opacity-20 object-cover"/>
      <Navbar/>
    <main className="mt-[60px] min-h-screen w-full main-background prose lg:prose-lg max-w-none overflow-hidden">
      and this is the main
        {children}
    </main>
    </>
  );
}