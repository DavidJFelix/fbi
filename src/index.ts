export const enum FileType {
  AAC = 'AAC',
  AVI = 'AVI',
  BMP = 'BMP',
  FLAC = 'FLAC',
  GIF = 'GIF',
  HEIF = 'HEIF',
  JPG = 'JPG',
  M4A = 'M4A',
  M4V = 'M4V',
  MOV = 'MOV',
  MP3 = 'MP3',
  MP4 = 'MP4',
  OGG = 'OGG',
  PDF = 'PDF',
  PNG = 'PNG',
  TIFF = 'TIFF',
  Unrecognized = 'Unrecognized',
  WAV = 'WAV',
  XML = 'XML',
  ZIP = 'ZIP',
}

type ByteSignature = Array<number | null>

function matchBytes(file: Uint8Array, byteSignature: ByteSignature): boolean {
  return byteSignature
    .map((value, index) => value !== null ? value === file[index] : true)
    .reduce((previousValue, currentValue) => previousValue && currentValue, true)
}

function isAAC(file: Uint8Array): boolean {
  return matchBytes(file, [0xFF, 0xF1]) ||
    matchBytes(file, [0xFF, 0xF9])
}

function isAVI(file: Uint8Array): boolean {
  return matchBytes(file, [0x52, 0x49, 0x46, 0x46, null, null, null, null, 0x41, 0x56, 0x49, 0x20, 0x4C, 0x49, 0x53, 0x54])
}

function isBMP(file: Uint8Array): boolean {
  return matchBytes(file, [0x42, 0x4D])
}

function isFLAC(file: Uint8Array): boolean {
  return matchBytes(file, [0x66, 0x4C, 0x61, 0x43, 0x00, 0x00, 0x00, 0x22])
}

function isGIF(file: Uint8Array): boolean {
  return matchBytes(file, [0x47, 0x49, 0x46, 0x38, 0x37, 0x61]) ||
    matchBytes(file, [0x47, 0x49, 0x46, 0x38, 0x39, 0x61])
}

function isHEIF(file: Uint8Array): boolean {
  return matchBytes(file, [null, null, null, null, 0x66, 0x74, 0x79, 0x70, 0x6D, 0x69, 0x66, 0x31,]) ||
    matchBytes(file, [null, null, null, null, 0x66, 0x74, 0x79, 0x70, 0x6D, 0x73, 0x66, 0x31,]) ||
    matchBytes(file, [null, null, null, null, 0x66, 0x74, 0x79, 0x70, 0x68, 0x65, 0x69, 0x63,]) ||
    matchBytes(file, [null, null, null, null, 0x66, 0x74, 0x79, 0x70, 0x68, 0x65, 0x69, 0x78,]) ||
    matchBytes(file, [null, null, null, null, 0x66, 0x74, 0x79, 0x70, 0x68, 0x65, 0x76, 0x63,]) ||
    matchBytes(file, [null, null, null, null, 0x66, 0x74, 0x79, 0x70, 0x68, 0x65, 0x76, 0x78,])
}

function isJPG(file: Uint8Array): boolean {
  return matchBytes(file, [0xFF, 0xD8,])
}

function isM4A(file: Uint8Array): boolean {
  return matchBytes(file, [null, null, null, null, 0x66, 0x74, 0x79, 0x70, 0x4D, 0x34, 0x41, 0x20,])
}

function isM4V(file: Uint8Array): boolean {
  return matchBytes(file, [null, null, null, null, 0x66, 0x74, 0x79, 0x70, 0x4D, 0x34, 0x41, 0x20,])
}

function isMOV(file: Uint8Array): boolean {
  return matchBytes(file, [null, null, null, null, 0x66, 0x74, 0x79, 0x70, 0x71, 0x74, 0x20, 0x20,])
}

function isMP3(file: Uint8Array): boolean {
  return matchBytes(file, [0xFF, 0xE0]) ||
    matchBytes(file, [0xFF, 0xE1]) ||
    matchBytes(file, [0xFF, 0xE2]) ||
    matchBytes(file, [0xFF, 0xE3]) ||
    matchBytes(file, [0xFF, 0xE4]) ||
    matchBytes(file, [0xFF, 0xE5]) ||
    matchBytes(file, [0xFF, 0xE6]) ||
    matchBytes(file, [0xFF, 0xE7]) ||
    matchBytes(file, [0xFF, 0xE8]) ||
    matchBytes(file, [0xFF, 0xE9]) ||
    matchBytes(file, [0xFF, 0xEA]) ||
    matchBytes(file, [0xFF, 0xEB]) ||
    matchBytes(file, [0xFF, 0xEC]) ||
    matchBytes(file, [0xFF, 0xED]) ||
    matchBytes(file, [0xFF, 0xEE]) ||
    matchBytes(file, [0xFF, 0xEF]) ||
    matchBytes(file, [0xFF, 0xF0]) ||
    matchBytes(file, [0xFF, 0xF1]) ||
    matchBytes(file, [0xFF, 0xF2]) ||
    matchBytes(file, [0xFF, 0xF3]) ||
    matchBytes(file, [0xFF, 0xF4]) ||
    matchBytes(file, [0xFF, 0xF5]) ||
    matchBytes(file, [0xFF, 0xF6]) ||
    matchBytes(file, [0xFF, 0xF7]) ||
    matchBytes(file, [0xFF, 0xF8]) ||
    matchBytes(file, [0xFF, 0xF9]) ||
    matchBytes(file, [0xFF, 0xFA]) ||
    matchBytes(file, [0xFF, 0xFB]) ||
    matchBytes(file, [0xFF, 0xFC]) ||
    matchBytes(file, [0xFF, 0xFD]) ||
    matchBytes(file, [0xFF, 0xFE]) ||
    matchBytes(file, [0xFF, 0xFF])
}

