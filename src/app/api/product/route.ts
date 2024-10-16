import { NextRequest, NextResponse } from "next/server";
import { title } from "process";

const data = [
  {
    id: 1,
    title: "Nike Court Legacy",
    price: "649000",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e29ff8c-bc63-4dfe-b0b9-36c7d4a520d9/NIKE+COURT+LEGACY+%28GS%29.png"
  },
  {
    id: 2,
    title: "Nike Air Force 1 LE",
    price: "1249000",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6766f1e6-c5e7-4434-af10-562de3473b1b/AIR+FORCE+1+LE+%28GS%29.png"
  },
  {
    id: 3,
    title: "Nike Air Max 90",
    price: "1499000",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/451c4c57-d723-4f17-8822-3ef0b005d30d/AIR+MAX+90+%28GS%29.png"
  },
  {
    id: 4,
    title: "Nike Air Max Dn",
    price: "1519000",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d59b3e4c-767f-421b-8992-db405f258e0e/AIR+MAX+DN+%28PS%29.png"
  },
  {
    id: 5,
    title: "Nike Court Legacy Lift",
    price: "1499000",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2db6ec63-2890-4ae5-9b9d-02f86196eedb/WMNS+COURT+LEGACY+LIFT.png"
  },
  {
    id: 6,
    title: "Nike Gamma Force",
    price: "1299000",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_381,c_limit/6f15bbcb-4560-4dbc-8b43-10f5c020bef8/gamma-force-shoes-CbTnH1.png"
  },
  {
    id: 7,
    title: "Nike Air Max Plus",
    price: "2389000",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/lx0owmisj943sr59emb8/AIR+MAX+PLUS.png"
  },
  {
    id: 8,
    title: "Nike Kobe 8 Protro",
    price: "2849000",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/674fe780-08c5-4089-911f-319671808809/KOBE+VIII+PROTRO.png"
  },
  {
    id: 9,
    title: "Nike SB Malor",
    price: "1149000",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8af8c259-c9bb-4180-897a-90558824893a/NIKE+SB+MALOR.png"
  },
  // {
  //   id: 10,
  //   title: "Nike V2K Run GTX",
  //   price: "2379000",
  //   image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/59e18bd5-90eb-4f25-874d-0d9467d3a2a1/W+NIKE+V2K+RUN+GTX.png"
  // }
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url); //untuk mendapatkan parameter pencarial dari URL
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id)); //mencari data didalam data, berdasarkan id
    if (detailProduct) {
        return NextResponse.json({ status: 200, message: "Success", data: detailProduct });
    }
    return NextResponse.json({ status: 404, message: "Data Not Found", data: {} });
  }

  return NextResponse.json({ status: 200, message: "Success", data });
}
