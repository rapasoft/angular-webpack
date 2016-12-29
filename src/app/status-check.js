const STATUS_OK = 'Online';
const STATUS_NOK = 'Offline';

export function checkIfOfflineAndNotify(setStatus) {
  window
    .fetch('/api/health-check')
    .then((response) => response.status === 200 ? setStatus(STATUS_OK) : setStatus(STATUS_NOK))
    .catch(() => setStatus(STATUS_NOK))
  ;
}

