// Product classes
interface Button {
  display(): void;
}

class WindowButton implements Button {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
  public display(): void {
    console.log(`Display window button: ${this.title}`);
  }
}

class MacButton implements Button {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
  public display(): void {
    console.log(`Display mac button: ${this.title}`);
  }
}

interface Checkbox {
  display(): void;
}

class WindowCheckbox implements Checkbox {
  public display(): void {
    console.log(`Display window checkbox`);
  }
}

class MacCheckbox implements Checkbox {
  public display(): void {
    console.log(`Display mac checkbox`);
  }
}

// Factory
interface AbstractFactory {
  createButton(title: string): Button;
  createCheckbox(): Checkbox; 
}

class WindowFactory implements AbstractFactory {
  public createButton(title: string): Button {
    return new WindowButton(title);
  }
  createCheckbox(): Checkbox {
    return new WindowCheckbox();
  }
}

class MacFactory implements AbstractFactory {
  createButton(title: string): Button {
    return new MacButton(title);
  }
  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

// Client code: Display only window style when on window os and mac style when on mac os
const displayUI = (factory: AbstractFactory) => {
  factory.createButton('Release');
  factory.createCheckbox();
}

const main1 = (os: string) => {
  switch (os) {
    case 'window':
      displayUI(new WindowFactory());
      break;
    case 'mac':
      displayUI(new MacFactory());
      break;
    default:
      displayUI(new WindowFactory());
  }
}
