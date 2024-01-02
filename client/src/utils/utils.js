// manage qty change
const maxQty = 1000;
const minQty = 1;

export const onChangeHandler = (value, setQty) => {
  if (value > maxQty) {
    setQty(maxQty);
  } else if (value < minQty) {
    setQty(minQty);
  } else {
    setQty(value);
  }
};

export const decrementQty = (qty, setQty) => {
  if (qty > minQty) {
    setQty(qty - 1);
  }
};

export const incrementQty = (qty, setQty) => {
  if (qty < maxQty) {
    setQty(qty + 1);
  } else if (qty > maxQty) {
    setQty(maxQty);
  }
};
