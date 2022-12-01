(function () {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.inputs');
    let clear = document.querySelector('.clear-button');
    let equals = document.querySelector('.equals');
    let del = document.querySelector(".delete-button");


    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    equals.addEventListener('click', function (e) {
        if (screen.value === "") {
            screen.value = "";
        }
        else {

            let ans = eval(screen.value);
            screen.value = ans;
        }

    })

    del.addEventListener("click", function (e) {
        let str = screen.value;
        if (str.length == 0) {
            screen.value = "";
        }
        else {
            str = str.slice(0, str.length - 1);
            screen.value = str;
        }

    })


    clear.addEventListener('click', function (e) {
        screen.value = "";
    })

})();