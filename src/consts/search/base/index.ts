import type { Year } from "@/types"

import { base as base20 } from "./2020"
import { base as base21 } from "./2021"
import { base as base22 } from "./2022"
import { base as base23 } from "./2023"
import { base as base24 } from "./2024"

export const getBase = (year: Year) => {
	switch (year) {
		case 2020: 
			return base20;
		case 2021:
			return base21;
		case 2022:
		  return base22;
		case 2023:
			return base23;
		case 2024:
			return base24;	
		default:
			throw new Error("Invalid year");
	}
}