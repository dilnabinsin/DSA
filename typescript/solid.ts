interface IPrinter {
  print(): void;
}

class PDFPrinter implements IPrinter {
  print() {
    console.log("Printing PDF");
  }
}

class PrintService {
  constructor(private printer: IPrinter) {}
  printDocument() {
    this.printer.print();
  }
}

// Create an instance of PDFPrinter
const printer = new PDFPrinter();

// Pass the printer to PrintService
const service = new PrintService(printer);
service.printDocument();
// Call the printDocument m
////////////////////////////////////////////////////

class UserAuth {
  login(username: string, password: string) { /* logic */ }
}

class EmailService {
  sendWelcomeEmail(email: string) { /* logic */ }
}//
// Separated login and email responsibilities.
 //O – Open/Closed Principle
interface Discount {
  apply(price: number): number;
}

class NewCustomerDiscount implements Discount {
  apply(price: number): number {
    return price * 0.9;
  }
}

class PremiumCustomerDiscount implements Discount {
  apply(price: number): number {
    return price * 0.8;
  }
}

//L – Liskov Substitution Principle
class Bird {
  fly() {
    console.log("Flying");
  }
}

class Eagle extends Bird {}
const b: Bird = new Eagle();
b.fly(); // ✅ Works as expected

//i🔹 I – Interface Segregation Principle
interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

class AllInOnePrinter implements Printer, Scanner {
  print() {}
  scan() {}
}

class SimplePrinter implements Printer {
  print() {}
}

//D – Dependency Inversion Principle
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(msg: string) {
    console.log(msg);
  }
}

class UserService {
  constructor(private logger: Logger) {}

  createUser() {
    this.logger.log("User created");
  }
}
