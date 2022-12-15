import { models } from "../../models";

class GetAllProducts {
  async execute() {
    try {
      const sellers = await models().Products.findAll();

      return { status: 200, response: { data: sellers, error: null } };
    } catch (error) {
      return {
        status: 500,
        response: {
          error,
        },
      };
    }
  }
}

export default new GetAllProducts();
