// import Preloader from '../components/Preloader'

let isLoading = false;

export function showPreloader() {
  isLoading = true;
  updatePreloader();
}

export function hidePreloader() {
  isLoading = false;
  updatePreloader();
}

export function isPreloaderVisible() {
  return isLoading;
}

function updatePreloader() {
//   return <Preloader />
}