// Product classes
interface Transport {
  introduce(): void;
  deliver(): void;
}

class Car implements Transport {
  name: string;
  price: number;
  capacity: number;

  constructor(name: string, price: number, capacity: number) {
    this.name = name;
    this.price = price;
    this.capacity = capacity;
  }

  public introduce(): void {
    console.log(
      `Car name: ${this.name}\nCapacity: ${this.capacity}\nPrice: ${this.price}`
    );
  }

  public deliver(): void {
    console.log(`Car ${this.name} is delivering`);
  }
}

class Truck implements Transport {
  name: string;
  price: number;
  capacity: number;

  constructor(name: string, price: number, capacity: number) {
    this.name = name;
    this.price = price;
    this.capacity = capacity;
  }

  public introduce(): void {
    console.log(
      `Truck name: ${this.name}\nCapacity: ${this.capacity}\nPrice: ${this.price}`
    );
  }

  public deliver(): void {
    console.log(`Truck ${this.name} is delivering`);
  }
}

class Ship implements Transport {
  name: string;
  price: number;
  capacity: number;
  color: string;

  constructor(name: string, price: number, capacity: number, color: string) {
    this.name = name;
    this.price = price;
    this.capacity = capacity;
    this.color = color;
  }

  public introduce(): void {
    console.log(
      `Ship name: ${this.name}\nColor: ${this.color}\nCapacity: ${this.capacity}\nPrice: ${this.price}`
    );
  }

  public deliver(): void {
    console.log(`Ship ${this.name} is delivering`);
  }
}

class Speedboat implements Transport {
  name: string;
  price: number;
  capacity: number;
  color: string;

  constructor(name: string, price: number, capacity: number, color: string) {
    this.name = name;
    this.price = price;
    this.capacity = capacity;
    this.color = color;
  }

  public introduce(): void {
    console.log(
      `Speedboat name: ${this.name}\nColor: ${this.color}\nCapacity: ${this.capacity}\nPrice: ${this.price}`
    );
  }

  public deliver(): void {
    console.log(`Speedboat ${this.name} is delivering`);
  }
}

// Creator classes
abstract class TransportFactory {
  public abstract createTransport(type: number, obj: any): Transport;

  public booking(transport: Transport): void {
    transport.introduce();
    transport.deliver();
  }
}

class GroundTransport extends TransportFactory {
  public createTransport(type: number, obj: any): Transport {
    switch (type) {
      case 1:
        return new Car(obj.name, obj.price, obj.capacity);
      case 2:
        return new Truck(obj.name, obj.price, obj.capacity);
      default:
        return new Car(obj.name, obj.price, obj.capacity);
    }
  }
}

class SeaTransport extends TransportFactory {
  public createTransport(type: number, obj: any): Transport {
    switch (type) {
      case 1:
        return new Ship(obj.name, obj.price, obj.capacity, obj.color);
      case 2:
        return new Speedboat(obj.name, obj.price, obj.capacity, obj.color);
      default:
        return new Ship(obj.name, obj.price, obj.capacity, obj.color);
    }
  }
}

const main = (factory: TransportFactory, type: number, obj: any) => {
  const transport: Transport = factory.createTransport(type, obj);
  factory.booking(transport);
  console.log("\n");
};

main(new GroundTransport(), 1, {
  name: "Ranger Rover 1858",
  price: 1000,
  capacity: 5000,
});
main(new GroundTransport(), 2, {
  name: "Hyundai Meta 3555",
  price: 3000,
  capacity: 10000,
});
main(new SeaTransport(), 1, {
  name: "Yamaha Soda 1111",
  price: 2000,
  capacity: 7000,
  color: "red",
});
main(new SeaTransport(), 2, {
  name: "Yamaha Speedy XX55",
  price: 5000,
  capacity: 10000,
  color: "blue",
});
