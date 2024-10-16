export const pick = () => {
    const body = document.body;
    const [hslDiv, hueDiv, luminosityDiv] = ['hsl', 'hue text', 'luminosity text'].map(createDiv);
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.append(createSVGLine('axisX'), createSVGLine('axisY'));
    body.appendChild(svg);
  
    const updateColor = ({ clientX: x, clientY: y }) => {
      const hue = Math.round((x / innerWidth) * 360);
      const luminosity = Math.round((1 - y / innerHeight) * 100);
      const hslColor = `hsl(${hue}, 50%, ${luminosity}%)`;
  
      body.style.background = hslColor;
      hslDiv.textContent = hslColor;
      hueDiv.textContent = `hue\n${hue}`;
      luminosityDiv.textContent = `luminosity\n${luminosity}`;
  
      svg.querySelector('#axisX').setAttribute('x1', x);
      svg.querySelector('#axisX').setAttribute('x2', x);
      svg.querySelector('#axisY').setAttribute('y1', y);
      svg.querySelector('#axisY').setAttribute('y2', y);
    };
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(hslDiv.textContent)
        .then(() => console.log('Color copied to clipboard'))
        .catch(err => console.error('Failed to copy:', err));
    };
  
    body.addEventListener('mousemove', updateColor);
    body.addEventListener('click', copyToClipboard);
  };
  
  const createDiv = (className) => {
    const div = document.createElement('div');
    div.className = className;
    document.body.appendChild(div);
    return div;
  };
  
  const createSVGLine = (id) => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.id = id;
    line.setAttribute('x1', '0');
    line.setAttribute('y1', '0');
    return line;
  };