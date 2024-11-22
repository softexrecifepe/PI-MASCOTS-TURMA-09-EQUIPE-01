"use client";

import React from "react";
import RegisterForm from "./RegisterForm";
import { BreadCrumb } from "@/app/components/ui/breadcrumbs/breadcrumb";
import { SectionTitle } from "@/app/components/ui/titles/sectionTitle";

const page = () => {
  return (
    <section className="flex h-screen text-black">
      <div className="flex-1 overflow-x-hidden overflow-y-auto ml-20 mt-[72px] px-10 py-8">
        <BreadCrumb link="/registers" description="Voltar para cadastros" />
        <SectionTitle
          iconClass="fa-regular fa-folder-open"
          sectionTitle="Cadastro de Tutor"
          color=""
        ></SectionTitle>
        <RegisterForm />
      </div>
    </section>
  );
};

export default page;
