import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { Home, About, Contacts, HardSkill, Projects } from "../pages";
import { Footer } from "../layout/layoutBase/layoutFooter";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: (
      <>
        <Home />
        <Footer />
      </>
    ),
    errorElement: <h1>Nao encontrado</h1>,
  },
  {
    path: ROUTES.about,
    element: (
      <>
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: ROUTES.hardSkill,
    element: (
      <>
        <HardSkill />
        <Footer />
      </>
    ),
  },
  {
    path: ROUTES.projects,
    element: (
      <>
        <Projects />
        <Footer />
      </>
    ),
  },
  {
    path: ROUTES.contacts,
    element: (
      <>
        <Contacts />
        <Footer />
      </>
    ),
  },
]);
