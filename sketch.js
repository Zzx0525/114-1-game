let spriteSheet;
let table; // 儲存 CSV 資料
let tableChallenge; // 儲存挑戰難度 CSV 資料
let totalFrames = 4;
let currentFrame = 0;
let frameWidth;
let frameHeight;

let spriteSheet1Happy;
let totalFrames1Happy = 12;
let currentFrame1Happy = 0;
let frameWidth1Happy;
let frameHeight1Happy;
let isChar1Animating = false;

let spriteSheet2;
let totalFrames2 = 12;
let currentFrame2 = 0;
let frameWidth2;
let frameHeight2;
let spriteSheet2Interaction;
let totalFrames2Interaction = 4;
let frameWidth2Interaction;
let frameHeight2Interaction;

let spriteSheet3;
let totalFrames3 = 3;
let currentFrame3 = 0;
let frameWidth3;
let frameHeight3;
let char3X = 0;
let char3Y = 0;
let char3Vy = 0;
let char3FacingLeft = false;
let spriteSheet3Run;
let totalFrames3Run = 6;
let frameWidth3Run;
let frameHeight3Run;
let spriteSheet3Roll;
let totalFrames3Roll = 8;
let frameWidth3Roll;
let frameHeight3Roll;
let spriteSheet4;
let totalFrames4 = 4;
let currentFrame4 = 0;
let frameWidth4;
let frameHeight4;
let spriteSheet4Click;
let totalFrames4Click = 12;
let currentFrame4Click = 0;
let frameWidth4Click;
let frameHeight4Click;
let isChar4Animating = false;

let spriteSheet5;
let totalFrames5 = 4;
let currentFrame5 = 0;
let frameWidth5;
let frameHeight5;
let spriteSheet6;
let totalFrames6 = 4;
let currentFrame6 = 0;
let frameWidth6;
let frameHeight6;
let spriteSheet7;
let totalFrames7 = 4;
let currentFrame7 = 0;
let frameWidth7;
let frameHeight7;
let spriteSheet8, spriteSheet9, spriteSheet10;
let totalFrames8 = 3, currentFrame8 = 0, frameWidth8, frameHeight8;
let totalFrames9 = 3, currentFrame9 = 0, frameWidth9, frameHeight9;
let totalFrames10 = 3, currentFrame10 = 0, frameWidth10, frameHeight10;

let inputBox;
let char1Text = "需要我解答嗎?";
let char2Text = ""; // 角色二的對話文字
let currentQIndex = 0; // 目前題目的索引
let interactionMode = 0; // 0:無, 1:角色一, 2:角色二
let char1InteractionStartTime = 0; // 角色一互動開始時間
let char1IntroFinished = false; // 角色一開場白是否結束
let remainingChances = 3; // 剩餘提問機會
let treeImg;
let plantsCollected = 0;
let targetPlants = 5; // 目標盆栽數量
let treeScale = 1; // 盆栽圖示縮放比例
let char4Text = ""; // 角色四的提示文字
let wrongAttempts = 0; // 錯誤次數
let feedbackTimer; // 回饋顯示計時器
let gameState = 'NICKNAME_INPUT'; // 遊戲狀態
let wasdImg;
let qImg;
let loadingImg;
let gameOverImg;
let endImg; // 結局圖片
let typeSound; // 打字音效
let clickSound; // 點擊音效
let bgm; // 背景音樂
let endingBgm; // 結局音樂
let bgmFadeTimer; // 背景音樂淡出計時器
let endingFadeTimer; // 結局音樂淡出計時器
let trueEndingBgm; // 真結局音樂
let trueEndingFadeTimer; // 真結局音樂淡出計時器
let volumeSlider; // 音量控制滑桿
let secretVoices = []; // 彩蛋結局語音
let lastPlayedSecretIndex = -1; // 上一句播放的彩蛋語音索引
let gameOverVoices = []; // 普通結局語音
let lastPlayedDialogueIndex = -1; // 上一句播放的語音索引
let back3Img;
let plantImages = []; // 儲存 tree1 圖片
let plantImagesChallenge = []; // 儲存 tree2 圖片
let difficulty = 'NORMAL'; // 難度設定
let plantAnimState = 'NONE'; // 動畫狀態: 'NONE', 'WAIT', 'MOVE'
let plantAnimStartTime = 0;
let plantAnimImgIndex = 0;
let storyLineIndex = 0;
let storyCharIndex = 0;
let lastTypeTime = 0;
let playerNickname = "玩家";
let nicknameInputBox;
let nicknameConfirmBtn;
let loadingStartTime = 0;
let nicknameWarning = "";
let gameOverDialogueIndex = 0;
let gameOverCharIndex = 0;
let gameOverLastTypeTime = 0;
let gameOverStage = 0; // 0:對話, 1:Back3漸黑, 2:全黑等待, 3:最終文字
let gameOverStageStartTime = 0;
let treeClickCount = 0; // 記錄盆栽點擊次數
let treeClickMessage = ""; // 盆栽點擊後的訊息
let treeClickTimer = 0; // 訊息顯示計時器
let secretBackgroundActive = false; // 是否觸發隱藏背景
let isTurningOff = false; // 是否正在播放關機動畫
let turnOffStartTime = 0; // 關機動畫開始時間
let shakeEndTime = 0; // 螢幕抖動結束時間
let secretDialogueIndex = 0;
let secretCharIndex = 0;
let secretLastTypeTime = 0;
let isWhiteOut = false;
let whiteOutStartTime = 0;
let secretEndingStage = 0; // 0:白光, 1:文字, 2:轉場, 3:圖片等待, 4:最終UI
let secretEndingTimer = 0;
const secretDialogues = [
  { char: 8, text: "歡迎你，後輩。" },//1
  { char: 8, text: "我們和你一樣，曾經照著指示蒐集盆栽。" },//2
  { char: 9, text: "也曾相信，完成就能回家。" },//3
  { char: 9, text: "後來才發現，系統只獎勵服從。" },//4
  { char: 10, text: "真正的出口，藏在質疑裡。" },//5
  { char: 10, text: "你點了本不應該點的地方。" },//6
  { char: 8, text: "所以你看見了我們。" },//7
  { char: 9, text: "這一次，換我們帶你走。" },//8
  { char: 10, text: "不是任務，而是選擇。" },//9
  { char: 'ALL', text: "準備好了嗎？" },//10
  { char: 'ALL', text: "回家了。" }//11
];
const gameOverDialogues = [
  { char: 5, text: "你終於完成了。" },//01
  { char: 5, text: "所有盆栽碎片，無一遺漏。" },//02
  { char: 5, text: "很好，這代表世界的控制權，已完整回收。" },//03
  { char: 6, text: "你真的以為，蒐集完成就能回家嗎？" },//04
  { char: 6, text: "從一開始，就不存在回到原世界的選項。" },//05
  { char: 6, text: "盆栽不是任務獎勵，是鑰匙，而你只是工具。" },//06
  { char: 7, text: "感謝你的協助，真的。" },//07
  { char: 7, text: "現在這個世界已不再需要你。" },//08
  { char: 7, text: "不過放心，作為回報——我們會給你一個「結局」。" },//09
  { char: 5, text: "前方的黑洞，通往未知。" },//010
  { char: 5, text: "理論上，你的存活機率趨近於零。" },//011
  { char: 6, text: "但誰知道呢？" },//012
  { char: 6, text: "說不定你運氣不錯。" },//013
  { char: 7, text: "系統即將終止你的存在。" },//014
  { char: 7, text: "祝你旅途愉快，{nickname}。" }//015
];
const storyContent = [
  { text: "返回原世界的通道已關閉。", yOffset: -100, size: 24 },
  { text: "當前任務：蒐集指定數量的盆栽。", yOffset: -50, size: 24 },
  { text: "提示：此世界的一切，皆與盆栽有關。", yOffset: 0, size: 24 },
  { text: "任務未完成前，登出權限鎖定。", yOffset: 50, size: 24 },
  { text: "——祝你好運，玩家。", yOffset: 120, size: 22 }
];

