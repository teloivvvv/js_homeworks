var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    "Розбити скло": "200 грн",
  
    price: function () {
      var sum = 0;
      for (var key in services) {
        var value = services[key];
        var number = parseInt(value); // якщо не число — буде NaN
        if (!isNaN(number)) {  // перевіряє, що значення можна додати до суми, ігноруючи всі нечислові властивості
          sum += number;
        }
      }
      return sum;
    },

    minPrice: function () {
        var min = null;
    
        for (var key in services) {
          var value = services[key];
          var number = parseInt(value); 
          if (!isNaN(number)) {
            if (min === null) {
              min = number; // перше число записуємо як мінімальне
            } else if (number < min) {
              min = number; // якщо нове число менше — оновлюємо
            }
          }
        }
    
        return min;
      },
    
      maxPrice: function () {
        var max = null;
    
        for (var key in services) {
          var value = services[key];
          var number = parseInt(value);
    
          if (!isNaN(number)) {
            if (max === null || number > max) {
              max = number;
            }
          }
        }
    
        return max;
      }
    };
    
console.log("Загальна ціна:", services.price());
console.log("Мінімальна ціна:", services.minPrice());
console.log("Максимальна ціна:", services.maxPrice());
