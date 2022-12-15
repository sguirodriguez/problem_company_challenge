interface CreateDeliveryTypings {
  idClient: number;
  idProduct: number;
  locale?: string;
}

interface UpdateDeliveryTypings {
  id: number;
  name?: string;
  email?: string;
  document?: string;
  address?: string;
  locale?: string;
}

interface DeleteDeliveryTypings {
  id: number;
  locale?: string;
}
