import Vimeo from '@vimeo/player';
import throttle from 'lodash/throttle';

const vimeoIframe = document.getElementById('vimeo-player');
const player = new Vimeo(vimeoIframe);

const savedTime = localStorage.getItem('videoplayer-current-time');

//сохраняем время и делаем задержку для обновления времени не чаще 1 раза в секунду
const updateLocalStorageThrottled = throttle(currentVideoTime => {
  // сохранение времени
  localStorage.setItem('videoplayer-current-time', currentVideoTime.toString());
}, 1000); //

const playVideo = () => {
  // начать воспроизвидение
  player.play();

  // удаляем обработчик, что бы он вызывался только 1 раз (удаляем ошибку)
  document.removeEventListener('click', playVideo);
};

//проверяем, сохранено ли время и устанавливаем его
if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime));
  document.addEventListener('click', playVideo);
}

player.on('timeupdate', event => {
  const currentVideoTime = event.seconds;

  // сохраняем видео в локальном хранилище
  localStorage.setItem('videoplayer-current-time', currentVideoTime.toString());

  updateLocalStorageThrottled(currentVideoTime);
});
