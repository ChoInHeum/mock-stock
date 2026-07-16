import { useLoaderData, useParams } from "react-router";

const StockDetail = () => {
  const stock = useLoaderData();
  const { ticker } = useParams();

  return (
    <div>
      <h1>{ticker}</h1>
      <pre>{JSON.stringify(stock, null, 2)}</pre>
    </div>
  );
};

export default StockDetail;
