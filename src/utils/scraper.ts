import axios from 'axios'
import jsdom, { JSDOM as JsdomProps } from 'jsdom'
import { Character } from './interfaces'

class Scraper {
  private characterName: string | undefined = undefined
  private monsterName: string | undefined = undefined
  public instance: Scraper = this

  constructor(characterName?: string, monsterName?: string) {
    if (characterName) {
      this.characterName = characterName
      this.getCharacter(this.characterName)
    }
    
    if (monsterName) this.monsterName = monsterName
  }

  /** Get Tibia character by name.
   * @param name Character name.
   */
  async getCharacter(name: string) {
    const res = axios.get(`https://www.tibia.com/community/?name=${name}`)
    const char = res.then(({ data }) => {
      const jsDom: JsdomProps = new jsdom.JSDOM(data)

      const character: Character = {
        name: '',
        sex: '',
        vocation: '',
        level: 0,
        world: '',
        residence: '',
        accountStatus: '',
      }

      jsDom.window.document
        .querySelector('.TableContent tbody')
        ?.childNodes.forEach((e) => {
          if (e.nodeName === 'TR' && e.childNodes.length > 1)
            e.childNodes.forEach((c) => {
              switch (c.textContent) {
                case 'Name:':
                  character.name = c.nextSibling?.textContent!
                  break
                case 'Title:':
                  character.title = c.nextSibling?.textContent!
                  break
                case 'Sex:':
                  character.sex = c.nextSibling?.textContent!
                  break
                case 'Vocation:':
                  character.vocation = c.nextSibling?.textContent!
                  break
                case 'Level:':
                  character.level = Number.parseInt(c.nextSibling?.textContent!)
                  break
                case 'Achievement Points:':
                  character.achievementPoints = Number.parseInt(
                    c.nextSibling?.textContent!
                  )
                  break
                case 'World:':
                  character.world = c.nextSibling?.textContent!
                  break
                case 'Residence:':
                  character.residence = c.nextSibling?.textContent!
                  break
                case 'Last Login:':
                  character.lastLogin = c.nextSibling?.textContent!
                  break
                case 'Comment:':
                  character.comment = c.nextSibling?.textContent!
                  break
                case 'Account Status:':
                  character.accountStatus = c.nextSibling?.textContent!
                  break
                default:
                  break
              }
            })
        })
      return character
    })
    return char
  }

  async getCharacters(characters: string[]) {
    type CharacterPromise = Promise<Character>
    const promises: CharacterPromise[] = []
    const promise = characters.map((char) =>
      promises.push(this.getCharacter(char))
    )
    return await Promise.all(promises)
  }
}

export const scraper = (charactersName?: string[], monsterName?: string) => {
  return new Scraper()
}

export default Scraper
