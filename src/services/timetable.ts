import { type Account, AccountService } from "@/stores/account/types";
import { useTimetableStore } from "@/stores/timetable";
import { epochWNToPronoteWN } from "@/utils/epochWeekNumber";
import { checkIfSkoSupported } from "./skolengo/default-personalization";
import { error } from "@/utils/logger/logger";

/**
 * Updates the state and cache for the timetable of given week number.
 */
export async function updateTimetableForWeekInCache <T extends Account> (account: T, epochWeekNumber: number): Promise<void> {
  switch (account.service) {
    case AccountService.Pronote: {
      const { getTimetableForWeek } = await import("./pronote/timetable");
      const weekNumber = epochWNToPronoteWN(epochWeekNumber, account);
      const timetable = await getTimetableForWeek(account, weekNumber);
      useTimetableStore.getState().updateClasses(epochWeekNumber, timetable);
      break;
    }
    case AccountService.Local: {
      const timetable = [];
      useTimetableStore.getState().updateClasses(epochWeekNumber, []);
      break;
    }
    case AccountService.Skolengo: {
      if(!checkIfSkoSupported(account, "Lessons")) {
        error("[updateTimetableForWeekInCache]: This Skolengo instance doesn't support Lessons.", "skolengo");
        break;
      }
      const { getTimetableForWeek } = await import("./skolengo/data/timetable");
      const timetable = await getTimetableForWeek(account, epochWeekNumber);
      useTimetableStore.getState().updateClasses(epochWeekNumber, timetable);
      break;
    }
    default: {
      throw new Error("Service not implemented.");
    }
  }
}
