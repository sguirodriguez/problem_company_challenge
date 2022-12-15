import { models } from "../../models";
import Joi from "joi";
import TranslatorLanguage from "../../locales";

const schema = Joi.object().keys({
  id: Joi.number().required(),
  name: Joi.string().optional().allow(null),
  email: Joi.string().optional().allow(null),
  document: Joi.string().optional().allow(null),
  address: Joi.string().optional().allow(null),
});

class UpdateSeller {
  async execute({
    id,
    name,
    email,
    document,
    address,
    locale,
  }: UpdateClientTypings) {
    try {
      const { error } = schema.validate({
        id,
        name,
        email,
        document,
        address,
      });

      if (error) {
        return {
          status: 409,
          response: {
            data: null,
            error: error.details[0].message,
          },
        };
      }

      if (!name && !email && !document && !address) {
        return {
          status: 409,
          response: {
            data: null,
            error:
              TranslatorLanguage(locale)["client.validation_on_update_409"],
          },
        };
      }

      const client = await models().Clients.findOne({ where: { id } });

      if (!client) {
        return {
          status: 404,
          response: {
            data: null,
            error: TranslatorLanguage(locale)["client.validation_404"],
          },
        };
      }

      const hasEmail = email ? { email } : {};
      const hasName = name ? { name } : {};
      const hasDocument = document ? { document } : {};
      const hasAddress = address ? { address } : {};

      await models().Clients.update(
        {
          ...hasEmail,
          ...hasName,
          ...hasDocument,
          ...hasAddress,
        },
        {
          where: { id },
        }
      );

      return {
        status: 200,
        response: { data: true, error: null },
      };
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

export default new UpdateSeller();
