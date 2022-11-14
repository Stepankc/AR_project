class Core {
  constructor() {
    console.log("App start up")
  }
  static run() {
    return new Core();
  }
}

Core.run();
