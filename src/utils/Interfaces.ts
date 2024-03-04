import { DateTime } from 'luxon'

export default interface Character {
  name: string
  title?: string
  sex: string
  vocation: string
  level: number
  achievementPoints?: number
  world: string
  residence: string
  guild?: {
    name: string
    rank: string
  }
  lastLogin?: string | DateTime | Date
  comment?: string
  accountStatus: string
  deaths?: any[]
}
