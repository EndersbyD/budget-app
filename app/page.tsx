"use client";
import { IconButton } from "@mui/joy";
import Drawer from "@mui/joy/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import RecurringBills from "./components/RecurringBills";
import Months from "./components/Months";

export default function Home() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-grey-500 p-6 flex flex-row items-center justify-between">
        <IconButton
          data-testid="menu-button"
          className=""
          onClick={() => setOpenDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer data-testid="menu-drawer" anchor="left" open={openDrawer}>
          <div data-testid="menu-drawer-content" className="p-4">
            Menu Drawer
            <IconButton
              data-testid="menu-drawer-close-button"
              onClick={() => setOpenDrawer(false)}
              className="top-1 left-70 absolute"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </Drawer>
        <h1 className="text-2xl font-bold">Budget App</h1>
        <p>Better than a spreadsheet at least!</p>
      </header>

      <main className="flex-1 bg-gray-100 p-6 flex flex-row justify-between gap-4">
        <div className="w-256 mb-6 gap-4 flex flex-col justify-between">
          <section id="recurring-bills" className="w-full h-106">
            <RecurringBills />
          </section>
          <section id="months" className="w-full h-50 mt-12">
            <Months />
          </section>
        </div>
        <div className="w-150 mb-6 gap-4 flex flex-col justify-between">
          <section id="goals" className="h-full bg-green-500">
            <h2 className="text-xl font-semibold">Section 2</h2>
          </section>
          <section id="personal" className="h-full bg-blue-500">
            <h2 className="text-xl font-semibold">Section 3</h2>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 p-6">
        <h2 className="text-lg font-semibold">Footer Section</h2>
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
}
