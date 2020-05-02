//var chosenColor;

function getNextColorClass() {
    var themePrefix = "theme-base-"
    var colors = ['08', // Red
                  '09', // Orange
                //'0a', // Yellow
                  '0b', // Green
                  '0c', // Cyan
                  '0d', // Blue
                  '0e', // Magenta
                  '0f', // Brown
    ];

    var currentClass = document.body.className
    var currentColor = currentClass.slice(-2);
    var currentIndex = colors.indexOf(currentColor); // -1 if no color class
    var nextIndex = (currentIndex == colors.length ? 0 : currentIndex + 1);
    var nextColor = colors[nextIndex];
    var nextClass;
    if (nextColor) {
        nextClass = themePrefix + nextColor;
    } else {
        nextClass = ""
    }
    console.log(currentClass, " to ", nextClass);
    return nextClass;
    //chosenColor = nextClass;
}

function updateColor() {
    var nextClass = getNextColorClass();
    document.body.className = nextClass;
    console.log("Changed color.")
    if(typeof(Storage) !== "undefined") {
        localStorage.setItem("colorClass", nextClass);
        console.log("Saved color choice to web storage.");
        console.log(localStorage);
    } else {
        console.log("No web storage support, color won't be saved.");
    }
}

function addColorButton() {
    var buttonList = document.getElementById("sidebar-buttons");
    var colorButton = document.createElement("li");
    colorButton.id = "color-button";
    colorButton.onclick = function() { updateColor(); };
    colorButton.innerHTML = '<a class="btn-social btn-outline" title="I wonder what this does..."><i class="fa fa-fw fa-question-circle"></i></a>';
    console.log(colorButton);
    buttonList.appendChild(colorButton);
}

function addColorLink() {
    var credits = document.getElementById("credits");
    var colorlink = document.createElement("a");
    var linkText = document.createTextNode("Want a new color?");
    colorlink.appendChild(linkText);
    colorlink.title = "Click for relief!";
    colorlink.href = "#";
    colorlink.onclick = function() { updateColor(); };
    credits.innerHTML += " ";
    credits.appendChild(colorlink);
}

function restoreColorChoice() {
    var savedColor = localStorage.getItem("colorClass");
    if (savedColor !== null) {
        document.body.className = savedColor;
        console.log("Found saved color: ", savedColor);
    } else {
        console.log("No saved color.");
    }
}

function initializeColors() {
    restoreColorChoice();
    addColorButton();
    //addColorLink();
}

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
//window.onload = initializeColors;
