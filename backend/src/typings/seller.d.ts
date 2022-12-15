interface CreateSellerTypings {
  name: string;
  email: string;
  document: string;
  address: string;
  locale?: string;
}

interface UpdateSellerTypings {
  id: number;
  name?: string;
  email?: string;
  document?: string;
  address?: string;
  locale?: string;
}

interface DeleteSellerTypings {
  id: number;
  locale?: string;
}
