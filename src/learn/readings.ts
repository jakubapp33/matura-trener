import { READINGS_1 } from './readings-1'
import { READINGS_2 } from './readings-2'
import { READINGS_3 } from './readings-3'

export type { Reading } from './readings-types'

/** Lektury w kolejności chronologicznej. */
export const READINGS = [...READINGS_1, ...READINGS_2, ...READINGS_3]
export const READING_BY_ID = new Map(READINGS.map((r) => [r.id, r]))
