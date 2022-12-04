import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <h1>Desplay Product Details {productId}</h1>
      <Link href="/product">Product Page</Link>
    </div>
  );
};

export default ProductDetail;
