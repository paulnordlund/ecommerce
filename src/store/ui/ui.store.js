import { configure, observable, action } from "mobx";

configure({
  enforceActions: true
});

export default class Ui {
  store;

  @observable loading = false;

  constructor(store) {
    this.store = store;
  }

  @action
  setLoading(loading) {
    this.loading = loading;
  }
}
