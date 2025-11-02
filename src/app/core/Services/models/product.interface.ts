export interface ProductModel {
  id: number;
  name: string;
  categoryName: string;
  description: string;
  price: number;
  sku: string;
  stock: number;
  imageUrls?: string[];  // 👈 optional
  imageUrl: string;
}
