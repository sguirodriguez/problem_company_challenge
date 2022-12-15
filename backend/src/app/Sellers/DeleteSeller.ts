import { models } from "../../models";
import TranslatorLanguage from "../../locales";

class DeleteSeller {
  async execute({ id, locale }: DeleteSellerTypings) {
    try {
      if (!id) {
        return {
          status: 409,
          response: {
            data: null,
            error:
              TranslatorLanguage(locale)["seller.validation_on_delete_409"],
          },
        };
      }

      await models().Sellers.destroy({
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

export default new DeleteSeller();
