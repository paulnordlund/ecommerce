import store from "../../store";

describe("ui store", () => {
  describe("setLoading", () => {
    it("should set loading", () => {
      store.ui.setLoading(true);

      expect(store.ui.loading).toBe(true);
    });
  });
});
