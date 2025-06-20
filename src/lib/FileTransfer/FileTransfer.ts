import { FileTransfer, setStreamSaverMitm } from 'secure-file-transfer'

import { trackerUrls } from 'config/trackerUrls'
import { streamSaverUrl } from 'config/streamSaverUrl'
import { rtcConfig } from 'config/rtcConfig'

setStreamSaverMitm(streamSaverUrl)

export const fileTransfer = new FileTransfer({
  torrentOpts: {
    announce: trackerUrls,
  },
  webtorrentInstanceOpts: {
    tracker: {
      rtcConfig,
    },
  },
})

// FIXME: Move this to the services directory

export class FileTransferService {
  fileTransfer: FileTransfer

  // FIXME: Rename _rtcConfig to rtcConfig
  constructor(_rtcConfig: RTCConfiguration) {
    this.fileTransfer = new FileTransfer({
      torrentOpts: {
        announce: trackerUrls,
      },
      webtorrentInstanceOpts: {
        tracker: {
          rtcConfig: _rtcConfig,
        },
      },
    })
  }
}
