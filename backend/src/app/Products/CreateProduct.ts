import Joi from "joi";
import { models } from "../../models";
import TranslatorLanguage from "../../locales";
const schema = Joi.object().keys({
  name: Joi.string().required(),
  value: Joi.number().required(),
  idSeller: Joi.number().required(),
});

class CreateProduct {
  async execute({ name, value, idSeller, locale }: CreateProductTypings) {
    try {
      const { error } = schema.validate({
        name,
        value,
        idSeller,
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

      const hasProduct = await models().Products.findOne({
        where: {
          name,
          idSeller,
        },
      });

      if (hasProduct) {
        return {
          status: 409,
          response: {
            data: null,
            error:
              TranslatorLanguage(locale)["product.validation_has_product_409"],
          },
        };
      }

      const product = await models().Products.create({
        name,
        value,
        idSeller,
      });

      if (!product) {
        return {
          status: 409,
          response: {
            data: null,
            error: TranslatorLanguage(locale)["product.validation_409"],
          },
        };
      }

      return { status: 200, response: { data: product, error: null } };
    } catch (error) {
      return { status: 500, response: { error } };
    }
  }
}

export default new CreateProduct();
