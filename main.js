function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(50, 350, 70)

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(600, 350, 70)

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(50, 900, 70)

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(50, 350, 70)
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}