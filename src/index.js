import pngtiny from '../plugins/pngtiny'

/**
 * @description: 图像压缩
 * @param {File} file 原始 File 文件对象
 * @param {Number} quality 压缩质量，10-90，建议 80
 * @return {Promise<File>} 压缩过的 File 文件对象
 */
const imageTiny = (file, quality = 80) => {
  pngtiny.run()
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader()
      reader.readAsArrayBuffer(file)
      reader.onload = function(e) {
        const fcont = new Uint8Array(e.target.result)
        const fsize = fcont.byteLength
        const dataptr = pngtiny._malloc(fsize)
        const retdata = pngtiny._malloc(4)
        pngtiny.HEAPU8.set(fcont, dataptr)
        pngtiny._tiny(dataptr, fsize, retdata, quality)
        let rdata = new Int32Array(pngtiny.HEAPU8.buffer, retdata, 1)
        const size = rdata[0]
        rdata = new Uint8Array(pngtiny.HEAPU8.buffer, dataptr, size)
        const blob = new Blob([rdata], { type: file.type })
        let outFile = new File([blob], file.name, { type: file.type })
        if (outFile.size === 0) {
          outFile = file
        }
        resolve(outFile)
        pngtiny._free(dataptr)
        pngtiny._free(retdata)
      }
    } catch (error) {
      reject(error)
    }
  })
}

export default imageTiny
