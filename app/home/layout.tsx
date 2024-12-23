import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-12 py-10">
      {children}
    </div>
  );
}