function isMP4(file: Uint8Array): boolean {
  return matchBytes(file, [null, null, null, null, 0x66, 0x74, 0x79, 0x70, 0x4D, 0x53, 0x4E, 0x56,])
}

function isOGG(file: Uint8Array): boolean {
  return matchBytes(file, [0x4F, 0x67, 0x67, 0x53, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,])
}

function isPDF(file: Uint8Array): boolean {
  return matchBytes(file, [0x25, 0x50, 0x44, 0x46,])
}

function isPNG(file: Uint8Array): boolean {
  return matchBytes(file, [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A,])
}

function isTIFF(file: Uint8Array): boolean {
  return matchBytes(file, [0x49, 0x20, 0x49,])
}

function isWAV(file: Uint8Array): boolean {
  return matchBytes(file, [0x52, 0x49, 0x46, 0x46, null, null, null, null, 0x57, 0x41, 0x56, 0x45, 0x66, 0x6D, 0x74, 0x20,])
}

function isXML(file: Uint8Array): boolean {
  return matchBytes(file, [0x3C, 0x3F, 0x78, 0x6D,])
}

function isZIP(file: Uint8Array): boolean {
  return matchBytes(file, [0x50, 0x4B, 0x03, 0x04,])
}

export class AmbiguousFingerprintException extends Error {
  constructor(fingerprints: Array<FileType>) {
    super(`Multiple possible FileTypes: ${fingerprints.join(', ')}`)
  }
}

export type GetBytesFn = (start: number, end: number) => Promise<Uint8Array>

export async function fingerprint(getBytesFn: GetBytesFn): Promise<FileType> {
  const results = await fingerprintAllPossibleTypes(getBytesFn)
  if (results.length === 0) {
    return FileType.Unrecognized
  } else if (results.length === 1) {
    return results[0]
  } else { // Uncertain Fingerprint
    throw new AmbiguousFingerprintException(results)
  }
}

export async function fingerprintAllPossibleTypes(getBytesFn: GetBytesFn): Promise<Array<FileType>> {
  const filePrefix = await getBytesFn(0, 15)
  let fingerprints: Array<FileType> = []

  if (isAAC(filePrefix)) {
    fingerprints = [...fingerprints, FileType.AAC]
  }

  if (isAVI(filePrefix)) {
    fingerprints = [...fingerprints, FileType.AVI]
  }

  if (isBMP(filePrefix)) {
    fingerprints = [...fingerprints, FileType.BMP]
  }

  if (isFLAC(filePrefix)) {
    fingerprints = [...fingerprints, FileType.FLAC]
  }

  if (isGIF(filePrefix)) {
    fingerprints = [...fingerprints, FileType.GIF]
  }

  if (isHEIF(filePrefix)) {
    fingerprints = [...fingerprints, FileType.HEIF]
  }

  if (isJPG(filePrefix)) {
    fingerprints = [...fingerprints, FileType.JPG]
  }

  if (isM4A(filePrefix)) {
    fingerprints = [...fingerprints, FileType.M4A]
  }

  if (isM4V(filePrefix)) {
    fingerprints = [...fingerprints, FileType.M4V]
  }

  if (isMOV(filePrefix)) {
    fingerprints = [...fingerprints, FileType.MOV]
  }

  if (isMP3(filePrefix)) {
    fingerprints = [...fingerprints, FileType.MP3]
  }

  if (isMP4(filePrefix)) {
    fingerprints = [...fingerprints, FileType.MP4]
  }

  if (isOGG(filePrefix)) {
    fingerprints = [...fingerprints, FileType.OGG]
  }

  if (isPDF(filePrefix)) {
    fingerprints = [...fingerprints, FileType.PDF]
  }

  if (isPNG(filePrefix)) {
    fingerprints = [...fingerprints, FileType.PNG]
  }

  if (isTIFF(filePrefix)) {
    fingerprints = [...fingerprints, FileType.TIFF]
  }

  if (isWAV(filePrefix)) {
    fingerprints = [...fingerprints, FileType.WAV]
  }

  if (isXML(filePrefix)) {
    fingerprints = [...fingerprints, FileType.XML]
  }

  if (isZIP(filePrefix)) {
    fingerprints = [...fingerprints, FileType.ZIP]
  }

  return fingerprints
}