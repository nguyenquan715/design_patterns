const builderPatternSpace = () => {
  class Product1 {
    public parts: string[] = [];

    public addPart(part: string): void {
      this.parts.push(`${part}1`);
    }

    public getParts(): void {
      console.log(`Product parts: ${this.parts.join(", ")}\n`);
    }
  }

  class Product2 {
    private _partA!: string;
    public get partA(): string {
      return this._partA;
    }
    public set partA(value: string) {
      this._partA = `${value}2`;
    }
    private _partB!: string;
    public get partB(): string {
      return this._partB;
    }
    public set partB(value: string) {
      this._partB = `${value}2`;
    }
    private _partC!: string;
    public get partC(): string {
      return this._partC;
    }
    public set partC(value: string) {
      this._partC = `${value}2`;
    }

    public getParts(): void {
      console.log(
        `Product parts: ${this.partA}, ${this.partB}, ${this.partC}\n`
      );
    }
  }

  interface Builder {
    reset(): void;
    producePartA(): void;
    producePartB(): void;
    producePartC(): void;
  }

  class Builder1 implements Builder {
    private product!: Product1;

    constructor() {
      this.reset();
    }

    public reset(): void {
      this.product = new Product1();
    }
    public producePartA(): void {
      this.product.addPart("PartA");
    }
    public producePartB(): void {
      this.product.addPart("PartB");
    }
    public producePartC(): void {
      this.product.addPart("PartC");
    }

    public getProduct(): Product1 {
      const result = this.product;
      this.reset();
      return result;
    }
  }

  class Builder2 implements Builder {
    private product!: Product2;

    constructor() {
      this.reset();
    }

    public reset(): void {
      this.product = new Product2();
    }
    public producePartA(): void {
      this.product.partA = "PartA";
    }
    public producePartB(): void {
      this.product.partB = "PartB";
    }
    public producePartC(): void {
      this.product.partC = "PartC";
    }

    public getProduct(): Product2 {
      const result = this.product;
      this.reset();
      return result;
    }
  }

  class Director {
    private builder!: Builder;

    public useBuilder(builder: Builder): void {
      this.builder = builder;
    }

    public buildMinimalProduct(): void {
      this.builder.producePartA();
    }

    public buildFullProduct(): void {
      this.builder.producePartA();
      this.builder.producePartB();
      this.builder.producePartC();
    }
  }

  const produceProduct1 = (director: Director) => {
    const builder = new Builder1();
    director.useBuilder(builder);

    console.log(`Basic product:`);
    director.buildMinimalProduct();
    builder.getProduct().getParts();

    console.log(`Full product:`);
    director.buildFullProduct();
    builder.getProduct().getParts();

    console.log(`Custom product:`);
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().getParts();
  };

  const produceProduct2 = (director: Director) => {
    const builder = new Builder2();
    director.useBuilder(builder);

    console.log(`Basic product:`);
    director.buildMinimalProduct();
    builder.getProduct().getParts();

    console.log(`Full product:`);
    director.buildFullProduct();
    builder.getProduct().getParts();

    console.log(`Custom product:`);
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().getParts();
  };

  const director = new Director();
  produceProduct1(director);
  produceProduct2(director);
};

builderPatternSpace();
