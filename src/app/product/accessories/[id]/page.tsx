type DetailAccesoriesProps = { params: { id: string } }; //properti dengan nama params(object) memliki properti id bertipe string
export default function DetailAccessoriesProducts(
  props: DetailAccesoriesProps
) {
  const { params } = props;
  return (
    <div>
      <h1>Detai Accessories Page</h1>
      <h2>{params.id}</h2>
    </div>
  );
}
