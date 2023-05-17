import { setupWorker } from 'msw'

import browserHandlers from './browserHandlers'

type StartRequestsWorkerProps = {
  init: boolean
}

export const startRequestsWorker = ({
  init = false
}: StartRequestsWorkerProps) => {
  const worker = setupWorker(...browserHandlers)

  if (init && process.env.NODE_ENV === 'development') {
    worker.start({ onUnhandledRequest: 'bypass' })
  }
}
