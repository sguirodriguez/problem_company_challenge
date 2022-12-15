interface CreateClientTypings {
  name: string;
  email: string;
  document: string;
  address: string;
  locale?: string;
}

interface UpdateClientTypings {
  id: number;
  name?: string;
  email?: string;
  document?: string;
  address?: string;
  locale?: string;
}

interface DeleteClientTypings {
  id: number;
  locale?: string;
}
