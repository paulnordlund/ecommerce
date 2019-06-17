import store from "../../store";

jest.mock("../../services/api");

describe("data store", () => {
  describe("getData", () => {
    beforeEach(() => {
      store.ui.setLoading = jest.fn();

      store.data.getData();
    });

    it("should set loading true", () => {
      expect(store.ui.setLoading).toHaveBeenCalledWith(true);
    });
  });

  describe("handleSuccess", () => {
    beforeEach(() => {
      store.data.handleSuccess({});
    });

    it("should set loading false", () => {
      expect(store.ui.setLoading).toHaveBeenCalledWith(false);
    });

    it("should assign data", () => {
      expect(store.data.data).toEqual({});
    });
  });

  describe("title", () => {
    it("should get data title", () => {
      store.data.data = {
        title: "title"
      };

      expect(store.data.title).toBe("title");
    });
  });

  describe("price", () => {
    it("should get data price", () => {
      store.data.data = {
        price: "price"
      };

      expect(store.data.price).toBe("price");
    });
  });

  describe("code", () => {
    it("should get code", () => {
      store.data.data = {
        code: "code"
      };

      expect(store.data.code).toBe("code");
    });
  });
});
