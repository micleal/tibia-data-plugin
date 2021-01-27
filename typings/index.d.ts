declare module 'tibia-data-plugin' {
	export class Routes {
		public get(event: 'CHARACTER', name: string)
		public get(event: 'GUILD', name: string)
		public get(event: 'HOUSE', name: string)
		public get(event: 'WORLD', name: string)
	}

	/**
	 * Tibia character interface.
	 */
	export interface Character {
		Name: string
		Sex: string
		Vocation: string
		Level: number
		AchievementPoints: string
		World: string
		Residence: string
		Married: string
		House: {
			HouseId: string
			Name: string
			Town: string
			Paid: Date
			World: string
		}
		Guild: {
			Name: string
			Rank: string
		}
		Title: string
	}

	/**
	 * Tibia guild interface.
	 */
	export interface Guild {
		Name: string
		Members: Array<string>
	}

	/**
	 * Tibia house interface.
	 */
	export interface House {
		HouseId: string
		Name: string
		Town: string
		Paid: Date
		World: string
	}
}