function preload() {
  spriteSheet = loadImage('w1/w1.png');
  spriteSheet1Happy = loadImage('1/all.png');
  spriteSheet2 = loadImage('2/all-2.png');
  spriteSheet2Interaction = loadImage('w2/w2.png');
  spriteSheet3 = loadImage('4stay/all.png');
  spriteSheet3Run = loadImage('4/4-all.png');
  spriteSheet3Roll = loadImage('4roll/all.png');
  spriteSheet4 = loadImage('w3/w3.png');
  spriteSheet4Click = loadImage('3/all-3.png');
  spriteSheet5 = loadImage('5/all-5.png');
  spriteSheet6 = loadImage('6/all-6.png');
  spriteSheet7 = loadImage('7/all-7.png');
  spriteSheet8 = loadImage('8/all-8.png');
  spriteSheet9 = loadImage('9/all-9.png');
  spriteSheet10 = loadImage('10/all-10.png');
  treeImg = loadImage('tree.png');
  wasdImg = loadImage('WASD.png');
  qImg = loadImage('Q.png');
  loadingImg = loadImage('back1.jpg');
  gameOverImg = loadImage('back2.jpg');
  endImg = loadImage('end.JPG'); // 載入結局圖片
  typeSound = loadSound('voice/type.mp3'); // 載入打字音效 (請確保檔案存在)
  clickSound = loadSound('voice/click.mp3'); // 載入點擊音效
  bgm = loadSound('voice/bgm.mp3'); // 載入背景音樂
  endingBgm = loadSound('voice/ending.mp3'); // 載入結局音樂
  trueEndingBgm = loadSound('voice/true_ending.mp3'); // 載入真結局音樂
  for (let i = 1; i <= 11; i++) {
    secretVoices.push(loadSound('voice/' + i + '.mp3')); //
  }
  for (let i = 1; i <= 15; i++) {
    gameOverVoices.push(loadSound('voice/0' + i + '.mp3'));
  }
  back3Img = loadImage('back2.jpg');
  for (let i = 0; i < 12; i++) {
    plantImages.push(loadImage('tree1/' + i + '.png'));
  }
  for (let i = 0; i < 12; i++) {
    plantImagesChallenge.push(loadImage('tree2/' + i + '.png'));
  }
  table = loadTable('questions.csv', 'csv', 'header'); // 載入測驗卷
  tableChallenge = loadTable('questions_challenge.csv', 'csv', 'header'); // 載入挑戰測驗卷
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Microsoft JhengHei"); // 設定全域字體為微軟正黑體
  
  // 使用 CSS 設定 HTML body 的背景圖片
  document.body.style.backgroundImage = "url('back.jpg')";
  document.body.style.backgroundSize = "auto 100%"; // 讓圖片高度填滿視窗，寬度自動調整
  document.body.style.backgroundPosition = "center"; // 圖片置中
  document.body.style.backgroundRepeat = "repeat-x"; // 設定背景水平重複
  document.body.style.overflow = "hidden"; // 隱藏捲軸

  // 計算單張影格的寬度 (總寬度 / 4)
  frameWidth = spriteSheet.width / totalFrames;
  frameHeight = spriteSheet.height;

  // 計算第一個角色開心動畫的單張影格寬度 (總寬度 / 12)
  frameWidth1Happy = spriteSheet1Happy.width / totalFrames1Happy;
  frameHeight1Happy = spriteSheet1Happy.height;

  // 計算第二個角色的單張影格寬度 (總寬度 / 12)
  frameWidth2 = spriteSheet2.width / totalFrames2;
  frameHeight2 = spriteSheet2.height;

  // 計算第二個角色互動(接近)時的單張影格寬度 (總寬度 / 4)
  frameWidth2Interaction = spriteSheet2Interaction.width / totalFrames2Interaction;
  frameHeight2Interaction = spriteSheet2Interaction.height;

  // 計算第三個角色的單張影格寬度 (總寬度 / 3)
  frameWidth3 = spriteSheet3.width / totalFrames3;
  frameHeight3 = spriteSheet3.height;
  char3X = width / 2;

  // 計算第三個角色跑步的單張影格寬度 (總寬度 / 6)
  frameWidth3Run = spriteSheet3Run.width / totalFrames3Run;
  frameHeight3Run = spriteSheet3Run.height;

  // 計算第三個角色滾動的單張影格寬度 (總寬度 / 8)
  frameWidth3Roll = spriteSheet3Roll.width / totalFrames3Roll;
  frameHeight3Roll = spriteSheet3Roll.height;

  // 計算第四個角色的單張影格寬度 (總寬度 / 4)
  frameWidth4 = spriteSheet4.width / totalFrames4;
  frameHeight4 = spriteSheet4.height;

  // 計算第四個角色點擊動畫的單張影格寬度 (總寬度 / 12)
  frameWidth4Click = spriteSheet4Click.width / totalFrames4Click;
  frameHeight4Click = spriteSheet4Click.height;

  // 計算第五個角色的單張影格寬度 (總寬度 / 4)
  frameWidth5 = spriteSheet5.width / totalFrames5;
  frameHeight5 = spriteSheet5.height;

  // 計算第六個角色的單張影格寬度 (總寬度 / 4)
  frameWidth6 = spriteSheet6.width / totalFrames6;
  frameHeight6 = spriteSheet6.height;

  // 計算第七個角色的單張影格寬度 (總寬度 / 4)
  frameWidth7 = spriteSheet7.width / totalFrames7;
  frameHeight7 = spriteSheet7.height;

  // 計算第八、九、十個角色的單張影格寬度 (總寬度 / 3)
  frameWidth8 = spriteSheet8.width / totalFrames8;
  frameHeight8 = spriteSheet8.height;

  frameWidth9 = spriteSheet9.width / totalFrames9;
  frameHeight9 = spriteSheet9.height;

  frameWidth10 = spriteSheet10.width / totalFrames10;
  frameHeight10 = spriteSheet10.height;

  inputBox = createInput();
  inputBox.size(150);
  inputBox.hide();
  inputBox.changed(handleInput); // 改為處理輸入

  // 暱稱輸入框設定
  nicknameInputBox = createInput();
  nicknameInputBox.size(160);
  nicknameInputBox.style('font-size', '16px');
  nicknameInputBox.changed(submitNickname);

  nicknameConfirmBtn = createButton('確認');
  nicknameConfirmBtn.size(60, 24);
  nicknameConfirmBtn.style('font-size', '14px');
  nicknameConfirmBtn.mousePressed(submitNickname);

  // 遊戲開始時先隨機選一題
  pickNewQuestion();

  // 設定音效音量
  typeSound.setVolume(0.3);
  clickSound.setVolume(0.4);

  // 建立音量控制滑桿 (Master Volume)
  volumeSlider = createSlider(0, 1, 1, 0.01);
  volumeSlider.style('width', '80px');
  volumeSlider.hide();
}

