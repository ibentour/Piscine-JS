import { gossips } from "./gossip-grid.data.js";

const createElement = (type, props = {}, ...children) => {
  const element = document.createElement(type);
  Object.entries(props).forEach(([key, value]) => {
    if (key === 'eventListeners') {
      Object.entries(value).forEach(([event, handler]) => {
        element.addEventListener(event, handler);
      });
    } else {
      element[key] = value;
    }
  });
  element.append(...children);
  return element;
};

const createRange = (id, min, max, value, handler) => createElement('input', {
  type: 'range', id, min, max, value,
  eventListeners: { input: handler }
});

const updateStyles = (selector, styleUpdater) => {
  document.querySelectorAll(selector).forEach(styleUpdater);
};

const grid = () => {
  const form = createElement('form', { className: 'gossip' },
    createElement('textarea'),
    createElement('button', {
      type: 'submit',
      textContent: 'Share gossip!',
      eventListeners: {
        click: (e) => {
          e.preventDefault();
          const textarea = form.querySelector('textarea');
          if (textarea.value) {
            gossips.unshift(textarea.value);
            document.querySelectorAll('.gossip:not(form)').forEach(card => card.remove());
            textarea.value = '';
            renderGossips();
          }
        }
      }
    })
  );

  const ranges = createElement('div', { className: 'ranges' },
    createRange('width', 200, 800, 400, e => updateStyles('.gossip', card => card.style.width = `${e.target.value}px`)),
    createRange('fontSize', 20, 40, 30, e => updateStyles('.gossip', card => card.style.fontSize = `${e.target.value}px`)),
    createRange('background', 20, 75, 50, e => updateStyles('.gossip', card => card.style.backgroundColor = `hsl(280, 50%, ${e.target.value}%)`))
  );

  document.body.append(ranges, form);
  renderGossips();
};

const renderGossips = () => {
  gossips.forEach(gossip => {
    document.body.appendChild(createElement('div', { className: 'gossip', innerHTML: gossip }));
  });
};

export { grid };