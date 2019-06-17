import api from "../api";

describe("api service", () => {
  describe("transformResponse", () => {
    it("should transform get data response", () => {
      let response = {
        data: {
          CatalogEntryView: [
            {
              CustomerReview: [],
              DPCI: "DPCI",
              ItemDescription: [],
              Offers: [
                {
                  OfferPrice: [
                    {
                      formattedPriceValue: "formattedPriceValue"
                    }
                  ]
                }
              ],
              POBoxProhibited: "POBoxProhibited",
              PackageDimension: [],
              Promotions: [],
              ReturnPolicy: [],
              UPC: "UPC",
              applyCouponLink: "false",
              buyable: "true",
              callOutMsg: "callOutMsg",
              catEntryId: "catEntryId",
              classId: "classId",
              department: "department",
              eligibleFor: "eligibleFor",
              inventoryCode: "inventoryCode",
              inventoryStatus: "inventoryStatus",
              itemId: "itemId",
              itemType: "itemType",
              manufacturer: "manufacturer",
              manufacturerPartNumber: "manufacturerPartNumber",
              packageQuantity: "packageQuantity",
              partNumber: "partNumber",
              purchasingChannel: "purchasingChannel",
              purchasingChannelCode: "purchasingChannelCode",
              shortDescription: "shortDescription",
              title: "title",
              webclass: "webclass"
            }
          ]
        }
      };

      expect(api.transformResponse(response)).toEqual({
        price: "formattedPriceValue",
        code: "purchasingChannelCode",
        title: "title"
      });
    });
  });
});
