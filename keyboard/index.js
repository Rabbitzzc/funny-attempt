window.onload = function () {
    /**
     * 
     * @param {*} e 
     * @description 监听按键是否按键下去
     */
    let keyPressed = (e) => {
        let kc = e.keyCode;

        if ((kc >= 65 && kc <= 90) || kc == 32) {
            if (kc == 81) {
                kd[0].classList.add("key__down");
            } else if (kc == 87) {
                kd[1].classList.add("key__down");
            } else if (kc == 69) {
                kd[2].classList.add("key__down");
            } else if (kc == 82) {
                kd[3].classList.add("key__down");
            } else if (kc == 84) {
                kd[4].classList.add("key__down");
            } else if (kc == 89) {
                kd[5].classList.add("key__down");
            } else if (kc == 85) {
                kd[6].classList.add("key__down");
            } else if (kc == 73) {
                kd[7].classList.add("key__down");
            } else if (kc == 79) {
                kd[8].classList.add("key__down");
            } else if (kc == 80) {
                kd[9].classList.add("key__down");
            } else if (kc == 65) {
                kd[10].classList.add("key__down");
            } else if (kc == 83) {
                kd[11].classList.add("key__down");
            } else if (kc == 68) {
                kd[12].classList.add("key__down");
            } else if (kc == 70) {
                kd[13].classList.add("key__down");
            } else if (kc == 71) {
                kd[14].classList.add("key__down");
            } else if (kc == 72) {
                kd[15].classList.add("key__down");
            } else if (kc == 74) {
                kd[16].classList.add("key__down");
            } else if (kc == 75) {
                kd[17].classList.add("key__down");
            } else if (kc == 76) {
                kd[18].classList.add("key__down");
            } else if (kc == 90) {
                kd[19].classList.add("key__down");
            } else if (kc == 88) {
                kd[20].classList.add("key__down");
            } else if (kc == 67) {
                kd[21].classList.add("key__down");
            } else if (kc == 86) {
                kd[22].classList.add("key__down");
            } else if (kc == 66) {
                kd[23].classList.add("key__down");
            } else if (kc == 78) {
                kd[24].classList.add("key__down");
            } else if (kc == 77) {
                kd[25].classList.add("key__down");
            } else if (kc == 32) {
                kd[26].classList.add("key__down");
                textbox.innerHTML += "&nbsp;";
            }
        }
    }

    // 当按键结束，则去掉样式
    // over and remove class
    let keyReleased = (e) => {
        let kc = e.keyCode;
        if (kc == 81) {
            kd[0].classList.remove("key__down");
        } else if (kc == 87) {
            kd[1].classList.remove("key__down");
        } else if (kc == 69) {
            kd[2].classList.remove("key__down");
        } else if (kc == 82) {
            kd[3].classList.remove("key__down");
        } else if (kc == 84) {
            kd[4].classList.remove("key__down");
        } else if (kc == 89) {
            kd[5].classList.remove("key__down");
        } else if (kc == 85) {
            kd[6].classList.remove("key__down");
        } else if (kc == 73) {
            kd[7].classList.remove("key__down");
        } else if (kc == 79) {
            kd[8].classList.remove("key__down");
        } else if (kc == 80) {
            kd[9].classList.remove("key__down");
        } else if (kc == 65) {
            kd[10].classList.remove("key__down");
        } else if (kc == 83) {
            kd[11].classList.remove("key__down");
        } else if (kc == 68) {
            kd[12].classList.remove("key__down");
        } else if (kc == 70) {
            kd[13].classList.remove("key__down");
        } else if (kc == 71) {
            kd[14].classList.remove("key__down");
        } else if (kc == 72) {
            kd[15].classList.remove("key__down");
        } else if (kc == 74) {
            kd[16].classList.remove("key__down");
        } else if (kc == 75) {
            kd[17].classList.remove("key__down");
        } else if (kc == 76) {
            kd[18].classList.remove("key__down");
        } else if (kc == 90) {
            kd[19].classList.remove("key__down");
        } else if (kc == 88) {
            kd[20].classList.remove("key__down");
        } else if (kc == 67) {
            kd[21].classList.remove("key__down");
        } else if (kc == 86) {
            kd[22].classList.remove("key__down");
        } else if (kc == 66) {
            kd[23].classList.remove("key__down");
        } else if (kc == 78) {
            kd[24].classList.remove("key__down");
        } else if (kc == 77) {
            kd[25].classList.remove("key__down");
        } else if (kc == 32) {
            kd[26].classList.remove("key__down");
        }
    }
    // advertise key click
    const kd = document.querySelectorAll(".key");
    const textbox = document.querySelector(".textbox");

    kd.forEach(v => {
        v.addEventListener('mousedown', ()=>{
            v.classList.add("key__down")
        })
        v.addEventListener('mouseup', ()=>{
            v.classList.remove("key__down")
        })
    })

    window.addEventListener('keydown', keyPressed)
    window.addEventListener('keyup', keyReleased)

}