function draw() {
  clear(); // 清除畫布內容，讓背後的 CSS 背景圖片顯示出來
  
  // 螢幕抖動效果
  if (millis() < shakeEndTime) {
    translate(random(-10, 10), random(-10, 10));
  }

  // 如果觸發了隱藏背景，繪製 back3
  if (secretBackgroundActive) {
    push();

    // 計算 end.jpg 的繪製尺寸 (保持比例，黑色補齊)
    let imgAspect = endImg.width / endImg.height;
    let canvasAspect = width / height;
    let drawW, drawH, drawX, drawY;

    if (canvasAspect > imgAspect) {
      // 視窗較寬，以高度為準
      drawH = height;
      drawW = height * imgAspect;
      drawX = (width - drawW) / 2;
      drawY = 0;
    } else {
      // 視窗較高，以寬度為準
      drawW = width;
      drawH = width / imgAspect;
      drawX = 0;
      drawY = (height - drawH) / 2;
    }

    // 處理隱藏結局的動畫流程 (Stage > 0)
    if (isWhiteOut && secretEndingStage > 0) {
      if (secretEndingStage === 1) {
        // 階段 1: 顯示文字 (白底黑字)
        background(255);
        fill(0);
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(32);
        text("你回到了原本的世界。\n但你知道，自己已經不一樣了。", width / 2, height / 2);

        if (millis() - secretEndingTimer > 3000) { // 閱讀 3 秒
          secretEndingStage = 2;
          secretEndingTimer = millis();
        }
      } else if (secretEndingStage === 2) {
        // 階段 2: 轉場 (文字淡出，圖片淡入)
        background(255);
        let t = (millis() - secretEndingTimer) / 3000; // 3秒轉場
        if (t > 1) t = 1;

        // 文字淡出
        fill(0, map(t, 0, 1, 255, 0));
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(32);
        text("你回到了原本的世界。\n但你知道，自己已經不一樣了。", width / 2, height / 2);

        // 繪製黑色遮罩 (用來建立黑色背景/黑邊，並讓背景從白轉黑)
        fill(0, map(t, 0, 1, 0, 255));
        noStroke();
        rectMode(CORNER);
        rect(0, 0, width, height);

        // 圖片淡入
        tint(255, map(t, 0, 1, 0, 255));
        imageMode(CORNER);
        image(endImg, drawX, drawY, drawW, drawH);
        noTint();

        if (t >= 1) {
          secretEndingStage = 3;
          secretEndingTimer = millis();
        }
      } else if (secretEndingStage === 3) {
        // 階段 3: 純圖片展示 (5秒)
        background(0);
        imageMode(CORNER);
        image(endImg, drawX, drawY, drawW, drawH);

        if (millis() - secretEndingTimer > 5000) {
          secretEndingStage = 4;
          secretEndingTimer = millis(); // 重置計時器供 Stage 4 動畫使用
        }
      } else if (secretEndingStage === 4) {
        // 階段 4: 模糊背景 + 感謝 UI
        background(0);

        // 繪製模糊圖片
        drawingContext.filter = 'blur(10px)'; // 設定模糊濾鏡
        imageMode(CORNER);
        image(endImg, drawX, drawY, drawW, drawH);
        drawingContext.filter = 'none'; // 重置濾鏡

        // 感謝文字
        fill(255);
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(60);
        text("感謝遊玩", width / 2, height / 2 - 50);

        // 製作人員名單 (淡入動畫)
        let creditsAlpha = map(millis() - secretEndingTimer, 0, 2000, 0, 255);
        if (creditsAlpha > 255) creditsAlpha = 255;

        fill(255, creditsAlpha);
        textSize(16);
        text("製作人員:414XXX241 OOO 、 Gemini", width / 2, height / 2 + 20);

        // 回到開頭按鈕
        rectMode(CENTER);
        fill(255);
        rect(width / 2, height / 2 + 90, 200, 50, 10);
        fill(0);
        textSize(20);
        text("回到開頭", width / 2, height / 2 + 90);
      }
      
      pop();
      inputBox.hide();
      return;
    }

    imageMode(CORNER);
    image(back3Img, 0, 0, width, height);
    
    // 繪製彩蛋角色 8, 9, 10
    let scaleFactor = (min(width, height) / 400) * 1.25;
    let eggScale = scaleFactor * 1.5; // 稍微放大一點
    let baseY = height / 2; // 設定在畫面中間

    // 更新動畫 (每 10 frames 更新一次)
    if (frameCount % 10 === 0) {
      currentFrame8 = (currentFrame8 + 1) % totalFrames8;
      currentFrame9 = (currentFrame9 + 1) % totalFrames9;
      currentFrame10 = (currentFrame10 + 1) % totalFrames10;
    }

    imageMode(CENTER);
    
    // 角色 8 (左)
    let sx8 = currentFrame8 * frameWidth8;
    image(spriteSheet8, width / 2 - 150, baseY, frameWidth8 * eggScale, frameHeight8 * eggScale, sx8, 0, frameWidth8, frameHeight8);

    // 角色 9 (中)
    let sx9 = currentFrame9 * frameWidth9;
    image(spriteSheet9, width / 2, baseY, frameWidth9 * eggScale, frameHeight9 * eggScale, sx9, 0, frameWidth9, frameHeight9);

    // 角色 10 (右)
    let sx10 = currentFrame10 * frameWidth10;
    image(spriteSheet10, width / 2 + 150, baseY, frameWidth10 * eggScale, frameHeight10 * eggScale, sx10, 0, frameWidth10, frameHeight10);

    // 播放彩蛋語音邏輯
    if (secretDialogueIndex < secretDialogues.length) {
      if (lastPlayedSecretIndex !== secretDialogueIndex) {
        if (lastPlayedSecretIndex !== -1 && secretVoices[lastPlayedSecretIndex]) {
          secretVoices[lastPlayedSecretIndex].stop();
        }
        if (secretVoices[secretDialogueIndex]) {
          secretVoices[secretDialogueIndex].setVolume(1.0); // 確保語音音量最大
          secretVoices[secretDialogueIndex].play();
        }
        lastPlayedSecretIndex = secretDialogueIndex;
      }
    }

    // 繪製彩蛋對話
    if (secretDialogueIndex < secretDialogues.length) {
      let dialogue = secretDialogues[secretDialogueIndex];
      
      // 打字機效果
      if (millis() - secretLastTypeTime > 50) {
        if (secretCharIndex < dialogue.text.length) {
          secretCharIndex++;
          secretLastTypeTime = millis();
          typeSound.stop();
          typeSound.play();
        } else {
          typeSound.stop();
        }
      }
      
      let displayStr = dialogue.text.substring(0, secretCharIndex);
      
      // 決定對話框位置
      let boxX = width / 2;
      if (dialogue.char === 8) boxX = width / 2 - 150;
      else if (dialogue.char === 10) boxX = width / 2 + 150;
      // char 9 和 'ALL' 都在中間
      
      let boxY = baseY - (frameHeight8 * eggScale) / 2 - 60; // 角色上方

      textFont('monospace');
      if (secretDialogueIndex >= 9) { // 最後兩句放大
        textSize(40);
      } else {
        textSize(20);
      }
      let boxW = textWidth(dialogue.text) + 40;
      if (boxW < 200) boxW = 200;

      rectMode(CENTER);
      fill(0, 220); // 黑底 (帶透明度)
      stroke(0, 255, 0); // 綠色邊框 (駭客風格)
      strokeWeight(2);

      // 加入發光效果
      drawingContext.shadowBlur = 20;
      drawingContext.shadowColor = 'rgb(0, 255, 0)';
      rect(boxX, boxY, boxW, 60, 10);
      drawingContext.shadowBlur = 0; // 重置發光效果，避免影響後續繪製

      fill(255); // 白字
      noStroke();
      textAlign(CENTER, CENTER);
      text(displayStr, boxX, boxY);
    } else {
      // 對話結束，停止最後一句語音
      if (lastPlayedSecretIndex !== -1 && secretVoices[lastPlayedSecretIndex]) {
        secretVoices[lastPlayedSecretIndex].stop();
        lastPlayedSecretIndex = -1;
      }
    }

    // 白光填滿螢幕動畫
    if (isWhiteOut) {
      let elapsed = millis() - whiteOutStartTime;
      let alpha = map(elapsed, 0, 2000, 0, 255); // 2秒內變白
      if (alpha >= 255) {
        alpha = 255;
        if (secretEndingStage === 0) {
          secretEndingStage = 1; // 進入文字階段
          secretEndingTimer = millis();
        }
      }
      
      if (secretEndingStage === 0) {
        fill(255, alpha);
        noStroke();
        rectMode(CORNER);
        rect(0, 0, width, height);
      }
    }

    pop();
    inputBox.hide();
    drawVolumeUI(); // 繪製音量控制
    return;
  }

  if (gameState === 'NICKNAME_INPUT') {
    drawNicknameInputScreen();
    return;
  }

  if (gameState === 'LOADING') {
    let elapsed = millis() - loadingStartTime; // 計算進入 Loading 狀態後的經過時間
    push();
    imageMode(CORNER);
    image(loadingImg, 0, 0, width, height);
    
    rectMode(CENTER);
    fill(255, 200); // 微透明白底
    stroke(0); // 黑邊
    strokeWeight(2);
    rect(width / 2, height / 2, 400, 100, 20); // 繪製方框 (將圓角半徑改為 20)

    fill(0);
    textSize(40);
    textAlign(CENTER, CENTER);
    if (elapsed < 5000) {
      let dots = ".".repeat(floor((elapsed % 1500) / 500) + 1);
      text("載入中" + dots , width / 2, height / 2);
    } else {
      text("【系統啟動完成】", width / 2, height / 2);
    }
    pop();

    if (elapsed > 7000) {
      gameState = 'STORY';
      storyLineIndex = 0;
      storyCharIndex = 0;
      lastTypeTime = millis();
      bgm.setVolume(0);
      bgm.loop();
      bgm.setVolume(0.2, 1); // 1秒淡入 (加快節奏)
    }
    drawVolumeUI(); // 繪製音量控制
    return;
  }

  if (gameState === 'STORY') {
    drawStoryScreen();
    return;
  }

  if (gameState === 'DIFFICULTY_SELECT') {
    drawDifficultySelectScreen();
    return;
  }

  if (gameState === 'GAME_OVER') {
    drawGameOverScreen();
    return;
  }

  if (gameState === 'START') {
    drawStartScreen();
    return;
  }
  
  // 計算目前影格在原始圖片中的 x 座標
  let sx = currentFrame * frameWidth;
  
  // 設定圖片繪製模式為中心，並繪製局部圖片
  imageMode(CENTER);
  
  // 根據視窗大小計算縮放比例 (這裡以 400px 為基準大小，視窗越大角色越大)
  let scaleFactor = (min(width, height) / 400) * 1.25;
  let charScale = scaleFactor * 1.2; // 角色一、二、四的專用放大比例 (調整為兩倍大)
  // image(img, dx, dy, dWidth, dHeight, sx, sy, sWidth, sHeight)
  // 繪製第一個角色 (移動到右側，向右偏移 150 * scaleFactor)
  let char1X = width / 2 + 150 * scaleFactor; 
  let isNearChar1 = abs(char3X - char1X) < 60 * scaleFactor; // 判斷是否靠近角色一 (距離縮短為 60)

  push();
  translate(char1X, height / 2 + 150);
  if (char3X > char1X) {
    scale(-1, 1);
  }
  if (isChar1Animating) {
    let sx1Happy = currentFrame1Happy * frameWidth1Happy;
    image(spriteSheet1Happy, 0, 0, frameWidth1Happy * charScale, frameHeight1Happy * charScale, sx1Happy, 0, frameWidth1Happy, frameHeight1Happy);
  } else {
    image(spriteSheet, 0, 0, frameWidth * charScale, frameHeight * charScale, sx, 0, frameWidth, frameHeight);
  }
  pop();

  // 處理盆栽收集動畫
  if (plantAnimState !== 'NONE') {
    let startX = char1X;
    let startY = (height / 2 + 150) - frameHeight * charScale - 60; // 角色一上方
    let endX = 40 + 25; // 左上角計數器圖片中心附近
    let endY = 40;
    
    let elapsed = millis() - plantAnimStartTime;

    // 根據難度決定要顯示的圖片
    let animImg = (difficulty === 'NORMAL') ? plantImages[plantAnimImgIndex] : plantImagesChallenge[plantAnimImgIndex % plantImagesChallenge.length];
    
    if (plantAnimState === 'WAIT') {
      // 階段一：顯示在角色一上方 (停留 1 秒)
      if (animImg) {
        // 保持圖片比例，避免壓縮變形
        let aspect = animImg.width / animImg.height;
        let w = 100;
        let h = 100;
        if (aspect > 1) h = w / aspect;
        else w = h * aspect;
        image(animImg, startX, startY, w, h);
      }
      
      if (elapsed > 1000) {
        plantAnimState = 'MOVE';
        plantAnimStartTime = millis(); // 重置時間給移動階段使用
      }
    } else if (plantAnimState === 'MOVE') {
      // 階段二：移動到計數器並縮小 (1 秒)
      let t = elapsed / 1000;
      if (t > 1) t = 1;
      
      let currX = lerp(startX, endX, t);
      let currY = lerp(startY, endY, t);
      let currScale = lerp(1, 0.2, t); // 縮小至 0.2 倍
      
      if (animImg) {
        // 保持圖片比例，避免壓縮變形
        let aspect = animImg.width / animImg.height;
        let w = 100 * currScale;
        let h = 100 * currScale;
        if (aspect > 1) h = w / aspect;
        else w = h * aspect;
        image(animImg, currX, currY, w, h);
      }
      
      if (t >= 1) {
        plantAnimState = 'NONE';
        plantsCollected++; // 動畫結束後才加分
        treeScale = 1.5; // 觸發 UI 放大
        if (plantsCollected >= targetPlants) {
          gameState = 'GAME_OVER';
          gameOverDialogueIndex = 0;
          gameOverCharIndex = 0;
          gameOverLastTypeTime = millis();
          gameOverStage = 0;
          lastPlayedDialogueIndex = -1;
          switchBGM(bgm, endingBgm);
        }
      }
    }
  }
  
  // 在角色一上方顯示 Q.png (如果開場白還沒結束)
  if (!char1IntroFinished && !isNearChar1) {
    let qY = (height / 2 + 150) - frameHeight * charScale / 2 - 80;
    image(qImg, char1X, qY, 60 * charScale, 60 * charScale);
  }

  // 繪製第四個角色 (在角色一右邊)
  let char4X = width / 2 + 250 * scaleFactor; // 角色四的位置
  push();
  translate(char4X, height / 2 + 150);
  if (char3X > char4X) {
    scale(-1, 1);
  }
  if (isChar4Animating) {
    let sx4Click = currentFrame4Click * frameWidth4Click;
    image(spriteSheet4Click, 0, 0, frameWidth4Click * charScale, frameHeight4Click * charScale, sx4Click, 0, frameWidth4Click, frameHeight4Click);
  } else {
    let sx4 = (currentFrame4 % totalFrames4) * frameWidth4; // 計算角色四的 sx
    image(spriteSheet4, 0, 0, frameWidth4 * charScale, frameHeight4 * charScale, sx4, 0, frameWidth4, frameHeight4);
  }
  pop();

  // 顯示角色四的文字 (提示)
  if (char4Text !== "") {
    textSize(16);
    let tWidth = textWidth(char4Text);
    let boxX = char4X;
    let boxY = (height / 2 + 150) - frameHeight4 * charScale / 2 - 30;

    rectMode(CENTER);
    fill(255); // 白底
    stroke(0, 0, 255); // 藍色框
    strokeWeight(2);
    rect(boxX, boxY, tWidth + 20, 30, 5); // 繪製圓角矩形框

    noStroke();
    fill(0); // 黑字
    textAlign(CENTER, CENTER);
    text(char4Text, boxX, boxY);
  }

  // 計算角色二的位置與角色三的距離
  let char2X = width / 2 - 170 * scaleFactor;
  let distToChar2 = abs(char3X - char2X);
  let isNearChar2 = char1IntroFinished && distToChar2 < 100 * scaleFactor; // 設定接近的距離閾值 (需等開場白結束)

  // 根據距離選擇角色二的圖片精靈
  let activeSprite2 = isNearChar2 ? spriteSheet2Interaction : spriteSheet2;
  let activeTotalFrames2 = isNearChar2 ? totalFrames2Interaction : totalFrames2;
  let activeFrameWidth2 = isNearChar2 ? frameWidth2Interaction : frameWidth2;
  let activeFrameHeight2 = isNearChar2 ? frameHeight2Interaction : frameHeight2;

  let sx2 = (currentFrame2 % activeTotalFrames2) * activeFrameWidth2;
  
  push();
  translate(char2X, height / 2 + 150);
  if (char3X > char2X) {
    scale(-1, 1);
  }
  image(activeSprite2, 0, 0, activeFrameWidth2 * charScale, activeFrameHeight2 * charScale, sx2, 0, activeFrameWidth2, activeFrameHeight2);
  pop();

  // 顯示角色二的文字 (題目或回饋)
  if (isNearChar2) {
    textSize(24); // 放大字體
    let tWidth = textWidth(char2Text);
    let boxX = char2X;
    let boxY = (height / 2 + 150) - frameHeight2 * charScale / 2 - 40; // 調整位置

    rectMode(CENTER);
    fill(255); // 白底
    stroke(255, 105, 180); //粉紅色框 
    strokeWeight(2);
    rect(boxX, boxY, tWidth + 30, 40, 5); // 放大框框

    noStroke();
    fill(0); // 黑字
    textAlign(CENTER, CENTER);
    text(char2Text, boxX, boxY);
  }

  // 處理第三個角色的移動與動畫狀態
  let isMoving = false;
  let isRolling = false;
  let moveSpeed = keyIsDown(32) ? 10 : 5; // 按下空白鍵時速度變快
  
  // 判斷是否可以移動 (當角色一在說話且開場白未結束時，禁止移動)
  let canMove = true;
  if (interactionMode === 1 && !char1IntroFinished) {
    canMove = false;
  }

  // 處理跳躍: 向上鍵 (UP_ARROW) 或 W鍵 (87)
  if (canMove && (keyIsDown(UP_ARROW) || keyIsDown(87)) && char3Y === 0) {
    char3Vy = -10 * scaleFactor; // 跳躍力道 (增加高度)
  }

  char3Y += char3Vy;
  char3Vy += 0.8 * scaleFactor; // 重力

  if (char3Y > 0) {
    char3Y = 0;
    char3Vy = 0;
  }

  if (canMove) {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      if (char3X > (frameWidth3Run * scaleFactor) / 2) {
        char3X -= moveSpeed;
      }
      char3FacingLeft = true;
      isMoving = true;
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      if (char3X < width - (frameWidth3Run * scaleFactor) / 2) {
        char3X += moveSpeed;
      }
      char3FacingLeft = false;
      isMoving = true;
    }
  }

  if (isMoving && keyIsDown(32)) {
    isRolling = true;
  }

  // 根據狀態選擇對應的圖片精靈與參數
  let activeSprite3 = isRolling ? spriteSheet3Roll : (isMoving ? spriteSheet3Run : spriteSheet3);
  let activeTotalFrames3 = isRolling ? totalFrames3Roll : (isMoving ? totalFrames3Run : totalFrames3);
  let activeFrameWidth3 = isRolling ? frameWidth3Roll : (isMoving ? frameWidth3Run : frameWidth3);
  let activeFrameHeight3 = isRolling ? frameHeight3Roll : (isMoving ? frameHeight3Run : frameHeight3);

  // 計算第三個角色的 sx (確保 currentFrame3 在有效範圍內)
  let sx3 = (currentFrame3 % activeTotalFrames3) * activeFrameWidth3;

  push();
  translate(char3X, (height / 2 + 150) + char3Y);
  if (char3FacingLeft) {
    scale(-1, 1);
  }
  image(activeSprite3, 0, 0, activeFrameWidth3 * scaleFactor, activeFrameHeight3 * scaleFactor, sx3, 0, activeFrameWidth3, activeFrameHeight3);
  pop();

  // 處理角色二與角色三的互動 (測驗)
  if (char1IntroFinished && abs(char3X - char2X) < 100 * scaleFactor) {
    interactionMode = 2;
    inputBox.show();
    inputBox.position(char3X - 75, (height / 2 + 150) + activeFrameHeight3 * scaleFactor / 2 + 20);
  } else if (isNearChar1) {
    interactionMode = 1;
    
    // 處理角色一的對話計時
    if (char1InteractionStartTime === 0) {
      char1InteractionStartTime = millis();
    }
    let elapsed = millis() - char1InteractionStartTime;
    
    if (!char1IntroFinished) {
      if (elapsed < 3000) {
        char1Text = "我這有你要的盆栽 但 你不能白白拿走";
      } else if (elapsed < 6000) {
        char1Text = "你去前面正在轉圈的小粉那邊，每答對一題我就給你一個盆栽";
      } else if (elapsed < 9000) {
        char1Text = "要是回答不出來 總共有三次向我後面的小藍求救的機會";
      } else {
        char1IntroFinished = true;
      }
    }

    if (char1IntroFinished) {
      char1Text = "你還有" + remainingChances + "次機會可以提問";
    }

    textSize(24); // 放大字體
    let tWidth = textWidth(char1Text);
    let boxX = char1X;
    let boxY = (height / 2 + 150) - frameHeight * charScale / 2 - 40; // 調整位置

    rectMode(CENTER);
    fill(255); // 白底
    stroke(64); // 深灰色外框
    strokeWeight(2);
    rect(boxX, boxY, tWidth + 30, 40, 5); // 放大框框

    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    text(char1Text, boxX, boxY);
    
    inputBox.hide(); // 隱藏輸入框，改為純對話
  } else {
    interactionMode = 0;
    inputBox.hide();
    char1InteractionStartTime = 0; // 重置計時器
  }

  // 繪製左上角 UI (盆栽計數)
  let uiX = 40;
  let uiY = 40;
  
  // 處理盆栽圖示縮放動畫
  if (treeScale > 1) {
    treeScale -= 0.05; // 慢慢縮回原始大小
  } else {
    treeScale = 1;
  }
  
  // 繪製 tree.png (放大為 80x80)
  image(treeImg, uiX, uiY, 80 * treeScale, 80 * treeScale);
  
  // 檢查盆栽點擊訊息計時器
  if (treeClickMessage !== "") {
    if (millis() > treeClickTimer) {
      if (treeClickCount === 4) {
        isTurningOff = true; // 開始關機動畫
        turnOffStartTime = millis();
        treeClickMessage = "";
      } else {
        treeClickMessage = ""; // 清除訊息
      }
    }
  }

  // 處理關機動畫
  if (isTurningOff) {
    let elapsed = millis() - turnOffStartTime;
    
    // 閃爍兩下 (0~400ms) -> 黑頻一秒 (400~1400ms)
    if (elapsed < 400) {
      // 每 200ms 為一個週期，前 100ms 顯示白光，後 100ms 顯示原畫面
      if ((elapsed % 200) < 100) {
        fill(255); // 白光
        noStroke();
        rectMode(CORNER);
        rect(0, 0, width, height);
      }
    } else if (elapsed < 1400) {
      // 突然黑頻 (持續 1 秒)
      fill(0);
      noStroke();
      rectMode(CORNER);
      rect(0, 0, width, height);
    } else {
      // 動畫結束，切換背景
      secretBackgroundActive = true;
      isTurningOff = false;
      secretDialogueIndex = 0;
      secretCharIndex = 0;
      secretLastTypeTime = millis();
      lastPlayedSecretIndex = -1;
    }
  } else {
    // 正常顯示 UI 文字
    let scoreText = "已獲得盆栽: " + plantsCollected;
    let isSpecialMessage = false;
    if (treeClickMessage !== "") {
      scoreText = treeClickMessage;
      isSpecialMessage = true;
    }

    textSize(24); // 放大字體
    let tWidth = textWidth(scoreText);
    let boxW = tWidth + 30;
    let boxH = 40; // 放大框框高度
    let boxX = uiX + 40 + 10 + boxW / 2; // 圖片中心(40) + 半寬(40) + 間距(10) + 半框寬
    
    // 第四次點擊時的快速縮放效果
    let scaleAnim = 1;
    if (treeClickCount === 4 && isSpecialMessage) {
      scaleAnim = 1 + 0.2 * sin(millis() * 0.05);
      
      // 雜訊故障效果
      push();
      rectMode(CORNER);
      for (let i = 0; i < 15; i++) {
        let x = random(width);
        let y = random(height);
        let w = random(50, 300);
        let h = random(5, 20);
        fill(random(255), random(255), random(255), 180);
        noStroke();
        rect(x, y, w, h);
      }
      for (let i = 0; i < 5; i++) {
        stroke(255, random(100, 200));
        strokeWeight(random(1, 3));
        let ly = random(height);
        line(0, ly, width, ly);
      }
      pop();
    }

    push();
    translate(boxX, uiY);
    scale(scaleAnim);

    rectMode(CENTER);
    fill(255);
    stroke(139, 69, 19); // 咖啡色
    strokeWeight(2);
    rect(0, 0, boxW, boxH, 5);
    
    noStroke();
    textAlign(CENTER, CENTER);

    if (isSpecialMessage && treeClickCount === 1) {
      // "已獲得盆栽: " (黑) + "？" (紅)
      let part1 = "已獲得盆栽: ";
      let part2 = "？";
      let w1 = textWidth(part1);
      let w2 = textWidth(part2);
      let totalW = w1 + w2;
      let startX = -totalW / 2;
      
      fill(0);
      textAlign(LEFT, CENTER);
      text(part1, startX, 0);
      fill(255, 0, 0);
      text(part2, startX + w1, 0);
    } else if (isSpecialMessage && treeClickCount === 2) {
      // "？？" (紅)
      fill(255, 0, 0);
      text(scoreText, 0, 0);
    } else if (isSpecialMessage && treeClickCount === 4) {
      // "系統觀測權限衝突" (隨機顏色)
      fill(random(255), random(255), random(255));
      text(scoreText, 0, 0);
    } else {
      // 正常文字 或 第四次點擊文字 (黑)
      fill(0);
      text(scoreText, 0, 0);
    }
    pop();
  }

  // 每 5 個 frame 更新一次動畫 (控制播放速度)
  if (frameCount % 5 === 0) {
    currentFrame = (currentFrame + 1) % totalFrames;
    currentFrame2 = (currentFrame2 + 1) % activeTotalFrames2;
    currentFrame3 = (currentFrame3 + 1) % activeTotalFrames3;
    currentFrame4 = (currentFrame4 + 1) % totalFrames4;
    
    if (isChar4Animating) {
      currentFrame4Click++;
      if (currentFrame4Click >= totalFrames4Click) {
        isChar4Animating = false;
        currentFrame4Click = 0;
      }
    }

    if (isChar1Animating) {
      currentFrame1Happy++;
      if (currentFrame1Happy >= totalFrames1Happy) {
        isChar1Animating = false;
        currentFrame1Happy = 0;
      }
    }
  }
  drawVolumeUI(); // 繪製音量控制 (遊戲進行中)
}

