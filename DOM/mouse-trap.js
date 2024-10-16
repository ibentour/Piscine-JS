let lastCircle = null;
let box = null;
let hasEntered = false;

const isInsideBox = (x, y, boxRect, circleRadius) => 
  x > boxRect.left + circleRadius &&
  x < boxRect.right - circleRadius &&
  y > boxRect.top + circleRadius &&
  y < boxRect.bottom - circleRadius;

export const createCircle = () => {
  document.addEventListener('click', e => {
    lastCircle = document.createElement('div');
    lastCircle.className = 'circle';
    lastCircle.style.cssText = `left:${e.clientX - 25}px;top:${e.clientY - 25}px;background:white;`;
    document.body.appendChild(lastCircle);
    hasEntered = false;
  });
};

export const moveCircle = () => {
  document.addEventListener('mousemove', e => {
    if (lastCircle && box) {
      const rect = box.getBoundingClientRect();
      const circleRadius = 25;
      let x = e.clientX - circleRadius;
      let y = e.clientY - circleRadius;

      if (isInsideBox(x + circleRadius, y + circleRadius, rect, circleRadius)) {
        hasEntered = true;
      }

      if (hasEntered) {
        x = Math.max(rect.left + 1, Math.min(x, rect.right - circleRadius * 2 - 1));
        y = Math.max(rect.top + 1, Math.min(y, rect.bottom - circleRadius * 2 - 1));
        lastCircle.style.background = 'var(--purple)';
      } else {
        lastCircle.style.background = 'white';
      }

      lastCircle.style.left = `${x}px`;
      lastCircle.style.top = `${y}px`;
    }
  });
};

export const setBox = () => {
  box = document.createElement('div');
  box.className = 'box';
  document.body.appendChild(box);
};