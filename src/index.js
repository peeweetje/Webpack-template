require("./styles.scss");

class car {
  manufacturer(car) {
    document.write(`I have a ${car}`);
  }
}

const bmw = new car();
bmw.manufacturer("bmw");

