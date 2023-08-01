// Import the data to customize and insert them into page

// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible"
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)"
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
      },
      "+=0.5"
    )
    .to(
      ".idea-5 .smiley",
      0.7,
      {
        rotation: 90,
        x: 8
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400
      },
      {
        opacity: 1,
        y: -1000
      },
      0.2
    )
    .from(
      ".lydia-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      },
      "party"
    )
    .to(
      ".last-smile",
      0.5,
      {
          rotation: 90
      },
      "+=1"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4
      },
      0.3
    )
    .to(".six", 0.5, {
      zIndex: "100"
    })
    /*.staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90
      },
      "+=1"
    )*/;

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  /*const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });*/
};

// Run fetch and animation in sequence
// fetchData();

$(function(){
    // 烟花特效
    //烟花特效
    var canvas = document.getElementById('fireworks'),
        ctx = canvas.getContext('2d'),
        fireworks = [],
        particles = [],
        hue = 120,
        limiterTotal = 5,
        limiterTick = 0,
        timerTotal = 80,
        timerTick = 0,
        mousedown = false,
        mx,
        my;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    function random(min, max) {
        return Math.random() * (max - min) + min;
    }
    function calculateDistance(p1x, p1y, p2x, p2y) {
        var xDistance = p1x - p2x,
            yDistance = p1y - p2y;
        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    }
    function Firework(sx, sy, tx, ty) {
        this.x = sx;
        this.y = sy;
        this.sx = sx;
        this.sy = sy;
        this.tx = tx;
        this.ty = ty;
        this.distanceToTarget = calculateDistance(sx, sy, tx, ty);
        this.distanceTraveled = 0;
        this.coordinates = [];
        this.coordinateCount = 3;
        while (this.coordinateCount--) {
            this.coordinates.push([this.x, this.y]);
        }
        this.angle = Math.atan2(ty - sy, tx - sx);
        this.speed = 2;
        this.acceleration = 1.05;
        this.brightness = random(50, 70);
        this.targetRadius = 1;
    }
    Firework.prototype.update = function (index) {
        this.coordinates.pop();
        this.coordinates.unshift([this.x, this.y]);
        if (this.targetRadius < 8) {
            this.targetRadius += 0.3;
        } else {
            this.targetRadius = 1;
        }
        this.speed *= this.acceleration;
        var vx = Math.cos(this.angle) * this.speed,
            vy = Math.sin(this.angle) * this.speed;
        this.distanceTraveled = calculateDistance(this.sx, this.sy, this.x + vx, this.y + vy);
        if (this.distanceTraveled >= this.distanceToTarget) {
            createParticles(this.tx, this.ty);
            fireworks.splice(index, 1);
        } else {
            this.x += vx;
            this.y += vy;
        }
    }
    Firework.prototype.draw = function () {
        ctx.beginPath();
        ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.tx, this.ty, this.targetRadius, 0, Math.PI * 2);
        ctx.stroke();
    }
    function createParticles(x, y) {
        var particleCount = 30;
        while (particleCount--) {
            particles.push(new Particle(x, y));
        }
    }
    function Particle(x, y) {
        this.x = x;
        this.y = y;
        this.coordinates = [];
        this.coordinateCount = 5;
        while (this.coordinateCount--) {
            this.coordinates.push([this.x, this.y]);
        }
        this.angle = random(0, Math.PI * 2);
        this.speed = random(1, 10);
        this.friction = 0.95;
        this.gravity = 1;
        this.hue = random(hue - 20, hue + 20);
        this.brightness = random(50, 80);
        this.alpha = 1;
        this.decay = random(0.015, 0.03);
    }
    Particle.prototype.update = function (index) {
        this.coordinates.pop();
        this.coordinates.unshift([this.x, this.y]);
        this.speed *= this.friction;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed + this.gravity;
        this.alpha -= this.decay;
        if (this.alpha <= this.decay) {
            particles.splice(index, 1);
        }
    }
    Particle.prototype.draw = function () {
        ctx.beginPath();
        ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
        ctx.stroke();
    }
    function loop() {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'lighter';
        var i = fireworks.length;
        while (i--) {
            fireworks[i].draw();
            fireworks[i].update(i);
        }
        var i = particles.length;
        while (i--) {
            particles[i].draw();
            particles[i].update(i);
        }
        if (timerTick >= timerTotal) {
            if (!mousedown) {
                fireworks.push(new Firework(canvas.width / 2, canvas.height, random(0, canvas.width), random(0, canvas.height / 2)));
                timerTick = 0;
            }
        } else {
            timerTick++;
        }
        if (limiterTick >= limiterTotal) {
            if (mousedown) {
                fireworks.push(new Firework(canvas.width / 2, canvas.height, mx, my));
                limiterTick = 0;
            }
        } else {
            limiterTick++;
        }
        requestAnimationFrame(loop);
    }

    var playerContent1 = $('#player-content1');// 歌曲信息模块部分dom元素
    var musicName = $('.music-name');          // 歌曲名部分dom元素
    var artistName = $('.artist-name');        // 歌手名部分dom元素

    var musicImgs = $('.music-imgs');          // 左侧封面图dom元素

    var playPauseBtn = $('.play-pause');       // 播放/暂停按钮 dom元素
    var playPrevBtn = $('.prev');              // 上一首按钮 dom元素
    var playNextBtn = $('.next')               // 下一首按钮 dom元素

    var time = $('.time');                     // 时间信息部分 dom元素
    var tProgress = $('.current-time');        // 当前播放时间文本部分 dom元素
    var totalTime = $('.total-time');          // 歌曲总时长文本部分 dom元素

    var sArea = $('#s-area');                  // 进度条部分
    var insTime = $('#ins-time');              // 鼠标移动至进度条上面，显示的信息部分
    var sHover = $('#s-hover');                // 鼠标移动至进度条上面，前面变暗的进度条部分
    var seekBar = $('#seek-bar');              // 播放进度条部分

    // 一些计算所需的变量
    var seekT, seekLoc, seekBarPos, cM, ctMinutes, ctSeconds, curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime, nTime = 0
    var musicImgsData = ['img/bg.jpg','img/bg1.jpg']    // 图片地址数组
    var musicNameData = ['Happy Birthday To You','唯一'];                   // 歌曲名数组
    var artistNameData = ['Various Artists','告五人']            // 创作歌手数组
    var musicUrls=['mp3/m1.m4a','mp3/m2.mp3',];// 歌曲mp3数组
    var currIndex = -1;              // 当前播放索引

    var buffInterval = null          // 初始化定时器 判断是否需要缓冲
    var len = musicNameData.length;  // 歌曲长度

    var playHtml = false;


    // 点击 播放/暂停 按钮，触发该函数
    // 作用：根据audio的paused属性 来检测当前音频是否已暂停 true:暂停 false:播放中
    function playPause(){

        if(audio.paused){
            playerContent1.addClass('active'); // 内容栏上移
            musicImgs.addClass('active');      // 左侧图片开始动画效果
            playPauseBtn.attr('class','btn play-pause icon-zanting iconfont') // 显示暂停图标
            checkBuffering(); // 检测是否需要缓冲
            audio.play();     // 播放

            if (!playHtml) {
                animationTimeline();
                playHtml = true;
            }
            if ($(window).height() < 900) {
                $('.container1').hide();
            }
        }else{

            playerContent1.removeClass('active'); // 内容栏下移
            musicImgs.removeClass('active');      // 左侧图片停止旋转等动画效果
            playPauseBtn.attr('class','btn play-pause icon-jiediankaishi iconfont'); // 显示播放按钮
            clearInterval(buffInterval);          // 清除检测是否需要缓冲的定时器
            musicImgs.removeClass('buffering');    // 移除缓冲类名
            audio.pause(); // 暂停
        }
    }


    // 鼠标移动在进度条上， 触发该函数
    function showHover(event){

        seekBarPos = sArea.offset();    // 获取进度条长度
        seekT = event.clientX - seekBarPos.left;  //获取当前鼠标在进度条上的位置
        seekLoc = audio.duration * (seekT / sArea.outerWidth()); //当前鼠标位置的音频播放秒数： 音频长度(单位：s)*（鼠标在进度条上的位置/进度条的宽度）

        sHover.width(seekT);  //设置鼠标移动到进度条上变暗的部分宽度

        cM = seekLoc / 60;    // 计算播放了多少分钟： 音频播放秒速/60

        ctMinutes = Math.floor(cM);  // 向下取整
        ctSeconds = Math.floor(seekLoc - ctMinutes * 60); // 计算播放秒数

        if( (ctMinutes < 0) || (ctSeconds < 0) )
            return;

        if( (ctMinutes < 0) || (ctSeconds < 0) )
            return;

        if(ctMinutes < 10)
            ctMinutes = '0'+ctMinutes;
        if(ctSeconds < 10)
            ctSeconds = '0'+ctSeconds;

        if( isNaN(ctMinutes) || isNaN(ctSeconds) )
            insTime.text('--:--');
        else
            insTime.text(ctMinutes+':'+ctSeconds);  // 设置鼠标移动到进度条上显示的信息

        insTime.css({
            'left':seekT,'margin-left':'-21px'}).fadeIn(0);  // 淡入效果显示

    }

    // 鼠标移出进度条，触发该函数
    function hideHover()
    {

        sHover.width(0);  // 设置鼠标移动到进度条上变暗的部分宽度 重置为0
        insTime.text('00:00').css({
            'left':'0px','margin-left':'0px'}).fadeOut(0); // 淡出效果显示
    }

    // 鼠标点击进度条，触发该函数
    function playFromClickedPos()
    {

        audio.currentTime = seekLoc; // 设置音频播放时间 为当前鼠标点击的位置时间
        seekBar.width(seekT);        // 设置进度条播放长度，为当前鼠标点击的长度
        hideHover();                 // 调用该函数，隐藏原来鼠标移动到上方触发的进度条阴影
    }

    // 在音频的播放位置发生改变是触发该函数
    function updateCurrTime()
    {

        nTime = new Date();      // 获取当前时间
        nTime = nTime.getTime(); // 将该时间转化为毫秒数

        // 计算当前音频播放的时间
        curMinutes = Math.floor(audio.currentTime  / 60);
        curSeconds = Math.floor(audio.currentTime  - curMinutes * 60);

        // 计算当前音频总时间
        durMinutes = Math.floor(audio.duration / 60);
        durSeconds = Math.floor(audio.duration - durMinutes * 60);

        // 计算播放进度百分比
        playProgress = (audio.currentTime  / audio.duration) * 100;

        // 如果时间为个位数，设置其格式
        if(curMinutes < 10)
            curMinutes = '0'+curMinutes;
        if(curSeconds < 10)
            curSeconds = '0'+curSeconds;

        if(durMinutes < 10)
            durMinutes = '0'+durMinutes;
        if(durSeconds < 10)
            durSeconds = '0'+durSeconds;

        if( isNaN(curMinutes) || isNaN(curSeconds) )
            tProgress.text('00:00');
        else
            tProgress.text(curMinutes+':'+curSeconds);

        if( isNaN(durMinutes) || isNaN(durSeconds) )
            totalTime.text('00:00');
        else
            totalTime.text(durMinutes+':'+durSeconds);

        if( isNaN(curMinutes) || isNaN(curSeconds) || isNaN(durMinutes) || isNaN(durSeconds) )
            time.removeClass('active');
        else
            time.addClass('active');

        // 设置播放进度条的长度
        seekBar.width(playProgress+'%');

        // 进度条为100 即歌曲播放完时
        if( playProgress == 100 )
        {

            playPauseBtn.attr('class','btn play-pause icon-jiediankaishi iconfont'); // 显示播放按钮
            seekBar.width(0);              // 播放进度条重置为0
            tProgress.text('00:00');       // 播放时间重置为 00:00
            musicImgs.removeClass('buffering').removeClass('active');  // 移除相关类名
            clearInterval(buffInterval);   // 清除定时器

            selectTrack(1);  // 添加这一句，可以实现自动播放
        }
    }

    // 定时器检测是否需要缓冲
    function checkBuffering(){
        clearInterval(buffInterval);
        buffInterval = setInterval(function()
        {

            // 这里如果音频播放了，则nTime为当前时间毫秒数，如果没播放则为0；如果时间间隔过长，也将缓存
            if( (nTime == 0) || (bTime - nTime) > 1000  ){

                musicImgs.addClass('buffering');  // 添加缓存样式类
            } else{

                musicImgs.removeClass('buffering'); // 移除缓存样式类
            }

            bTime = new Date();
            bTime = bTime.getTime();

        },100);
    }

    // 点击上一首/下一首时，触发该函数。
    //注意：后面代码初始化时，会触发一次selectTrack(0)，因此下面一些地方需要判断flag是否为0
    function selectTrack(flag){

        if( flag == 0 || flag == 1 ){
            // 初始 || 点击下一首
            ++ currIndex;
            if(currIndex >=len){
                // 当处于最后一首时，点击下一首，播放索引置为第一首
                currIndex = 0;
            }
        }else{
            // 点击上一首
            --currIndex;
            if(currIndex<=-1){
                // 当处于第一首时，点击上一首，播放索引置为最后一首
                currIndex = len-1;
            }
        }

        if( flag == 0 ){

            playPauseBtn.attr('class','btn play-pause icon-jiediankaishi iconfont'); // 显示播放图标
        }else{

            musicImgs.removeClass('buffering');
            playPauseBtn.attr('class','btn play-pause icon-zanting iconfont') // 显示暂停图标
        }

        seekBar.width(0);           // 重置播放进度条为0
        time.removeClass('active');
        tProgress.text('00:00');    // 播放时间重置
        totalTime.text('00:00');    // 总时间重置

        // 获取当前索引的:歌曲名，歌手名，图片，歌曲链接等信息
        currMusic = musicNameData[currIndex];
        currArtist = artistNameData[currIndex];
        currImg = musicImgsData[currIndex];
        audio.src = musicUrls[currIndex];

        nTime = 0;
        bTime = new Date();
        bTime = bTime.getTime();

        // 如果点击的是上一首/下一首 则设置开始播放，添加相关类名，重新开启定时器
        if(flag != 0){
            audio.play();
            playerContent1.addClass('active');
            musicImgs.addClass('active');
            clearInterval(buffInterval);
            checkBuffering();
        }

        // 将歌手名，歌曲名，图片链接，设置到元素上
        artistName.text(currArtist);
        musicName.text(currMusic);
        musicImgs.find('.img').css({
            'background':'url('+currImg+')'})
    }


    // 初始化函数
    function initPlayer() {
        audio = new Audio();  // 创建Audio对象
        selectTrack(0);       // 初始化第一首歌曲的相关信息
        audio.loop = false;   // 取消歌曲的循环播放功能
        playPauseBtn.on('click',playPause); // 点击播放/暂停 按钮，触发playPause函数
        // 进度条 移入/移出/点击 动作触发相应函数
        sArea.mousemove(function(event){
            showHover(event); });
        sArea.mouseout(hideHover);
        sArea.on('click',playFromClickedPos);
        // 实时更新播放时间
        $(audio).on('timeupdate',updateCurrTime);
        // 上下首切换
        playPrevBtn.on('click',function(){
            selectTrack(-1);} );
        playNextBtn.on('click',function(){
            selectTrack(1);});

        // playPauseBtn.click();
    }
    // 调用初始化函数
    initPlayer();


    window.onload = function () {
        canvas.addEventListener('mousemove', function (e) {
            mx = e.pageX - canvas.offsetLeft;
            my = e.pageY - canvas.offsetTop;
        });
        canvas.addEventListener('mousedown', function (e) {
            e.preventDefault();
            mousedown = true;
        });
        canvas.addEventListener('mouseup', function (e) {
            e.preventDefault();
            mousedown = false;
        });
        loop();
    };


    function countDown(endTime, id) {
        var endDate = new Date(endTime); //将结束时间转换为日期对象
        var now = new Date(); //获取当前时间
        var leftTime = endDate.getTime() - now.getTime(); //计算剩余时间（单位：毫秒）
        var days = Math.floor(leftTime / (1000 * 60 * 60 * 24)); //计算剩余天数
        var hours = Math.floor(leftTime / (1000 * 60 * 60) % 24); //计算剩余小时数
        var minutes = Math.floor(leftTime / (1000 * 60) % 60); //计算剩余分钟数
        var seconds = Math.floor(leftTime / 1000 % 60); //计算剩余秒数
        var str = "距离宝宝生日还有：" + days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒"; //将剩余时间格式化为字符串
        document.getElementById(id).innerHTML = str; //将字符串显示在HTML中
        setTimeout(function () { countDown(endTime, id) }, 1000); //每隔一秒钟执行一次countDown函数
    }

    countDown('2023/8/2 00:00:00', 'countdown')
});