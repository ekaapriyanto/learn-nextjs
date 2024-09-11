type DetailFootwaresProps = { params: { id: string[] } };
export default function DetailFootwaresPage(props: DetailFootwaresProps) {
  const { params } = props;
  return (
    <div>
      <h1>{params.id ? "Detail Footwares Page" : "Footwares Page"}</h1>
      {params.id && (
        <div>
          <h2>Category: {params.id[0]}</h2>
          <h2>Product ID: {params.id[1]}</h2>
        </div>
      )}
    </div>
  );
}
