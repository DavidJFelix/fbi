export const enum FileType {
  AAC = 'AAC',
  AVI = 'AVI',
  BMP = 'BMP',
  FLAC = 'FLAC',
  GIF = 'GIF',
  HEIC = 'HEIC',
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

function isAAC(file: Uint8Array): boolean {
  return false
}

function isAVI(file: Uint8Array): boolean {
  return false
}

function isBMP(file: Uint8Array): boolean {
  return false
}

function isFLAC(file: Uint8Array): boolean {
  return false
}

function isGIF(file: Uint8Array): boolean {
  return false
}

function isHEIC(file: Uint8Array): boolean {
  return false
}

function isJPG(file: Uint8Array): boolean {
  return false
}

function isM4A(file: Uint8Array): boolean {
  return false
}

function isM4V(file: Uint8Array): boolean {
  return false
}

function isMOV(file: Uint8Array): boolean {
  return false
}

function isMP3(file: Uint8Array): boolean {
  return false
}

function isMP4(file: Uint8Array): boolean {
  return false
}

function isOGG(file: Uint8Array): boolean {
  return false
}

function isPDF(file: Uint8Array): boolean {
  return false
}

function isPNG(file: Uint8Array): boolean {
  return false
}

function isTIFF(file: Uint8Array): boolean {
  return false
}

function isWAV(file: Uint8Array): boolean {
  return false
}

function isXML(file: Uint8Array): boolean {
  return false
}

function isZIP(file: Uint8Array): boolean {
  return false
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
  const filePrefix = await getBytesFn(0, 8)
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

  if (isHEIC(filePrefix)) {
    fingerprints = [...fingerprints, FileType.HEIC]
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