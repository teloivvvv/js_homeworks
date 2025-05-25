let users = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com>" // Прибрала кутові дужки на початку рядка, бо це некоректний синтаксис
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
  
  // Регулярка: одне або два слова, розділені крапкою, тільки букви/цифри, правильний домен
  let re = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail|yahoo)\.com$/;
  
  let trustedEmails = users
    .map(user => user.email) // витягуємо email
    .filter(email => re.test(email)); // перевіряємо по регулярці
  
  console.log(trustedEmails);
  