// нужно сохранять значения полей инпута в локальное хранилище
// когда пользователь что то напечатал и отправил форму

// импортируем throttle
import throttle from 'lodash/throttle';

// получаем доступ к форме
const feedbackForm = document.querySelector('.feedback-form');

// получаем доступ к инпуту почты
const emailFormInput = feedbackForm.querySelector('input[name="email"]');

//получаем доступ к инпуту сообщения
const messageFormInput = feedbackForm.querySelector('textarea[name="message"]');

// создаем локальное хранилище
const localStorageInfo = 'feedback-form-state';

// функция для сохранения состаяния формы
const saveFormState = throttle(() => {
  const formState = {
    email: emailFormInput.value,
    message: messageFormInput.value,
  };
  localStorage.setItem(localStorageInfo, JSON.stringify(formState));
}, 500);

// функция для загрузки состояния формы
const loadFormState = () => {
  const savedStore = localStorage.getItem(localStorageInfo);

  if (savedStore) {
    const formState = JSON.parse(savedStore);
    emailFormInput.value = formState.email;
    messageFormInput.value = formState.message;
  }
};

// обрабатываем событие и вешаем слушателя на инпут, сохраняем инфу в локальное хранилище
feedbackForm.addEventListener('input', saveFormState);

document.addEventListener('DOMContentLoaded', loadFormState);

// вешаем слушателя события на отправку формы и выводим информацию в консоль
feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const formState = {
    email: emailFormInput.value,
    message: messageFormInput.value,
  };
  console.log('Форма отправлена:', formState);

  // очищаем локальное  хранилище от полей формы
  localStorage.removeItem(localStorageInfo);
  emailFormInput.value = '';
  messageFormInput.value = '';
});
