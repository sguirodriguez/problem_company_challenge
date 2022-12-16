import { models } from "../../models";

class GetAllDeliveries {
  async execute() {
    try {
      const sellers = await models().Deliveries.findAll();

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

export default new GetAllDeliveries();
