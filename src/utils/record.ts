export default class Record {
  private stream: MediaStream;
  constructor() {
    this.stream;
  }

  /**
   * Method for check video device
   * @return boolean
   */
  async hasVideoInput() {
    return (await navigator.mediaDevices.enumerateDevices()).some(
      (device) => device.kind === "videoinput"
    );
  }

  /**
   * Method for start record
   * @return Promise<Blob>
   */
  async start(HTMLVideoElement: HTMLVideoElement): Promise<Blob | void> {
    /**
     * Check video input
     */
    if (await this.hasVideoInput()) {
      /**
       * Start with mx & mh scale
       */
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      /**
       * @return video stream
       */
      return await this.startVideo(HTMLVideoElement);
    }
    /**
     * @return Video Input Exception
     */
    throw new Error("[VIE] - free video input not found");
  }

  /**
   * Method for stop record
   * @return void
   */
  stop(): void {
    this.stream.getTracks().forEach((track: MediaStreamTrack) => track.stop());
  }

  /**
   * Method for start video
   * @return Promise<Blob>
   */
  async startVideo(HTMLVideoElement: HTMLVideoElement): Promise<Blob> {
    return new Promise((resolve, reject) => {
      /**
       * Initialize MediaRecorder
       * Tempory dataavailable storage
       */
      const media = new MediaRecorder(this.stream);
      const tmp: Blob[] = [];

      /**
       * Update tempory storage
       */
      media.addEventListener("dataavailable", ({ data }: BlobEventInit) =>
        tmp.push(data)
      );

      /**
       * Added handlers
       */
      new Promise((resolve, reject) => {
        media.addEventListener("stop", resolve);
        media.addEventListener("error", reject);
      })
        .then(() => {
          /**
           * Get payload after stop record
           */
          return resolve(new Blob(tmp, { type: "video/mp4" }));
        })
        /**
         * @return Uknown Exception
         */
        .catch((e: Error) => reject(e));

      /**
       * Start recording
       */
      media.start();
      HTMLVideoElement.srcObject = this.stream;
    });
  }
}