// 音樂淡入淡出切換函式
function switchBGM(from, to) {
  if (from && from.isPlaying()) {
    from.setVolume(0, 1); // 1秒淡出 (加快切換速度)
    let timer = setTimeout(() => { 
      from.stop(); 
    }, 1000);
    if (from === bgm) bgmFadeTimer = timer;
    if (from === endingBgm) endingFadeTimer = timer;
    if (from === trueEndingBgm) trueEndingFadeTimer = timer;
  }
  
  if (to) {
    if (to === bgm && bgmFadeTimer) clearTimeout(bgmFadeTimer);
    if (to === endingBgm && endingFadeTimer) clearTimeout(endingFadeTimer);
    if (to === trueEndingBgm && trueEndingFadeTimer) clearTimeout(trueEndingFadeTimer);
    to.setVolume(0);
    to.loop();
    to.setVolume(0.2, 1); // 1秒淡入至 0.2 音量
  }
}

function windowResized() {
  let relativeX = char3X / width; // 計算角色三目前在視窗中的相對比例
  resizeCanvas(windowWidth, windowHeight);
  char3X = relativeX * width; // 根據新視窗寬度，還原角色三的相對位置
}

// 隨機選題函式
function pickNewQuestion() {
  let currentTable = (difficulty === 'NORMAL') ? table : tableChallenge;
  if (currentTable.getRowCount() > 0) {
    currentQIndex = int(random(currentTable.getRowCount()));
    char2Text = currentTable.getString(currentQIndex, 'question');
    char4Text = ""; // 換題時清空提示
    wrongAttempts = 0; // 重置錯誤次數
    clearTimeout(feedbackTimer); // 清除計時器
  }
}

