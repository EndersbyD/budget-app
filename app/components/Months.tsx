import { Button } from "@mui/joy";

const getNext12Months = () => {
  const months = [];
  const now = new Date();

  for (let i = 0; i < 12; i++) {
    // Create a new Date object for each month
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + i, 1);
    // Get the month name and push it to the array
    months.push(
      nextMonth.toLocaleString("default", { month: "long", year: "numeric" })
    );
  }

  return months;
};

const Months = () => {
  return (
    <>
      <h2 className="text-xl font-semibold">Month Views</h2>
      <div className="mt-7 flex gap-4 w-full flex-wrap">
        {getNext12Months().map((month, index) => (
          <Button key={index} variant="outlined">{`${month}`}</Button>
        ))}
      </div>
    </>
  );
};

export default Months;
