import Joi from "joi";
import TranslatorLanguage from "../../locales";
import { models } from "../../models";

const schema = Joi.object().keys({
  idClient: Joi.number().required(),
  idProduct: Joi.number().required(),
});

class CreateDelivery {
  async execute({ idClient, idProduct, locale }: CreateDeliveryTypings) {
    try {
      const { error } = schema.validate({
        idClient,
        idProduct,
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

      const client = await models().Clients.findOne({
        where: { id: idClient },
      });

      const product = await models().Products.findOne({
        where: { id: idProduct },
      });

      if (!client) {
        return {
          status: 409,
          response: {
            data: null,
            error: TranslatorLanguage(locale)["delivery.validation_client_409"],
          },
        };
      }

      if (!product) {
        return {
          status: 409,
          response: {
            data: null,
            error:
              TranslatorLanguage(locale)["delivery.validation_product_409"],
          },
        };
      }

      const seller = await models().Sellers.findOne({
        where: { id: product.idSeller },
      });

      if (!seller) {
        return {
          status: 409,
          response: {
            data: null,
            error: TranslatorLanguage(locale)["delivery.validation_seller_409"],
          },
        };
      }

      const hasDelivery = await models().Deliveries.findOne({
        where: {
          productName: product.name,
          origin: seller.address,
          destiny: client.address,
          idSeller: seller.id,
          idClient: client.id,
          idProduct: product.id,
          clientName: client.name,
        },
      });

      if (hasDelivery) {
        return {
          status: 409,
          response: {
            data: null,
            error:
              TranslatorLanguage(locale)[
                "delivery.validation_has_delivery_409"
              ],
          },
        };
      }

      const delivery = await models().Deliveries.create({
        productName: product.name,
        origin: seller.address,
        destiny: client.address,
        clientName: client.name,
        idSeller: Number(seller.id),
        idClient: Number(client.id),
        idProduct: Number(product.id),
      });

      if (!delivery) {
        return {
          status: 409,
          response: {
            data: null,
            error: TranslatorLanguage(locale)["delivery.validation_seller_409"],
          },
        };
      }

      return { status: 200, response: { data: delivery, error: null } };
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

export default new CreateDelivery();
