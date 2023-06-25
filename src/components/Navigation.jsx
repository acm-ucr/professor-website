"use client";

import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/biography",
    name: "Biography",
  },
  {
    link: "/teaching",
    name: "Teaching",
  },
  {
    link: "/publications",
    name: "Publications",
  },
];

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      className="py-0 font-lexend w-full px-3 m-0 bg-professor-blue flex justify-between items-center"
      expand="md"
      fixed="top"
    >
      <Navbar.Brand className="p-0">
        <Link
          eventkey="1"
          className="p-0 text-white no-underline font-medium text-2xl"
          href="/"
        >
          Neftali Watkinson
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="!m-0 !p-0">
        <Nav className=" no-underline ml-auto text-2xl mb-0">
          {links.map((link, index) => (
            <Nav.Link
              key={index}
              as={Link}
              eventkey="6"
              href={link.link}
              className={`${
                usePathname() === link.link
                  ? "!bg-professor-yellow text-black"
                  : "text-white"
              } mb-0 py-1 px-3 no-underline ml-auto !text-xl whitespace-nowrap w-full text-center hover:cursor-pointer`}
            >
              {link.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
