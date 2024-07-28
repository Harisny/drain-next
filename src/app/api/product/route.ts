import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

// const data = [
//   {
//     id: 1,
//     title: "Brat t-shirt",
//     price: 10000,
//     category: "clothes",
//     image:
//       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3fc4d03a-3789-449a-b323-8310907877c6/AS+U+NK+SB+TEE+M90+LAZY+GAWD.png",
//   },
//   {
//     id: 2,
//     title: "Milf t-shirt",
//     price: 10000,
//     category: "clothes",
//     image:
//       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3fc4d03a-3789-449a-b323-8310907877c6/AS+U+NK+SB+TEE+M90+LAZY+GAWD.png",
//   },
//   {
//     id: 3,
//     title: "Jordan AYYYEE",
//     price: 10000,
//     category: "shoes",
//     image:
//       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/25f80230-e6d5-4c2d-928b-008e2270fdaa/JORDAN+TATUM+2+PF.png",
//   },
// ];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        data: detailProduct,
        message: "success",
        status: 200,
      });
    }

    return NextResponse.json({
      data: {},
      message: "Data is Not Found",
      status: 404,
    });
  }

  const products = await retrieveData("products");
  console.log(products);
  return NextResponse.json({
    data: products,
    message: "success",
    status: 200,
  });
}
