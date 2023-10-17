export const convertImgBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const converter = new FileReader()
        converter.readAsDataURL(file)

        converter.onload = () => {
            const imgAsBase64 = converter.result
            resolve(imgAsBase64)
        }

        converter.onerror = (err) => {
            reject(err)
        }
    })
}