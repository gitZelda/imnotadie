function generatePassword(length) {
const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
let password = '';

for(let i = 0;i < length;i++){
const randomIndex = Math.floor(Math.random() * charset.length);
password += charset[randomIndex];
}

return password;
}

//const passwordLength = 12; // Длина пароля
const generatedPassword = generatePassword(12);
alert(`Сгенерированный пароль: ${generatedPassword}`);



