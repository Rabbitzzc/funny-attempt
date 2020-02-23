(function () {
    window.addEventListener('load', function () {
        let canvas = document.getElementById('canvas');

        if (!canvas || !canvas.getContext) {
            return false;
        }

        // min ~ max
        function rand(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        /********************
          let
        ********************/

        // canvas 
        let ctx = canvas.getContext('2d');

        // canvas 的宽高
        let X = canvas.width = window.innerWidth;
        let Y = canvas.height = window.innerHeight;

        let flg = true;
        // 鼠标移动的位置
        let mouseX = null;
        let mouseY = null;

        /********************
          Particle
        ********************/

        // 圆圈数量
        let particleNum = 500;
        let particles = [];

        // 小屏幕则展示一半个数
        if (X < 768) {
            particleNum = 250;
        }


        // Particle 对象
        function Particle(ctx, x, y, r) {
            this.ctx = ctx;
            this.init(x, y, r);
        }

        // 初始化函数
        Particle.prototype.init = function (x, y, r) {
            this.x = x;
            this.y = y;
            this.x1 = this.x;
            this.y1 = this.y;
            this.r = r;
            this.v = {
                x: rand(-10, 10) * Math.random() * 0.5,
                y: rand(-10, 10) * Math.random() * 0.5
            };
            this.c = {
                r: rand(128, 255),
                g: rand(128, 255),
                b: rand(128, 255)
            };
        };

        // draw 函数
        Particle.prototype.draw = function () {
            let ctx = this.ctx;
            ctx.save();
            ctx.beginPath();
            ctx.globalAlpha = 0.8;
            ctx.fillStyle = 'rgb(' + this.c.r + ', ' + this.c.g + ', ' + this.c.b + ')';
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.restore();
        };

        // 位置更新
        Particle.prototype.updatePosition = function () {
            if (mouseX !== null) {
                if (flg) {
                    let angle = Math.atan2(this.y1 - mouseY, this.x1 - mouseX);
                    this.x -= Math.cos(angle) * 5;
                    this.y -= Math.sin(angle) * 5;
                    this.x1 = this.x;
                    this.y1 = this.y;
                }
            }
            this.x += this.v.x;
            this.y += this.v.y;
        };

        Particle.prototype.wrapPosition = function () {
            if (this.x - this.r < 0) {
                this.v.x *= -1;
            }
            if (this.x + this.r > X) {
                this.v.x *= -1;
            }
            if (this.y - this.r < 0) {
                this.v.y *= -1;
            }
            if (this.y + this.r > Y) {
                this.v.y *= -1;
            }
        };

        // resize
        Particle.prototype.resize = function () {
            this.x = rand(0, X);
            this.y = rand(0, Y);
        };

        // 渲染函数
        Particle.prototype.render = function () {
            this.updatePosition();
            this.wrapPosition();
            this.draw();
        };

        // 渲染 particleNum 个 小弹珠
        for (let i = 0; i < particleNum; i++) {
            let particle = new Particle(ctx, rand(0, X), rand(0, Y), rand(1, 20));
            particles.push(particle);
        }

        /********************
          Render
        ********************/

        function render() {
            // 先清空所有的元素
            // 如果你想看到奇迹，可以尝试删除这行代码
            ctx.clearRect(0, 0, X, Y);
            for (let i = 0; i < particles.length; i++) {
                particles[i].render();
            }
            requestAnimationFrame(render);
        }

        render();

        /********************
          Event
        ********************/

        function onResize() {
            X = canvas.width = window.innerWidth;
            Y = canvas.height = window.innerHeight;
            for (let i = 0; i < particles.length; i++) {
                particles[i].resize();
            }
        }

        window.addEventListener('resize', function () {
            onResize();
        });

        // flg 为 true 表示可以移动
        window.addEventListener('click', function (e) {
            if (flg) {
                flg = false;
            } else {
                flg = true;
            }
        }, false);

        window.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        window.addEventListener('touchmove', function (e) {
            if (e.targetTouches.length === 1) {
                let touch = event.targetTouches[0];
                mouseX = touch.pageX;
                mouseY = touch.pageY;
            }
        }, false);

    });
})();