"use client";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/joy";
import Card from "./Card";

const initialState = {
  bills: [
    {
      id: 1,
      title: "Mortgage",
      category: "Utils",
      amount: 1000,
      date: "1st",
    },
    {
      id: 2,
      title: "Electricity",
      category: "Utils",
      amount: 200,
      date: "5th",
    },
    {
      id: 3,
      title: "Water",
      category: "Utils",
      amount: 50,
      date: "10th",
    },
    {
      id: 4,
      title: "Internet",
      category: "Utils",
      amount: 30,
      date: "15th",
    },
    {
      id: 5,
      title: "Phone Bill",
      category: "Utils",
      amount: 40,
      date: "20th",
    },
  ],
};

function RecurringBills() {
  const [bills, setBills] = useState(initialState.bills);
  const sortedBills = bills.sort((a, b) => {
    const number = parseInt(a.date, 10);
    const number2 = parseInt(b.date, 10);
    return number - number2;
  });
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-xl font-semibold">Recurring Bills</h2>
        <IconButton
          onClick={() =>
            setBills([
              {
                id: bills.length + 1,
                title: "New Bill",
                category: "Utils",
                amount: Math.floor(Math.random() * 100) + 1,
                date: "2nd",
              },
              ...bills,
            ])
          }
        >
          <AddIcon />
        </IconButton>
      </div>
      <div className="mt-2 flex flex-col gap-4 overflow-y-scroll scrollbar-hide size-full">
        {sortedBills.map((bill) => (
          <Card
            key={bill.id}
            title={bill.title}
            category={bill.category}
            amount={bill.amount}
            date={bill.date}
          />
        ))}
      </div>
    </>
  );
}
export default RecurringBills;
