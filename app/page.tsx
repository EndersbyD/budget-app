"use client";
import { IconButton } from "@mui/joy";
import Drawer from "@mui/joy/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import RecurringBills from "./components/RecurringBills";

export default function Home() {
  const [openDrwawer, setOpenDrawer] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-grey-500 p-6 flex flex-row items-center justify-between">
        <IconButton className="" onClick={() => setOpenDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <h1 className="text-2xl font-bold">Budget App</h1>
        <p>Better than a spreadsheet at least!</p>
      </header>
      <Drawer
        anchor="left"
        open={openDrwawer}
        onClose={() => setOpenDrawer(false)}
      ></Drawer>

      <main className="flex-1 bg-gray-100 p-6 flex flex-row justify-between gap-4">
        <div className="w-256 mb-6 gap-4 flex flex-col justify-between">
          <section id="recurring-bills" className="w-full h-106">
            <RecurringBills />
          </section>
          <section id="months" className="w-full h-50 bg-yellow-500">
            <h2 className="text-xl font-semibold">Section 4</h2>
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
