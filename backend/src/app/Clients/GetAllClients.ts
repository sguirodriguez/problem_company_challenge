import { models } from "../../models";

class GetAllSellers {
  async execute() {
    try {
      const sellers = await models().Clients.findAll();

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

export default new GetAllSellers();
