import { models } from "../../models";
import TranslatorLanguage from "../../locales";

class DeleteProduct {
  async execute({ id, locale }: DeleteProductTypings) {
    try {
      if (!id) {
        return {
          status: 409,
          response: {
            data: null,
            error:
              TranslatorLanguage(locale)["product.validation_on_delete_409"],
          },
        };
      }

      await models().Products.destroy({
        where: { id },
      });

      return { status: 200, response: { data: true, error: null } };
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

export default new DeleteProduct();
