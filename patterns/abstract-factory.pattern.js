var abstractFactoryPatternSpace = function () {
    var WindowButton = /** @class */ (function () {
        function WindowButton(title) {
            this.title = title;
        }
        WindowButton.prototype.display = function () {
            console.log("Display window button: ".concat(this.title));
        };
        return WindowButton;
    }());
    var MacButton = /** @class */ (function () {
        function MacButton(title) {
            this.title = title;
        }
        MacButton.prototype.display = function () {
            console.log("Display mac button: ".concat(this.title));
        };
        return MacButton;
    }());
    var WindowCheckbox = /** @class */ (function () {
        function WindowCheckbox() {
        }
        WindowCheckbox.prototype.display = function () {
            console.log("Display window checkbox");
        };
        return WindowCheckbox;
    }());
    var MacCheckbox = /** @class */ (function () {
        function MacCheckbox() {
        }
        MacCheckbox.prototype.display = function () {
            console.log("Display mac checkbox");
        };
        return MacCheckbox;
    }());
    var WindowFactory = /** @class */ (function () {
        function WindowFactory() {
        }
        WindowFactory.prototype.createButton = function (title) {
            return new WindowButton(title);
        };
        WindowFactory.prototype.createCheckbox = function () {
            return new WindowCheckbox();
        };
        return WindowFactory;
    }());
    var MacFactory = /** @class */ (function () {
        function MacFactory() {
        }
        MacFactory.prototype.createButton = function (title) {
            return new MacButton(title);
        };
        MacFactory.prototype.createCheckbox = function () {
            return new MacCheckbox();
        };
        return MacFactory;
    }());
    // Client code: Display only window style when on window os and mac style when on mac os
    var displayUI = function (factory) {
        factory.createButton("Release").display();
        factory.createCheckbox().display();
    };
    var main = function (os) {
        switch (os) {
            case "window":
                displayUI(new WindowFactory());
                break;
            case "mac":
                displayUI(new MacFactory());
                break;
            default:
                displayUI(new WindowFactory());
        }
    };
    main("window");
    main("mac");
};
abstractFactoryPatternSpace();