// 處理輸入函式
function handleInput() {
  if (interactionMode === 2) {
    let ans = inputBox.value();
    let currentTable = (difficulty === 'NORMAL') ? table : tableChallenge;
    let correctAns = currentTable.getString(currentQIndex, 'answer');
    
    if (ans === correctAns) {
      char2Text = currentTable.getString(currentQIndex, 'correct_feedback');
      
      // 判斷是否需要播放動畫 (普通難度且有圖，或挑戰難度)
      if ((difficulty === 'NORMAL' && plantsCollected < 12) || (difficulty === 'CHALLENGE' && plantsCollected < targetPlants)) {
        plantAnimState = 'WAIT';
        plantAnimStartTime = millis();
        plantAnimImgIndex = plantsCollected; // 設定對應的圖片索引
        // 注意：這裡不先加分，等動畫結束才加
        setTimeout(pickNewQuestion, 2500); // 延後出題 (1s等待 + 1s移動 + 0.5s緩衝)
      } else {
        // 挑戰難度或無動畫時直接加分
        plantsCollected++;
        treeScale = 1.5; // 觸發放大動畫
        if (plantsCollected >= targetPlants) {
          gameState = 'GAME_OVER';
          gameOverDialogueIndex = 0;
          gameOverCharIndex = 0;
          gameOverLastTypeTime = millis();
          gameOverStage = 0;
          lastPlayedDialogueIndex = -1;
          switchBGM(bgm, endingBgm);
        } else {
          setTimeout(pickNewQuestion, 1500);
        }
      }

      isChar1Animating = true; // 觸發角色一動畫
      currentFrame1Happy = 0;
      wrongAttempts = 0; // 答對重置
      clearTimeout(feedbackTimer);
    } else {
      wrongAttempts++;
      if (wrongAttempts === 1) {
        char2Text = "不對喔!在想想";
      } else {
        char2Text = "可以點擊小藍拿提示喔!";
      }
      
      clearTimeout(feedbackTimer);
      // 3秒後回到原題目
      feedbackTimer = setTimeout(() => {
        char2Text = currentTable.getString(currentQIndex, 'question');
      }, 3000);
    }
  } else if (interactionMode === 1) {
    char1Text = inputBox.value() + "，歡迎你";
  }
  inputBox.value('');
}

