/*eslint no-console: ["error", { allow: ["info"] }] */
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

const log = (messages) => console.info('[WebSocket]', ...messages);

const STATUS_OK = 'Online';
const STATUS_NOK = 'Offline';
const CONNECTION_OPTIONS = {};

class StatusCheck {

  checkIfOfflineAndNotify(setStatus) {
    log(['Connecting to websocket']);
    const socket = new SockJS('/websocket');

    this.stompClient = Stomp.over(socket);
    this.stompClient.debug = false;

    this.stompClient.connect(
      CONNECTION_OPTIONS,
      () => {
        this.stompClient.subscribe('/topic/health-check', () => setStatus(STATUS_OK));
        log(['Connected!']);
      },
      () => {
        setStatus(STATUS_NOK);
        log(['Connection lost, trying to reconnect in 3 seconds...']);
        setTimeout(() => this.checkIfOfflineAndNotify(setStatus), 3000);
      }
    );
  }

}

export default new StatusCheck();
