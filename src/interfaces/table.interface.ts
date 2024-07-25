export interface ITable {
  id: number
  name: string
  slug: string
  credentials: { user: string; password: string }
}