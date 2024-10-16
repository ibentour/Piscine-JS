const build = (n) => {
    const body = document.body;
    let bricks = 1;
    const interval = setInterval(() => {
        const brick = document.createElement("div");
        brick.id = `brick-${bricks}`;
        if (bricks % 3 === 2) brick.dataset.foundation = true;
        body.appendChild(brick);
        if (++bricks > n) clearInterval(interval);
    }, 100);
};

const repair = (...ids) => {
    ids.forEach((id) => {
        const brick = document.getElementById(id);
        brick.dataset.repaired = brick.hasAttribute("foundation") ? "in progress" : "true";
    });
};

const destroy = () => {
    const bricks = document.getElementsByTagName("div");
    bricks[bricks.length - 1]?.remove();
};

export { build, repair, destroy };