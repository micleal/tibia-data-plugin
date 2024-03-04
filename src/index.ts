import { Character } from './utils/interfaces'
import { scraper } from './utils/scraper'

class TibiaDataPlugin {
  async getCharacter(name: string): Promise<Character> {
    return await scraper().getCharacter(name)
  }
  async getGuild(name: string): Promise<any> {
    // return scraper.getGuild(name)
  }
  async getHighscores(world: string, category: string): Promise<any> {
    // return scraper.getHighscores(world, category)
  }
  async getNews(): Promise<any> {
    // return scraper.getNews()
  }
  async getWorlds(): Promise<any> {
    // return scraper.getWorlds()
  }
  async getWorld(world: string): Promise<any> {
    // return scraper.getWorld(world)
  }
  async getOnline(world: string): Promise<any> {
    // return scraper.getOnline(world)
  }
}

export default TibiaDataPlugin
