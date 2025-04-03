import CardList from "./CardList";

const Card = ({title, description}: {title:string, description:string}) => {
  return (
    <div className="min-w-lg mx-auto bg-white shadow-md rounded-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-600 mb-3">{title}</h2>
        <p className="divide-y divide-gray-300 text-gray-700">
          {description}
        </p>
        <CardList />
      </div>
    </div>
  );
};

export default Card;
