import { configure, observable, action, computed } from "mobx";
import api from "../../services/api";

configure({
  enforceActions: true
});

export default class Data {
  store;

  @observable data;

  constructor(store) {
    this.store = store;
  }

  @action
  getData() {
    this.store.ui.setLoading(true);

    return api
      .getData()
      .then(
        action("getData:success", this.handleSuccess.bind(this)),
        action("getData:error", this.handleError.bind(this))
      );
  }

  handleSuccess(data) {
    this.store.ui.setLoading(false);

    this.data = data;
  }

  handleError(error) {}

  @computed
  get title() {
    return this.data.title;
  }

  @computed
  get price() {
    return this.data.price;
  }

  @computed
  get code() {
    return this.data.code;
  }
}
