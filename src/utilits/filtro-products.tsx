import { SanityProduct } from "@/config/inventory";

export function FiltroProducts(products: SanityProduct) {
  const productFilter = `_type == "product" && priceecommerce != undefined && priceecommerce != null && categories != "originals" && images != undefined && razonsocial == "fritzduran" && name match "${products.name}*" && sku != "${products.sku}" && genero == "${products.genero}"`;

  return productFilter;
}

export function FiltroGlobal() {
  const productFilter = `_type == "product" && priceecommerce != undefined && priceecommerce != null && categories != "originals" && images != undefined && razonsocial == "fritzduran"  && images != null && tallas != undefined`;

  return productFilter;
}
interface Props {
  slug?: string;
  id?: string;
}
export function FiltroViewProduct(params: Props) {
  const productFilter = `*[_type == "product" && priceecommerce != undefined && priceecommerce != null && categories != "originals" && razonsocial == "fritzduran" && slug.current == "${params.slug}" && sku == "${params.id}"][0]`;

  return productFilter;
}
