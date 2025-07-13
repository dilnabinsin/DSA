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