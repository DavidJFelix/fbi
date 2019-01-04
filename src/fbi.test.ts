import { AmbiguousFingerprintException, FileType, fingerprint } from '.'

describe('fingerprint', () => {
  test('should return file type when not ambiguous', async () => {
    // Given
    const getBytesFn = jest.fn()
    const fileBytes = new Uint8Array(16)
    fileBytes.set([0xff, 0xd8, 0x00, 0x00, 0x00, 0x00, 0x00])
    getBytesFn.mockResolvedValue(fileBytes)

    // When
    const result = await fingerprint(getBytesFn)

    expect(result).toBe(FileType.JPG)
  })

  test('should throw exception when ambiguous', async () => {
    // Given
    const getBytesFn = jest.fn()
    const fileBytes = new Uint8Array(16)
    fileBytes.set([
      0xff,
      0xd8,
      0x00,
      0x00,
      0x66,
      0x74,
      0x79,
      0x70,
      0x4d,
      0x34,
      0x41,
      0x20,
    ])
    getBytesFn.mockResolvedValue(fileBytes)

    // Then
    await expect(fingerprint(getBytesFn)).rejects.toEqual(
      new Error('Multiple possible FileTypes: JPG, M4A'),
    )
  })
})
