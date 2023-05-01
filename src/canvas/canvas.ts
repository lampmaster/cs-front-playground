function canvasFilter(filteFn: (data: ImageData) => void) {
    return (canvas: HTMLCanvasElement) => {
        const imageHeight = canvas.height
        const imageWidth = canvas.width
        
        const context = canvas.getContext('2d')
        const imageData = context.getImageData(0, 0, imageWidth, imageHeight)
    
        filteFn(imageData)
    
        const newCanvas = document.createElement('canvas')
        newCanvas.height = imageHeight
        newCanvas.width = imageWidth
        const newCanvasContext = newCanvas.getContext('2d')
        newCanvasContext.putImageData(imageData, 0, 0)
    
        return newCanvas
    }
    
}

export const inverse = canvasFilter((imageData) => {
    for (let i = 0; i < imageData.data.length; i = i + 4) {
        imageData.data[i] = 255 - imageData.data[i]
        imageData.data[i + 1] = 255 - imageData.data[i + 1]
        imageData.data[i + 2] = 255 - imageData.data[i + 2]
    }
})

export const grayscale = canvasFilter((imageData) => {
    for (let i = 0; i < imageData.data.length; i = i + 4) {
        const lightness = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3
        imageData.data[i] = lightness
        imageData.data[i+1] = lightness
        imageData.data[i+2] = lightness
    }
})

export function loadImageData(url: string): Promise<ImageData> {
    return new Promise((resolve, reject) => {
        const image = new Image()

        const loadHandler = () => {
            const canvas = document.createElement('canvas')
            const context = canvas.getContext('2d')

            canvas.width = image.width
            canvas.height = image.height
            context.drawImage(image, 0, 0)
            const imageData = context.getImageData(0, 0, image.width, image.height)

            resolve(imageData)
        }

        const errorHandler = () => {
            console.error(`Image not found in this path ${url}`)
        }

        image.addEventListener('load', loadHandler)

        image.src = url
        image.crossOrigin = "Anonymous"
        image.onload = loadHandler
        image.onerror = errorHandler
    })
}