function drawStoryScreen() {
  rectMode(CENTER);
  fill(255, 220); // 半透明白色背景
  stroke(0); // 黑色邊框
  strokeWeight(2);
  rect(width / 2, height / 2, 600, 400, 20);

  textAlign(CENTER, CENTER);
  fill(0); // 黑色文字
  noStroke();
  
  // 打字機效果邏輯
  if (millis() - lastTypeTime > 50) { // 打字速度 (每50ms一字)
    if (storyLineIndex < storyContent.length) {
      storyCharIndex++;
      if (storyCharIndex > storyContent[storyLineIndex].text.length) {
        storyLineIndex++;
        storyCharIndex = 0;
        typeSound.stop();
      } else {
        typeSound.stop();
        typeSound.play();
      }
      lastTypeTime = millis();
    }
  }

  // 繪製文字
  for (let i = 0; i < storyContent.length; i++) {
    textSize(storyContent[i].size);
    let currentText = "";
    if (i < storyLineIndex) {
      currentText = storyContent[i].text;
    } else if (i === storyLineIndex) {
      currentText = storyContent[i].text.substring(0, storyCharIndex);
    }
    text(currentText, width / 2, height / 2 + storyContent[i].yOffset);
  }
  
  // 全部顯示完後才顯示繼續提示
  if (storyLineIndex >= storyContent.length) {
    textSize(16);
    fill(100);
    text("點擊畫面繼續", width / 2, height / 2 + 170);
  }
  drawVolumeUI(); // 繪製音量控制
}

function drawStartScreen() {
  rectMode(CENTER);
  fill(255, 220); // 半透明白色背景
  stroke(0);
  strokeWeight(2);
  rect(width / 2, height / 2, 500, 350, 20);

  textAlign(CENTER, CENTER);
  fill(0);
  noStroke();
  
  textSize(32);
  text("遊戲操作指引", width / 2, height / 2 - 110);
  
  textSize(20);
  text("移動：方向鍵 或 WASD", width / 2, height / 2 - 60);
  
  imageMode(CENTER);
  let imgW = 150; // 設定圖片寬度
  let imgH = imgW * (wasdImg.height / wasdImg.width); // 根據比例計算高度
  image(wasdImg, width / 2, height / 2 - 10, imgW, imgH); // 顯示 WASD 圖片
  
  text("加速翻滾：按住 空白鍵", width / 2, height / 2 + 40);
  
  let part1 = "目標：蒐集 ";
  let part2 = String(targetPlants);
  let part3 = " 個盆栽";
  let w1 = textWidth(part1);
  let w2 = textWidth(part2);
  let w3 = textWidth(part3);
  let totalW = w1 + w2 + w3;
  let startX = width / 2 - totalW / 2;
  let yPos = height / 2 + 90;

  textAlign(LEFT, CENTER);
  fill(0); text(part1, startX, yPos);
  fill(255, 0, 0); text(part2, startX + w1, yPos); // 紅字標明
  fill(0); text(part3, startX + w1 + w2, yPos);
  textAlign(CENTER, CENTER);
  
  textSize(18);
  fill(100);
  text("點擊畫面開始遊戲", width / 2, height / 2 + 140);
  drawVolumeUI(); // 繪製音量控制
}

