import { models } from "../../models";
import TranslatorLanguage from "../../locales";

class DeleteClient {
  async execute({ id, locale }: DeleteClientTypings) {
    try {
      if (!id) {
        return {
          status: 409,
          response: {
            data: null,
            error:
              TranslatorLanguage(locale)["client.validation_on_delete_409"],
          },
        };
      }

      await models().Clients.destroy({
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

export default new DeleteClient();
