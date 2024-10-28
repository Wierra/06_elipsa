const ellipseArea = (width, leight) => {
    return width/2 * leight/2 * Math.PI
}

document.body.innerHTML += `<p>Výměra pozemku je ${ellipseArea(1,2)}</p>`
document.body.innerHTML += `<p>Výměra pozemku je ${ellipseArea(2,2)}</p>`