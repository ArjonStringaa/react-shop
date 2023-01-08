import { ProductStyle } from "../../styles/ProductStyle";
import Link from "next/link";
import Image from "next/image";
export default function Product({ product }) {
  const { title, price, image, slug } = product.attributes;
  return (
    <ProductStyle>
      <Link href={`/product/${slug}`}>
        <div>
          <Image src={image.data.attributes.formats.small.url} alt="" />
        </div>
      </Link>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </ProductStyle>
  );
}