function mousePressed() {
  // 彩蛋畫面點擊推進對話
  if (secretBackgroundActive) {
    // 檢查是否在最終階段點擊「回到開頭」
    if (secretEndingStage === 4) {
      if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 &&
          mouseY > height / 2 + 65 && mouseY < height / 2 + 115) {
        clickSound.play();


        // 重置遊戲回到開頭
        gameState = 'STORY';
        storyLineIndex = 0;
        storyCharIndex = 0;
        lastTypeTime = millis();
        
        plantsCollected = 0;
        currentQIndex = 0;
        wrongAttempts = 0;
        char1IntroFinished = false;
        char1InteractionStartTime = 0;
        remainingChances = 3;
        char4Text = "";
        pickNewQuestion();
        
        // 重置彩蛋相關變數
        secretBackgroundActive = false;
        isWhiteOut = false;
        secretEndingStage = 0;
        lastPlayedSecretIndex = -1;
        // 判斷目前播放的是哪首音樂，確保正確淡出
        if (trueEndingBgm.isPlaying()) {
          switchBGM(trueEndingBgm, bgm);
        } else {
          switchBGM(endingBgm, bgm);
        }
      }
      return;
    }

    if (secretDialogueIndex < secretDialogues.length) {
      clickSound.play();
      let dialogue = secretDialogues[secretDialogueIndex];
      if (secretCharIndex < dialogue.text.length) {
        secretCharIndex = dialogue.text.length; // 立即顯示全文字
        typeSound.stop();
      } else {
        secretDialogueIndex++; // 下一句
        secretCharIndex = 0;
        if (secretDialogueIndex >= secretDialogues.length) {
          isWhiteOut = true;
          whiteOutStartTime = millis();
          switchBGM(endingBgm, trueEndingBgm); // 台詞結束後切換音樂
        }
      }
    }
    return;
  }

  if (gameState === 'STORY') {
    clickSound.play();
    gameState = 'DIFFICULTY_SELECT';
    typeSound.stop();
    return;
  }

  if (gameState === 'DIFFICULTY_SELECT') {
    // 檢查是否點擊按鈕 (按鈕中心 y 為 height/2，高度 60)
    if (mouseY > height / 2 - 30 && mouseY < height / 2 + 30) {
      // 普通按鈕 (左邊)
      if (mouseX > width / 2 - 220 && mouseX < width / 2 - 20) {
        clickSound.play();
        targetPlants = 12;
        difficulty = 'NORMAL';
        pickNewQuestion(); // 根據難度重新選題
        gameState = 'START';
      }
      // 挑戰按鈕 (右邊)
      else if (mouseX > width / 2 + 20 && mouseX < width / 2 + 220) {
        clickSound.play();
        targetPlants = 12;
        difficulty = 'CHALLENGE';
        pickNewQuestion(); // 根據難度重新選題
        gameState = 'START';
      }
    }
    return;
  }

  if (gameState === 'GAME_OVER') {
    if (gameOverStage === 0) {
      // 處理對話點擊
      clickSound.play();
      if (gameOverDialogueIndex < gameOverDialogues.length) {
        let dialogue = gameOverDialogues[gameOverDialogueIndex];
        let currentText = dialogue.text.replace("{nickname}", playerNickname);
        if (gameOverCharIndex < currentText.length) {
          gameOverCharIndex = currentText.length; // 立即顯示全文字
          typeSound.stop();
        } else {
          gameOverDialogueIndex++; // 下一句
          gameOverCharIndex = 0;
        }
      }
    } else if (gameOverStage === 3) {
      // 檢查是否點擊「我要再一次」按鈕
      if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 &&
          mouseY > height / 2 + 80 && mouseY < height / 2 + 140) {
        clickSound.play();
        // 回到劇情介紹
        gameState = 'STORY';
        storyLineIndex = 0;
        storyCharIndex = 0;
        lastTypeTime = millis();
        
        // 重置遊戲變數
        plantsCollected = 0;
        currentQIndex = 0;
        wrongAttempts = 0;
        char1IntroFinished = false;
        char1InteractionStartTime = 0;
        remainingChances = 3;
        char4Text = "";
        lastPlayedSecretIndex = -1;
        lastPlayedDialogueIndex = -1;
        pickNewQuestion();
        switchBGM(endingBgm, bgm);
      }
    }
    return;
  }

  // 如果在開始畫面，點擊後進入遊戲
  if (gameState === 'START') {
    clickSound.play();
    gameState = 'PLAY';
    return;
  }

  // 當觸發彩蛋(點擊4次)或正在關機時，禁止點擊其他物件
  if (treeClickCount === 4 || isTurningOff) return;

  // 檢查是否點擊左上角盆栽 (中心 40,40，大小約 80x80)
  if (mouseX > 0 && mouseX < 80 && mouseY > 0 && mouseY < 80) {
    clickSound.play();
    treeClickCount++;
    if (treeClickCount === 1) {
      treeClickMessage = "已獲得盆栽: ？";
      treeClickTimer = millis() + 500; // 0.5秒
    } else if (treeClickCount === 2) {
      treeClickMessage = "？？";
      treeClickTimer = millis() + 1000; // 1秒
      shakeEndTime = millis() + 300; // 畫面抖動 0.3 秒
    } else if (treeClickCount === 3) {
      treeClickMessage = "別點了";
      treeClickTimer = millis() + 1000;
      shakeEndTime = millis() + 300; // 畫面抖動 0.3 秒
    } else if (treeClickCount === 4) {
      treeClickMessage = "系統觀測權限衝突";
      treeClickTimer = millis() + 2000; // 2秒
      switchBGM(bgm, endingBgm); // 立即切換結局音樂
    }
    return;
  }

  // 若角色一開場白尚未結束，點擊其他角色不應有反應
  if (!char1IntroFinished) return;

  // 計算角色四的位置與大小 (需與 draw 中一致)
  let scaleFactor = (min(width, height) / 400) * 1.25;
  let charScale = scaleFactor * 1.2; // 角色四的專用放大比例
  let char4X = width / 2 + 250 * scaleFactor;
  let char4Y = height / 2 + 150;
  let w = frameWidth4 * charScale;
  let h = frameHeight4 * charScale;

  // 檢查滑鼠是否點擊到角色四
  if (mouseX > char4X - w / 2 && mouseX < char4X + w / 2 &&
      mouseY > char4Y - h / 2 && mouseY < char4Y + h / 2) {
    
    clickSound.play();
    isChar4Animating = true;
    currentFrame4Click = 0;
    
    let currentTable = (difficulty === 'NORMAL') ? table : tableChallenge;
    let currentHint = "提示: " + currentTable.getString(currentQIndex, 'hint');
    // 如果還沒顯示提示，且還有機會
    if (char4Text !== currentHint && remainingChances > 0) {
      char4Text = currentHint;
      remainingChances--;
    } else if (remainingChances <= 0 && char4Text === "") {
      char4Text = "沒有提示機會了...";
    }
  }
}

function drawDifficultySelectScreen() {
  rectMode(CENTER);
  fill(255, 220); // 半透明白色背景
  stroke(0);
  strokeWeight(2);
  rect(width / 2, height / 2, 600, 400, 20);

  textAlign(CENTER, CENTER);
  fill(0);
  noStroke();
  
  textSize(32);
  text("請選擇難度", width / 2, height / 2 - 100);

  // 繪製按鈕
  stroke(0);
  strokeWeight(2);
  
  // 普通按鈕
  fill(mouseX > width / 2 - 220 && mouseX < width / 2 - 20 && mouseY > height / 2 - 30 && mouseY < height / 2 + 30 ? 230 : 255);
  rect(width / 2 - 120, height / 2, 200, 60, 10);
  
  // 挑戰按鈕
  fill(mouseX > width / 2 + 20 && mouseX < width / 2 + 220 && mouseY > height / 2 - 30 && mouseY < height / 2 + 30 ? 230 : 255);
  rect(width / 2 + 120, height / 2, 200, 60, 10);

  fill(0);
  noStroke();
  textSize(24);
  text("普通", width / 2 - 120, height / 2);
  text("挑戰", width / 2 + 120, height / 2);

  textSize(18);
  fill(100);
  text("難度不同，所獲得的道具也會有所不同喔!", width / 2, height / 2 + 100);
  drawVolumeUI(); // 繪製音量控制
}

