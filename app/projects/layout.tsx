import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Projetos",
  description: "Lista de projetos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-4 md:px-20 py-10">
      {children}
    </div>
  );
}
