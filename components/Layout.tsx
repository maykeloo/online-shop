import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
    <div className="max-w-[90vw] mx-auto">
      <Header />
      <div className="flex flex-grow max-w-[90vw] mx-auto">{children}</div>
      <Footer />
    </div>
    </>
  );
};
