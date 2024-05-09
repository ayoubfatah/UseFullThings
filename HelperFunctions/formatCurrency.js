export function formatCurrency(value) {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  }

//if u call it with 1400 => €1,400.00 ...