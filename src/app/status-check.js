/*eslint no-console: ["error", { allow: ["info"] }] */
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

const STATUS_OK = 'Online';
const STATUS_NOK = 'Offline';
const CONNECTION_OPTIONS = {};

class StatusCheck {

  checkIfOfflineAndNotify(setStatus) {
    console.info('[WS]', 'Connecting to websocket');
    const socket = new SockJS('/websocket');

    this.stompClient = Stomp.over(socket);
    this.stompClient.debug = false;

    this.stompClient.connect(
      CONNECTION_OPTIONS,
      () => {
        this.stompClient.subscribe('/topic/health-check', () => setStatus(STATUS_OK));
        console.info('[WS]', 'Connected!');
      },
      () => {
        setStatus(STATUS_NOK);
        console.info('[WS]', 'Connection lost, trying to reconnect in 3 seconds...');
        setTimeout(() => this.checkIfOfflineAndNotify(setStatus), 3000);
      }
    );
  }

}

export default new StatusCheck();
