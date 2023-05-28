import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(getCurrentTime, 1000));

function getCurrentTime(data) {
  localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(data.seconds));
}

const currentTime = JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) ?? 0;

player.setCurrentTime(currentTime);
