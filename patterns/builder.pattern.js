var builderPatternSpace = function () {
    var Product1 = /** @class */ (function () {
        function Product1() {
            this.parts = [];
        }
        Product1.prototype.addPart = function (part) {
            this.parts.push("".concat(part, "1"));
        };
        Product1.prototype.getParts = function () {
            console.log("Product parts: ".concat(this.parts.join(", "), "\n"));
        };
        return Product1;
    }());
    var Product2 = /** @class */ (function () {
        function Product2() {
        }
        Object.defineProperty(Product2.prototype, "partA", {
            get: function () {
                return this._partA;
            },
            set: function (value) {
                this._partA = "".concat(value, "2");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Product2.prototype, "partB", {
            get: function () {
                return this._partB;
            },
            set: function (value) {
                this._partB = "".concat(value, "2");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Product2.prototype, "partC", {
            get: function () {
                return this._partC;
            },
            set: function (value) {
                this._partC = "".concat(value, "2");
            },
            enumerable: false,
            configurable: true
        });
        Product2.prototype.getParts = function () {
            console.log("Product parts: ".concat(this.partA, ", ").concat(this.partB, ", ").concat(this.partC, "\n"));
        };
        return Product2;
    }());
    var Builder1 = /** @class */ (function () {
        function Builder1() {
            this.reset();
        }
        Builder1.prototype.reset = function () {
            this.product = new Product1();
        };
        Builder1.prototype.producePartA = function () {
            this.product.addPart("PartA");
        };
        Builder1.prototype.producePartB = function () {
            this.product.addPart("PartB");
        };
        Builder1.prototype.producePartC = function () {
            this.product.addPart("PartC");
        };
        Builder1.prototype.getProduct = function () {
            var result = this.product;
            this.reset();
            return result;
        };
        return Builder1;
    }());
    var Builder2 = /** @class */ (function () {
        function Builder2() {
            this.reset();
        }
        Builder2.prototype.reset = function () {
            this.product = new Product2();
        };
        Builder2.prototype.producePartA = function () {
            this.product.partA = "PartA";
        };
        Builder2.prototype.producePartB = function () {
            this.product.partB = "PartB";
        };
        Builder2.prototype.producePartC = function () {
            this.product.partC = "PartC";
        };
        Builder2.prototype.getProduct = function () {
            var result = this.product;
            this.reset();
            return result;
        };
        return Builder2;
    }());
    var Director = /** @class */ (function () {
        function Director() {
        }
        Director.prototype.useBuilder = function (builder) {
            this.builder = builder;
        };
        Director.prototype.buildMinimalProduct = function () {
            this.builder.producePartA();
        };
        Director.prototype.buildFullProduct = function () {
            this.builder.producePartA();
            this.builder.producePartB();
            this.builder.producePartC();
        };
        return Director;
    }());
    var produceProduct1 = function (director) {
        var builder = new Builder1();
        director.useBuilder(builder);
        console.log("Basic product:");
        director.buildMinimalProduct();
        builder.getProduct().getParts();
        console.log("Full product:");
        director.buildFullProduct();
        builder.getProduct().getParts();
        console.log("Custom product:");
        builder.producePartA();
        builder.producePartC();
        builder.getProduct().getParts();
    };
    var produceProduct2 = function (director) {
        var builder = new Builder2();
        director.useBuilder(builder);
        console.log("Basic product:");
        director.buildMinimalProduct();
        builder.getProduct().getParts();
        console.log("Full product:");
        director.buildFullProduct();
        builder.getProduct().getParts();
        console.log("Custom product:");
        builder.producePartA();
        builder.producePartC();
        builder.getProduct().getParts();
    };
    var director = new Director();
    produceProduct1(director);
    produceProduct2(director);
};
builderPatternSpace();
