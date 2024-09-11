type DetailClothesProps = { params: { id: string[] } }; //properti dengan nama params(object) memliki properti id bertipe string[array]
export default function DetailClothesPage(props: DetailClothesProps) {
  const { params } = props;
  return (
    <div>
      <h1>Detail Clothes Page</h1>
      <h2>Category: {params.id[0]}</h2>
      <h2>Product ID: {params.id[1]}</h2>
    </div>
  );
}
