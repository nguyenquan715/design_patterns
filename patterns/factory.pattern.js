var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var factoryPatternSpace = function () {
    var Car = /** @class */ (function () {
        function Car(name, price, capacity) {
            this.name = name;
            this.price = price;
            this.capacity = capacity;
        }
        Car.prototype.introduce = function () {
            console.log("Car name: ".concat(this.name, "\nCapacity: ").concat(this.capacity, "\nPrice: ").concat(this.price));
        };
        Car.prototype.deliver = function () {
            console.log("Car ".concat(this.name, " is delivering"));
        };
        return Car;
    }());
    var Truck = /** @class */ (function () {
        function Truck(name, price, capacity) {
            this.name = name;
            this.price = price;
            this.capacity = capacity;
        }
        Truck.prototype.introduce = function () {
            console.log("Truck name: ".concat(this.name, "\nCapacity: ").concat(this.capacity, "\nPrice: ").concat(this.price));
        };
        Truck.prototype.deliver = function () {
            console.log("Truck ".concat(this.name, " is delivering"));
        };
        return Truck;
    }());
    var Ship = /** @class */ (function () {
        function Ship(name, price, capacity, color) {
            this.name = name;
            this.price = price;
            this.capacity = capacity;
            this.color = color;
        }
        Ship.prototype.introduce = function () {
            console.log("Ship name: ".concat(this.name, "\nColor: ").concat(this.color, "\nCapacity: ").concat(this.capacity, "\nPrice: ").concat(this.price));
        };
        Ship.prototype.deliver = function () {
            console.log("Ship ".concat(this.name, " is delivering"));
        };
        return Ship;
    }());
    var Speedboat = /** @class */ (function () {
        function Speedboat(name, price, capacity, color) {
            this.name = name;
            this.price = price;
            this.capacity = capacity;
            this.color = color;
        }
        Speedboat.prototype.introduce = function () {
            console.log("Speedboat name: ".concat(this.name, "\nColor: ").concat(this.color, "\nCapacity: ").concat(this.capacity, "\nPrice: ").concat(this.price));
        };
        Speedboat.prototype.deliver = function () {
            console.log("Speedboat ".concat(this.name, " is delivering"));
        };
        return Speedboat;
    }());
    // Creator classes
    var TransportFactory = /** @class */ (function () {
        function TransportFactory() {
        }
        TransportFactory.prototype.booking = function (transport) {
            transport.introduce();
            transport.deliver();
        };
        return TransportFactory;
    }());
    var GroundTransport = /** @class */ (function (_super) {
        __extends(GroundTransport, _super);
        function GroundTransport() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GroundTransport.prototype.createTransport = function (type, obj) {
            switch (type) {
                case 1:
                    return new Car(obj.name, obj.price, obj.capacity);
                case 2:
                    return new Truck(obj.name, obj.price, obj.capacity);
                default:
                    return new Car(obj.name, obj.price, obj.capacity);
            }
        };
        return GroundTransport;
    }(TransportFactory));
    var SeaTransport = /** @class */ (function (_super) {
        __extends(SeaTransport, _super);
        function SeaTransport() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SeaTransport.prototype.createTransport = function (type, obj) {
            switch (type) {
                case 1:
                    return new Ship(obj.name, obj.price, obj.capacity, obj.color);
                case 2:
                    return new Speedboat(obj.name, obj.price, obj.capacity, obj.color);
                default:
                    return new Ship(obj.name, obj.price, obj.capacity, obj.color);
            }
        };
        return SeaTransport;
    }(TransportFactory));
    var main = function (factory, type, obj) {
        var transport = factory.createTransport(type, obj);
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
};
factoryPatternSpace();
