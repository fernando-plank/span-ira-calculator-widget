import { setupWorker } from 'msw';
import browserHandlers from './browserHandlers';
export const startRequestsWorker = ({ init = false }) => {
    const worker = setupWorker(...browserHandlers);
    if (init && process.env.NODE_ENV === 'development') {
        worker.start({ onUnhandledRequest: 'bypass' });
    }
};
