import { models } from "../../models";
import Joi from "joi";
import TranslatorLanguage from "../../locales";
const schema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required(),
  document: Joi.string().required(),
  address: Joi.string().required(),
});

class CreateClient {
  async execute({
    name,
    email,
    document,
    address,
    locale,
  }: CreateClientTypings) {
    try {
      const { error } = schema.validate({
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

      const hasEmailRegistered = await models().Clients.findOne({
        where: { email },
      });

      const hasDocumentRegistered = await models().Clients.findOne({
        where: { document },
      });

      if (hasEmailRegistered) {
        return {
          status: 409,
          response: {
            data: null,
            error: TranslatorLanguage(locale)["client.validation_email_409"],
          },
        };
      }

      if (hasDocumentRegistered) {
        return {
          status: 409,
          response: {
            data: null,
            error: TranslatorLanguage(locale)["client.validation_document_409"],
          },
        };
      }

      const client = await models().Clients.create({
        name,
        email,
        document,
        address,
      });

      if (!client) {
        return {
          status: 409,
          response: {
            data: null,
            error: TranslatorLanguage(locale)["client.validation_409"],
          },
        };
      }

      return { status: 200, response: { data: client, error: null } };
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

export default new CreateClient();
