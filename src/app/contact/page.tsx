import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Kusaselihle Trading Enterprises (Pty) Ltd.",
  description: "This is Contact Page for Kusaselihle Trading Enterprises (Pty) Ltd.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Kusaselihle Trading Enterprises (Pty) Ltd."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
