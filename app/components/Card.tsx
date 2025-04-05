import { Card, Checkbox } from "@mui/joy";

type Props = {
  title: string;
  category: string;
  amount: number;
  date: string;
};

const BillCard = ({ title, category, amount, date }: Props) => {
  return (
    <Card className="w-full h-full">
      <div className="flex flex-row space-around">
        <Checkbox className="w-8" />
        <div className="flex-1 flex-col">
          <p className="text-gray-500">{title}</p>
          <p className="text-gray-500">Category: {category}</p>
        </div>
        <div className="flex-1 flex-col">
          <p className="text-gray-500 text-right">{`Amount: £${amount}`}</p>
          <p className="text-gray-500 text-right">Date: {date}</p>
        </div>
      </div>
    </Card>
  );
};

export default BillCard;
