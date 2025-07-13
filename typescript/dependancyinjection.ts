class LoggerService {
  log(message: string) {
    console.log("LOG:", message);
  }
}

class UserService {
  constructor(private logger: LoggerService) {}

  createUser(name: string) {
    this.logger.log(`User ${name} created`);
  }
}

const logger = new LoggerService();
const userService = new UserService(logger);
userService.createUser("Alice");
