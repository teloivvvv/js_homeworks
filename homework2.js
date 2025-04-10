function pow(x, y) {
    if (typeof x !== "number" || typeof y !== "number") { /* Повертає true, якщо значення різні або мають різний тип, і false - якщо вони рівні і мають однаковий тип.
        || - повертає true, якщо хоча б один з операндів є true, інакше повертає false. */
      return "Помилка: обидва значення мають бути числами!";
    }
  
    let result = 1;
    for (let i = 0; i < y; i++) {
      result *= x;
    }
    return result;
  }
  