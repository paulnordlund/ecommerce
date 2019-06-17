import Data from "./data";
import Ui from "./ui";

export class Store {
  constructor() {
    this.data = new Data(this);
    this.ui = new Ui(this);
  }
}

const singleton = new Store();

export default singleton;
