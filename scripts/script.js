// document.querySelector('h1').style.color = 'red';

// document.getElementById('main-action-button').onclick = function () {
// alert(1);
// };

// Эти данные я оставляю комментированными чисто для себя), а далее будет код по уроку:

const filterItems =
  document.querySelectorAll(
    '.cars-filter li'
  ); /* в данной части кода мы находим все наши элементы фильтра */
const carItems =
  document.querySelectorAll(
    '.car'
  ); /* в этой части кода мы находим все наши автомобили */
const carsContent =
  document.getElementById(
    'cars-content'
  ); /* в этой части кода мы после выбора автомобиля в меню, скролим к нему */

// Теперь нам надо пройтись по каждому элементу списка и повесть на него обработчик события

filterItems.forEach((item) => {
  item.onclick = () => {
    filterItems.forEach((el) =>
      el.classList.remove('active')
    ); /* именно такой строкой мы говорим, что во всех наших элементах Items нужно убрать класс active */
    item.classList.add('active');

    const filterText = item.textContent.toLowerCase();

    carItems.forEach((car) => {
      if (
        filterText === 'все марки' ||
        car.querySelector('h4').textContent.toLowerCase().includes(filterText)
      ) {
        /* || - значит "Или" */
        car.style.display = 'flex';
      } else {
        car.style.display = 'none';
      }
    });

    carsContent.scrollIntoView({ behavior: 'instant' });
  };
});

// Получаем элементы формы заранее
// Получаем элементы формы заранее
const carField = document.getElementById('car');
const nameField = document.getElementById('name');
const phoneField = document.getElementById('phone');

// Функция проверки валидности поля
const validateField = (field) => {
  if (field.value.trim() === '') {
    field.style.borderColor = 'red'; // Если поле пустое, делаем рамку красной
    return false;
  } else {
    field.style.borderColor = 'white'; // Если поле заполнено, возвращаем белую рамку
    return true;
  }
};

// Дополнительная проверка для номера телефона
const validatePhone = (phoneField) => {
  if (phoneField.value.trim().length < 10) {
    phoneField.style.borderColor = 'red'; // Если номер телефона меньше 10 символов, делаем рамку красной
    return false;
  } else {
    phoneField.style.borderColor = 'white'; // Если номер телефона валиден, возвращаем белую рамку
    return true;
  }
};

document.getElementById('order-action').addEventListener('click', function () {
  // Собираем поля в массив
  const fields = [carField, nameField, phoneField];

  // Проверяем все поля циклом
  let isFormValid = true;
  fields.forEach((field) => {
    if (!validateField(field)) {
      isFormValid = false;
    }
  });

  // Дополнительно проверяем номер телефона
  if (!validatePhone(phoneField)) {
    isFormValid = false;
  }

  // Если все поля валидны
  if (isFormValid) {
    alert('Спасибо за заявку! Мы скоро свяжемся с вами'); // Выводим сообщение

    // Очищаем поля формы
    fields.forEach((field) => {
      field.value = '';
      field.style.borderColor = 'white';
    });
  }
});
