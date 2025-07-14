export interface DataTypeRegistry {
  // empty by design
}
// the "& string" is just a trick to get
// a nicer tooltip to show you in the next step
export function fetchRecord<T extends keyof DataTypeRegistry>(
  arg: T,
  id: `${T}_${string}`,
): DataTypeRegistry[T] {
  return {} as any
}
export function fetchRecords<T extends keyof DataTypeRegistry>(
  arg: T,
  ids: `${T}_${string}`[],
): DataTypeRegistry[T][] {
  return {} as any
}
