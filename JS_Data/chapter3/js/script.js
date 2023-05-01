const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");

// カラーピッカーを操作したときの一連の動作
const colorBg = () => {
  document.body.style.backgroundColor = color.value;

  let colorName = "";
  switch (color.value) {
    case "#ffffff":
      colorName = "(white)";
      break;
    case "#000000":
      colorName = "(black)";
      break;
  }
  text.textContent = `カラーコード: ${color.value}${colorName}`;
};

// カラーピッカーが変更されたら、colorBg を発動させる
color.addEventListener("input", colorBg);
