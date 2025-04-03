type ListData = {
  id: number;
  name: string;
  description: string;
  amount: number;
  date: string;
  category: string;
}[];

const mockData: ListData = [
  {
    id: 1,
    name: "Mortage",
    description: "These bills are taken from the main pot",
    amount: 100,
    date: "10th",
    category: "Utilities",
  },
  {
    id: 2,
    name: "Groceries",
    description: "Weekly grocery shopping",
    amount: 50,
    date: "4th",
    category: "Food",
  },
  {
    id: 3,
    name: "Rent",
    description: "Monthly rent payment",
    amount: 1200,
    date: "5th",
    category: "Housing",
  },
];

const CardList = ({ listData = mockData }: { listData?: ListData }) => {
  return (
    <ul className="divide-y divide-gray-300 text-gray-700">
      {listData.map((item) => (
        <li key={item.id} className="py-2 flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
            <p className="text-sm text-gray-500">Category: {item.category}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">£ {item.amount}</p>
            <p className="text-sm text-gray-500">Date: {item.date}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default CardList;
