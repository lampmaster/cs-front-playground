import { grayscale, inverse, loadImageData } from "./canvas"

main()

async function main() {
    const image = await loadImageData('https://cdn.pixabay.com/photo/2023/04/25/15/08/church-7950418_640.jpg')
    const originalCanvas = <HTMLCanvasElement>document.getElementById('original')
    const resultCanvas = <HTMLCanvasElement>document.getElementById('result')
    originalCanvas.height = image.height
    originalCanvas.width = image.width
    resultCanvas.height = image.height
    resultCanvas.width = image.width

    const context = originalCanvas.getContext('2d')
    context.putImageData(image, 0, 0)

    const inverseHandler = async () => {
        const inversedCanvas = inverse(originalCanvas)
        renderCanvas(inversedCanvas)
    }

    const grayscaleHandler = async () => {
        const grayscaledCanvas = grayscale(originalCanvas)
        renderCanvas(grayscaledCanvas)
    }

    const renderCanvas = (canvas: HTMLCanvasElement) => {
        const canvasContext = canvas.getContext('2d')
        const imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height)
        
        const resultCanvasContext = resultCanvas.getContext('2d')
        resultCanvasContext.putImageData(imageData, 0, 0)
    }

    document.getElementById('inverse').onclick = inverseHandler
    document.getElementById('grayscale').onclick = grayscaleHandler
}