function drawGameOverScreen() {
  inputBox.hide();

  if (gameOverStage === 0) {
  push();
  imageMode(CORNER);
  image(gameOverImg, 0, 0, width, height);

  // 繪製結算畫面的新角色 (5, 6, 7)
  let scaleFactor = (min(width, height) / 400) * 1.25;
  
  imageMode(CENTER); // 設定圖片模式為中心，以便將角色置中
  
  // 角色五 (左)
  let sx5 = currentFrame5 * frameWidth5;
  image(spriteSheet5, width / 2 - 150, height / 2, frameWidth5 * scaleFactor, frameHeight5 * scaleFactor, sx5, 0, frameWidth5, frameHeight5);

  // 角色六 (中)
  let sx6 = currentFrame6 * frameWidth6;
  image(spriteSheet6, width / 2, height / 2, frameWidth6 * scaleFactor, frameHeight6 * scaleFactor, sx6, 0, frameWidth6, frameHeight6);

  // 角色七 (右)
  let sx7 = currentFrame7 * frameWidth7;
  image(spriteSheet7, width / 2 + 150, height / 2, frameWidth7 * scaleFactor, frameHeight7 * scaleFactor, sx7, 0, frameWidth7, frameHeight7);

  // 更新動畫影格
  if (frameCount % 10 === 0) {
    currentFrame5 = (currentFrame5 + 1) % totalFrames5;
    currentFrame6 = (currentFrame6 + 1) % totalFrames6;
    currentFrame7 = (currentFrame7 + 1) % totalFrames7;
  }

  // 播放語音邏輯
  if (gameOverDialogueIndex < gameOverDialogues.length) {
    if (lastPlayedDialogueIndex !== gameOverDialogueIndex) {
      if (lastPlayedDialogueIndex !== -1 && gameOverVoices[lastPlayedDialogueIndex]) {
        gameOverVoices[lastPlayedDialogueIndex].stop();
      }
      if (gameOverVoices[gameOverDialogueIndex]) {
        gameOverVoices[gameOverDialogueIndex].setVolume(1.0); // 確保語音音量最大
        gameOverVoices[gameOverDialogueIndex].play();
      }
      lastPlayedDialogueIndex = gameOverDialogueIndex;
    }
  }

  // 顯示對話框
  if (gameOverDialogueIndex < gameOverDialogues.length) {
    let dialogue = gameOverDialogues[gameOverDialogueIndex];
    let currentText = dialogue.text.replace("{nickname}", playerNickname);
    
    // 打字機效果
    if (millis() - gameOverLastTypeTime > 50) {
      if (gameOverCharIndex < currentText.length) {
        gameOverCharIndex++;
        gameOverLastTypeTime = millis();
        typeSound.stop();
        typeSound.play();
      } else {
        typeSound.stop();
      }
    }
    
    let displayStr = currentText.substring(0, gameOverCharIndex);
    
    // 根據角色決定對話框位置
    let boxX = width / 2;
    if (dialogue.char === 5) boxX = width / 2 - 150;
    if (dialogue.char === 7) boxX = width / 2 + 150;
    let boxY = height / 2 - 80; // 角色上方

    textSize(20);
    let boxW = textWidth(currentText) + 40;
    if (boxW < 200) boxW = 200;

    rectMode(CENTER);
    fill(255, 220);
    stroke(0);
    strokeWeight(2);
    rect(boxX, boxY, boxW, 60, 10);

    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    text(displayStr, boxX, boxY);

    // 顯示點擊繼續提示
    textSize(14);
    fill(150);
    text("點擊繼續", width / 2, height - 50);
  } else {
      // 對話結束，進入下一階段
      if (lastPlayedDialogueIndex !== -1 && gameOverVoices[lastPlayedDialogueIndex]) {
        gameOverVoices[lastPlayedDialogueIndex].stop();
        lastPlayedDialogueIndex = -1;
      }
      gameOverStage = 1;
      gameOverStageStartTime = millis();
  }
  pop();

  } else if (gameOverStage === 1) {
    // 顯示 back3 並漸變全黑
    push();
    imageMode(CORNER);
    image(back3Img, 0, 0, width, height);
    
    let elapsed = millis() - gameOverStageStartTime;
    let alpha = map(elapsed, 0, 3000, 0, 255); // 3秒內變黑
    if (alpha > 255) alpha = 255;
    
    fill(0, alpha);
    noStroke();
    rectMode(CORNER);
    rect(0, 0, width, height);
    
    if (elapsed > 3000) {
      gameOverStage = 2;
      gameOverStageStartTime = millis();
    }
    pop();

  } else if (gameOverStage === 2) {
    // 全黑等待 3 秒
    background(0);
    if (millis() - gameOverStageStartTime > 3000) {
      gameOverStage = 3;
      gameOverStageStartTime = millis();
      gameOverCharIndex = 0; // 重置打字機索引給最後文字用
    }

  } else if (gameOverStage === 3) {
    // 顯示最終文字與按鈕
    background(0);
    
    let finalLines = ["感謝遊玩", "遊戲裡有小彩蛋，你有找到嗎?"];
    let totalChars = finalLines[0].length + finalLines[1].length;
    
    // 打字機邏輯
    if (millis() - gameOverLastTypeTime > 100) {
      if (gameOverCharIndex < totalChars) {
        gameOverCharIndex++;
        gameOverLastTypeTime = millis();
        typeSound.stop();
        typeSound.play();
      } else {
        typeSound.stop();
      }
    }

    textAlign(CENTER, CENTER);
    fill(255);
    noStroke();
    
    // 第一行
    textSize(60);
    let line1Len = finalLines[0].length;
    text(finalLines[0].substring(0, min(gameOverCharIndex, line1Len)), width / 2, height / 2 - 50);
    
    // 第二行
    if (gameOverCharIndex > line1Len) {
      textSize(16);
      text(finalLines[1].substring(0, gameOverCharIndex - line1Len), width / 2, height / 2);
    }

    // 按鈕 (文字顯示完後出現)
    if (gameOverCharIndex >= totalChars) {
      // 顯示製作人員
      textSize(16);
      text("製作人員:414XXX241 OOO 、 Gemini", width / 2, height / 2 + 50);

      rectMode(CENTER);
      // 滑鼠懸停效果
      if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 &&
          mouseY > height / 2 + 80 && mouseY < height / 2 + 140) {
        fill(220); // 懸停時變灰
      } else {
        fill(255);
      }
      rect(width / 2, height / 2 + 110, 200, 60, 30); // 改為圓角樣式 (30)
      
      fill(0);
      textSize(24);
      text("我要再一次", width / 2, height / 2 + 110);
    }
  }
  drawVolumeUI(); // 繪製音量控制
}

function drawNicknameInputScreen() {
  push();
  imageMode(CORNER);
  image(loadingImg, 0, 0, width, height); // 使用載入背景
  
  rectMode(CENTER);
  fill(255, 220);
  stroke(0);
  strokeWeight(2);
  rect(width / 2, height / 2, 400, 200, 20);

  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(24);
  text("請輸入玩家暱稱", width / 2, height / 2 - 60);

  // 顯示警告訊息
  if (nicknameWarning !== "") {
    fill(255, 0, 0); // 紅色文字
    textSize(16);
    text(nicknameWarning, width / 2, height / 2 + 70);
  }
  
  // 更新輸入框與按鈕位置 (確保視窗縮放時位置正確)
  nicknameInputBox.position(width / 2 - 80, height / 2 - 15);
  nicknameConfirmBtn.position(width / 2 - 30, height / 2 + 25);
  pop();
  drawVolumeUI(); // 繪製音量控制
}

function submitNickname() {
  let val = nicknameInputBox.value();
  if (val.trim() === "") {
    nicknameWarning = "請輸入暱稱";
    return;
  }

  if (val.length > 5) {
    nicknameWarning = "暱稱最多 5 個字";
    return;
  }
  
  playerNickname = val;
  // 更新劇情內容的最後一句
  storyContent[4].text = "——祝你好運，" + playerNickname + "。";
  clickSound.play();
  
  nicknameInputBox.hide();
  nicknameConfirmBtn.hide();
  gameState = 'LOADING';
  loadingStartTime = millis();
}

function keyPressed() {
  // 允許使用 空白鍵 或 Enter 鍵進行互動 (對應所有的"點擊繼續")
  if (key === ' ' || keyCode === ENTER) {
    if (secretBackgroundActive) {
      if (secretDialogueIndex < secretDialogues.length) {
        clickSound.play();
        let dialogue = secretDialogues[secretDialogueIndex];
        if (secretCharIndex < dialogue.text.length) {
          secretCharIndex = dialogue.text.length;
          typeSound.stop();
        } else {
          secretDialogueIndex++;
          secretCharIndex = 0;
          if (secretDialogueIndex >= secretDialogues.length) {
            isWhiteOut = true;
            whiteOutStartTime = millis();
            switchBGM(endingBgm, trueEndingBgm); // 台詞結束後切換音樂
          }
        }
      }
      return;
    }

    // 當觸發彩蛋(點擊4次)或正在關機時，禁止鍵盤互動
    if (treeClickCount === 4 || isTurningOff) return;

    if (gameState === 'STORY') {
      clickSound.play();
      gameState = 'DIFFICULTY_SELECT';
      typeSound.stop();
    } else if (gameState === 'START') {
      clickSound.play();
      gameState = 'PLAY';
    } else if (gameState === 'GAME_OVER') {
      if (gameOverStage === 0) {
        clickSound.play();
        // 處理對話推進 (與 mousePressed 邏輯相同)
        if (gameOverDialogueIndex < gameOverDialogues.length) {
          let dialogue = gameOverDialogues[gameOverDialogueIndex];
          let currentText = dialogue.text.replace("{nickname}", playerNickname);
          if (gameOverCharIndex < currentText.length) {
            gameOverCharIndex = currentText.length; // 立即顯示全文字
            typeSound.stop();
          } else {
            gameOverDialogueIndex++; // 下一句
            gameOverCharIndex = 0;
          }
        }
      } else if (gameOverStage === 3) {
        clickSound.play();
        // 重新開始遊戲 (回到劇情介紹)
        gameState = 'STORY';
        storyLineIndex = 0;
        storyCharIndex = 0;
        lastTypeTime = millis();
        
        // 重置遊戲變數
        plantsCollected = 0;
        currentQIndex = 0;
        wrongAttempts = 0;
        char1IntroFinished = false;
        char1InteractionStartTime = 0;
        remainingChances = 3;
        char4Text = "";
        lastPlayedSecretIndex = -1;
        lastPlayedDialogueIndex = -1;
        pickNewQuestion();
        switchBGM(endingBgm, bgm);
      }
    }
  }
}

// 繪製音量控制 UI 函式
function drawVolumeUI() {
  // 檢查滑鼠是否靠近右上角區域
  let isMouseNearVolume = (mouseX > width - 150 && mouseY < 80);
  
  if (isMouseNearVolume) {
    volumeSlider.show();
    volumeSlider.position(width - 130, 35); // 確保位置跟隨視窗
    
    push();
    rectMode(CORNER);
    fill(0, 180); // 半透明黑底
    noStroke();
    rect(width - 140, 20, 130, 40, 10);
    
    fill(255);
    textSize(12);
    textAlign(LEFT, CENTER);
    text("音量", width - 135, 30);
    pop();
  } else {
    volumeSlider.hide();
    push();
    fill(255); // 白色點點
    noStroke();
    ellipse(width - 40, 40, 6, 6);
    ellipse(width - 30, 40, 6, 6);
    ellipse(width - 20, 40, 6, 6);
    pop();
  }
  outputVolume(volumeSlider.value()); // 設定主音量
}
