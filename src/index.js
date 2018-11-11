export function watch(selector, offsetX, offsetY, handler) {
    let frameWidth = window.innerWidth + offsetX,
        frameHeight = window.innerHeight + offsetY,
        status = "__inside_window__";
    (typeof selector === "string"
        ? document.querySelectorAll(selector)
        : selector
    ).forEach(target => {
        let { x, y, width, height } = target.getBoundingClientRect(),
            inY,
            inX;
        if (Math.abs(y) > frameHeight || Math.abs(x) > frameWidth) return;

        y = y > offsetY ? y - offsetY : y;
        height = height + offsetY;

        x = x > offsetX ? x - offsetX : x;
        height = height + offsetX;

        if (frameHeight > y && y + height > 0) {
            inY = true;
        }
        if (frameHeight > x && x + width > 0) {
            inX = true;
        }
        if (inX && inY) {
            if (!target[status]) {
                handler(target, true);
                target[status] = true;
            }
        } else {
            if (target[status]) handler(target, false);
            target[status] = false;
        }
    });
}

export function insideWindow({
    selector,
    timeout = 1000 / 8,
    offsetX = 0,
    offsetY = 50,
    handler
}) {
    let loop = setInterval(() => {
        watch(selector, offsetX, offsetY, handler);
    }, timeout);
    return () => clearInterval(loop);
}
