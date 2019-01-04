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
    .map((value, index) => (value !== null ? value === file[index] : true))
    .reduce(
      (previousValue, currentValue) => previousValue && currentValue,
      true,
    )
}

function isAAC(file: Uint8Array): boolean {
  return matchBytes(file, [0xff, 0xf1]) || matchBytes(file, [0xff, 0xf9])
}

function isAVI(file: Uint8Array): boolean {
  return matchBytes(file, [
    0x52,
    0x49,
    0x46,
    0x46,
    null,
    null,
    null,
    null,
    0x41,
    0x56,
    0x49,
    0x20,
    0x4c,
    0x49,
    0x53,
    0x54,
  ])
}

function isBMP(file: Uint8Array): boolean {
  return matchBytes(file, [0x42, 0x4d])
}

function isFLAC(file: Uint8Array): boolean {
  return matchBytes(file, [0x66, 0x4c, 0x61, 0x43, 0x00, 0x00, 0x00, 0x22])
}

function isGIF(file: Uint8Array): boolean {
  return (
    matchBytes(file, [0x47, 0x49, 0x46, 0x38, 0x37, 0x61]) ||
    matchBytes(file, [0x47, 0x49, 0x46, 0x38, 0x39, 0x61])
  )
}

function isHEIF(file: Uint8Array): boolean {
  return (
    matchBytes(file, [
      null,
      null,
      null,
      null,
      0x66,
      0x74,
      0x79,
      0x70,
      0x6d,
      0x69,
      0x66,
      0x31,
    ]) ||
    matchBytes(file, [
      null,
      null,
      null,
      null,
      0x66,
      0x74,
      0x79,
      0x70,
      0x6d,
      0x73,
      0x66,
      0x31,
    ]) ||
    matchBytes(file, [
      null,
      null,
      null,
      null,
      0x66,
      0x74,
      0x79,
      0x70,
      0x68,
      0x65,
      0x69,
      0x63,
    ]) ||
    matchBytes(file, [
      null,
      null,
      null,
      null,
      0x66,
      0x74,
      0x79,
      0x70,
      0x68,
      0x65,
      0x69,
      0x78,
    ]) ||
    matchBytes(file, [
      null,
      null,
      null,
      null,
      0x66,
      0x74,
      0x79,
      0x70,
      0x68,
      0x65,
      0x76,
      0x63,
    ]) ||
    matchBytes(file, [
      null,
      null,
      null,
      null,
      0x66,
      0x74,
      0x79,
      0x70,
      0x68,
      0x65,
      0x76,
      0x78,
    ])
  )
}

function isJPG(file: Uint8Array): boolean {
  return matchBytes(file, [0xff, 0xd8])
}

function isM4A(file: Uint8Array): boolean {
  return matchBytes(file, [
    null,
    null,
    null,
    null,
    0x66,
    0x74,
    0x79,
    0x70,
    0x4d,
    0x34,
    0x41,
    0x20,
  ])
}

function isM4V(file: Uint8Array): boolean {
  return matchBytes(file, [
    null,
    null,
    null,
    null,
    0x66,
    0x74,
    0x79,
    0x70,
    0x4d,
    0x34,
    0x65,
    0x20,
  ])
}

function isMOV(file: Uint8Array): boolean {
  return matchBytes(file, [
    null,
    null,
    null,
    null,
    0x66,
    0x74,
    0x79,
    0x70,
    0x71,
    0x74,
    0x20,
    0x20,
  ])
}

function isMP3(file: Uint8Array): boolean {
  return (
    matchBytes(file, [0xff, 0xe0]) ||
    matchBytes(file, [0xff, 0xe1]) ||
    matchBytes(file, [0xff, 0xe2]) ||
    matchBytes(file, [0xff, 0xe3]) ||
    matchBytes(file, [0xff, 0xe4]) ||
    matchBytes(file, [0xff, 0xe5]) ||
    matchBytes(file, [0xff, 0xe6]) ||
    matchBytes(file, [0xff, 0xe7]) ||
    matchBytes(file, [0xff, 0xe8]) ||
    matchBytes(file, [0xff, 0xe9]) ||
    matchBytes(file, [0xff, 0xea]) ||
    matchBytes(file, [0xff, 0xeb]) ||
    matchBytes(file, [0xff, 0xec]) ||
    matchBytes(file, [0xff, 0xed]) ||
    matchBytes(file, [0xff, 0xee]) ||
    matchBytes(file, [0xff, 0xef]) ||
    matchBytes(file, [0xff, 0xf0]) ||
    matchBytes(file, [0xff, 0xf1]) ||
    matchBytes(file, [0xff, 0xf2]) ||
    matchBytes(file, [0xff, 0xf3]) ||
    matchBytes(file, [0xff, 0xf4]) ||
    matchBytes(file, [0xff, 0xf5]) ||
    matchBytes(file, [0xff, 0xf6]) ||
    matchBytes(file, [0xff, 0xf7]) ||
    matchBytes(file, [0xff, 0xf8]) ||
    matchBytes(file, [0xff, 0xf9]) ||
    matchBytes(file, [0xff, 0xfa]) ||
    matchBytes(file, [0xff, 0xfb]) ||
    matchBytes(file, [0xff, 0xfc]) ||
    matchBytes(file, [0xff, 0xfd]) ||
    matchBytes(file, [0xff, 0xfe]) ||
    matchBytes(file, [0xff, 0xff])
  )
}

function isMP4(file: Uint8Array): boolean {
  return matchBytes(file, [
    null,
    null,
    null,
    null,
    0x66,
    0x74,
    0x79,
    0x70,
    0x4d,
    0x53,
    0x4e,
    0x56,
  ])
}

function isOGG(file: Uint8Array): boolean {
  return matchBytes(file, [
    0x4f,
    0x67,
    0x67,
    0x53,
    0x00,
    0x02,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
  ])
}

function isPDF(file: Uint8Array): boolean {
  return matchBytes(file, [0x25, 0x50, 0x44, 0x46])
}

function isPNG(file: Uint8Array): boolean {
  return matchBytes(file, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])
}

function isTIFF(file: Uint8Array): boolean {
  return matchBytes(file, [0x49, 0x20, 0x49])
}

function isWAV(file: Uint8Array): boolean {
  return matchBytes(file, [
    0x52,
    0x49,
    0x46,
    0x46,
    null,
    null,
    null,
    null,
    0x57,
    0x41,
    0x56,
    0x45,
    0x66,
    0x6d,
    0x74,
    0x20,
  ])
}

function isXML(file: Uint8Array): boolean {
  return matchBytes(file, [0x3c, 0x3f, 0x78, 0x6d])
}

function isZIP(file: Uint8Array): boolean {
  return matchBytes(file, [0x50, 0x4b, 0x03, 0x04])
}

export class AmbiguousFingerprintException extends Error {
  constructor(fingerprints: Array<FileType>) {
    super(`Multiple possible FileTypes: ${fingerprints.join(', ')}`)
    Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
  }
}

export type GetBytesFn = (start: number, end: number) => Promise<Uint8Array>

export async function fingerprint(getBytesFn: GetBytesFn): Promise<FileType> {
  const results = await fingerprintAllPossibleTypes(getBytesFn)
  if (results.length === 0) {
    return FileType.Unrecognized
  } else if (results.length === 1) {
    return results[0]
  } else {
    // Uncertain Fingerprint
    throw new AmbiguousFingerprintException(results)
  }
}

export async function fingerprintAllPossibleTypes(
  getBytesFn: GetBytesFn,
): Promise<Array<FileType>> {
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
