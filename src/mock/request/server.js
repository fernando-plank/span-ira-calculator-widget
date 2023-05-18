import { setupServer } from 'msw/node';
import testHandlers from './testHandlers';
const server = setupServer(...testHandlers);
export default server;
