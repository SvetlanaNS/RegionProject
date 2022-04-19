
    function checker() {
        document.querySelectorAll(".field_error").forEach(el => el.classList.remove("field_error"));
        let result = "";
        let str;
        let isBad;
        str = document.getElementById("Name").value;
        let regExp = /[^а-я a-z]/ig;
        isBad = regExp.test(str);
        if (isBad) {
            result = "Формат имени не верен!\n";
            document.getElementById("Name").classList.add("field_error");
        }
        //Поле с телефоном:
        // regExp =/^(\+7\(\d{3}\)\d{3}-\d{4})/ig;
        // /^(\+7\(\d{3}\)\d{3}-\d{4})[^\w`+/*-.~!@#$%^&*()_=]/;
        // regExp = /^(\+7\(\d{3}\)\d{3}-\d{4})[^\w@#№.,*+-=?^<>$%{}():;"'а-я\\\|]/ig;
        // regExp= /^(\+7\(\d{3}\)\d{3}-\d{4})\b[^\w@#№.,*+-=?^<>$%{}():;"'а-я\\\|]{0,1}/ig;
        // regExp=/^(\+7\(\d{3}\)\d{3}-)\d{4}\b[^\w@#№.,\*\+=\?<>$%{}():;"'а-я\\\|\^]/ig;
        // regExp= /^(\+7\(\d{3}\)\d{3}\-\d{4})[^\w@#№.,*+=?<>$%{}():;"'а-я\\\|\^]/ig;
        str = document.getElementById("Tel").value;
        regExp = /^(\+7\(\d{3}\)\d{3}-)(\d{4})$/ig;
        isBad=!regExp.test(str);
        if (isBad) {
            result += "Формат телефона не верен!\n";
            document.getElementById("Tel").classList.add("field_error");
        }
        //Поле с емайлом
        str = document.getElementById("Email").value;
        regExp = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/ig;
        if (!regExp.test(str)) {
            result += "Формат e-mail не верен!\n";
            document.getElementById("Email").classList.add("field_error");
        }
        //Выводим результат:
        if (result === "") result = "Всё хорошо!";
            document.querySelector(".check-result").innerHTML = result;
    }
