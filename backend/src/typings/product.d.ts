interface CreateProductTypings {
  name: string;
  value: number;
  idSeller: number;
  locale?: string;
}

interface UpdateProductTypings {
  id: number;
  name: string;
  value: number;
  idSeller: number;
  locale?: string;
}

interface DeleteProductTypings {
  id: number;
  locale?: string;
}

interface ProductResponseTypings {
  id: number;
  name: string;
  value: number;
  idSeller: number;
  createdAt: Date;
  updatedAt: Date;
}
