import { models } from "../../models";
import Joi from "joi";

import TranslatorLanguage from "../../locales";
const schema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required(),
  document: Joi.string().required(),
  address: Joi.string().required(),
});

class CreateSeller {
  async execute({
    name,
    email,
    document,
    address,
    locale,
  }: CreateSellerTypings) {
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

      const hasEmailRegistered = await models().Sellers.findOne({
        where: { email },
      });

      const hasDocumentRegistered = await models().Sellers.findOne({
        where: { document },
      });

      if (hasEmailRegistered) {
        return {
          status: 409,
          response: {
            data: null,
            error: TranslatorLanguage(locale)["seller.validation_email_409"],
          },
        };
      }

      if (hasDocumentRegistered) {
        return {
          status: 409,
          response: {
            data: null,
            error: TranslatorLanguage(locale)["seller.validation_document_409"],
          },
        };
      }

      const seller = await models().Sellers.create({
        name,
        email,
        document,
        address,
      });

      if (!seller) {
        return {
          status: 409,
          response: {
            data: null,
            error: TranslatorLanguage(locale)["seller.validation_409"],
          },
        };
      }

      return { status: 200, response: { data: seller, error: null } };
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

export default new CreateSeller();
