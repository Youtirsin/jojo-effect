window.onload = function () {
  setInterval(() => {
    create_effect();
  }, 500);
}

function create_effect() {
  // font size, width and height
  let size = 40;

  let x = (document.querySelector("body").offsetWidth - size) * Math.random();
  let y = document.querySelector("body").offsetHeight;

  let offset_x = 0;
  let offset_left = true;

  const el = document.createElement("div");
  el.classList.add("content");
  el.textContent = "づ";
  document.querySelector("#container").appendChild(el);

  function apply_size() {
    el.style.width = size + "px";
    el.style.height = size + "px";
    el.style.fontSize = size + "px";
  }

  function apply_pos() {
    el.style.top = y + "px";
    el.style.left = x + offset_x + "px";
  }

  apply_size();
  apply_pos();

  let size_change = setInterval(() => {
    if (size < 120) {
      size += 1;
    }

    apply_size();

    if (y < -size) {
      clearInterval(size_change);
    }
  }, 50);

  let movement = setInterval(() => {
    if (offset_left) {
      offset_x -= 10;
      if (offset_x <= -30) {
        offset_left = false;
      }
    } else {
      offset_x += 10;
      if (offset_x >= 30) {
        offset_left = true;
      }
    }
    y -= 10;

    apply_pos();

    if (y < -size) {
      el.remove();
      clearInterval(movement);
    }
  }, 100);
}