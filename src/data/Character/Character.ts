/** @type {import('jsdom').JSDOM} */
import axios from 'axios'
const jsdom = require('jsdom')
import { JSDOM as JsdomProps } from 'jsdom'
import Character from '../../utils/Interfaces'
import { DateTime } from 'luxon'

function get(name: string) {
  const res = axios.get(`https://www.tibia.com/community/?name=${name}`)
  const char = res.then(({ data }) => {
    const jsDom: JsdomProps = new jsdom.JSDOM(data)
    console.log(
      'Datetime:',
      DateTime.fromFormat(
        jsDom.window.document
          .querySelector('.TableContent tbody')
          ?.children.item(9)?.lastChild?.textContent!,
        "MM4 dd yyyy, HH:mm:ss 'CEST'",
        { locale: 'en-EU' }
      )
    )

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
        if (e.nodeName === 'TR')
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
              case 'Account Status:':
                character.accountStatus = c.nextSibling?.textContent!
                break
              default:
                break
            }
          })
      })
    console.log('🚀 ~ file: Character.ts:49 ~ char ~ character:', character)
    return character
  })
  return char
}

const Character = { get }

export default Character
