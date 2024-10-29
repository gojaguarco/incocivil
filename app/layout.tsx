import "@/app/globals.css"
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

export default async function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    (<html lang="es">
      <body className={`overflow-x-hidden`}>
        {(await draftMode()).isEnabled && (
          <a
            className="fixed right-0 bottom-0 bg-blue-500 text-white p-4 m-4"
            href="/api/draft-mode/disable"
          >
            Disable preview mode
          </a>
        )}
        {children}
        {(await draftMode()).isEnabled && <VisualEditing />}
      </body>
    </html>)
  );
}