document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('pixelCanvas');
    const ctx = canvas.getContext('2d');
    const colorPicker = document.getElementById('colorPicker');

    let drawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', draw);

    function startDrawing(e) {
        drawing = true;
        draw(e); // Draw a single pixel on mousedown
    }

    function stopDrawing() {
        drawing = false;
        ctx.beginPath(); // Reset the drawing path
    }

    function draw(e) {
        if (!drawing) return;

        const pixelSize = 5; // Adjust the size of each pixel
        const color = colorPicker.value;
        const x = e.clientX - canvas.offsetLeft;
        const y = e.clientY - canvas.offsetTop;

        ctx.fillStyle = color;
        ctx.fillRect(Math.floor(x / pixelSize) * pixelSize, Math.floor(y / pixelSize) * pixelSize, pixelSize, pixelSize);
    }
});
