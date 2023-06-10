export function useDate() {
    function getDaysInMonth(date: Date): number {
        return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
    }

    function getFullDate(date: number): string {
        if (date.toString().length === 1) {
            return `0${date}`
        }
        return date.toString();
    }

    function getCurrentWeek(date: Date): string[] {
        const datesOfWeek: string[] = [];

        [...Array(date.getDay())].map((item: undefined, index) =>
            datesOfWeek.unshift(getFullDate(date.getDate() - index >= 1 ?
                date.getDate() - index : (Number(datesOfWeek[0]) === 1 ?
                        getDaysInMonth(new Date(
                            date.getFullYear(),
                            date.getMonth() - 1,
                            date.getDate())
                        ) : Number(datesOfWeek[0]) - 1
                )
            ))
        );

        [...Array(7 - date.getDay())].map((item: undefined, index) =>
            datesOfWeek.push(getFullDate((date.getDate() + index + 1) <= getDaysInMonth(date) ?
                    (date.getDate() + index + 1) : (datesOfWeek[datesOfWeek.length - 1] === getDaysInMonth(date).toString() ?
                        1 : Number(datesOfWeek[datesOfWeek.length - 1]) + 1
                    )
            ))
        );

        return datesOfWeek;
    }

    return { getCurrentWeek, getFullDate, getDaysInMonth };
}

export function usePositionOfGrid() {
    function getRow(index: number): number {
        switch (true) {
            case (index >= 0 && index < 7):
                return 0;
            case (index >= 7 && index < 7 * 2):
                return 1;
            case (index >= 7 * 2 && index < 7 * 3):
                return 2;
            case (index >= 7 * 3 && index < 7 * 4):
                return 3;
            case (index >= 7 * 4 && index < 7 * 5):
                return 4;
            case (index >= 7 * 5 && index < 7 * 6):
                return 5;
            case (index >= 7 * 6 && index < 7 * 7):
                return 6;
            case (index >= 7 * 7 && index < 7 * 8):
                return 7;
            case (index >= 7 * 8 && index < 7 * 9):
                return 8;
            case (index >= 7 * 9 && index < 7 * 10):
                return 9;
            case (index >= 7 * 10 && index < 7 * 11):
                return 10;
            case (index >= 7 * 11 && index < 7 * 12):
                return 11;
            case (index >= 7 * 12 && index < 7 * 13):
                return 12;
            case (index >= 7 * 13 && index < 7 * 14):
                return 13;
            case (index >= 7 * 14 && index < 7 * 15):
                return 14;
            case (index >= 7 * 15 && index < 7 * 16):
                return 15;
            case (index >= 7 * 16 && index < 7 * 17):
                return 16;
            case (index >= 7 * 17 && index < 7 * 18):
                return 17;
            case (index >= 7 * 18 && index < 7 * 19):
                return 18;
            case (index >= 7 * 19 && index < 7 * 20):
                return 19;
            case (index >= 7 * 20 && index < 7 * 21):
                return 20;
            case (index >= 7 * 21 && index < 7 * 22):
                return 21;
            case (index >= 7 * 22 && index < 7 * 23):
                return 22;
            default:
                return -1;
        }
    }

    function getCol(index: number): number {
        switch (index % 7) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            case 4:
                return 4;
            case 5:
                return 5;
            case 6:
                return 6;
            default:
                return -1;
        }
    }

    return { getCol, getRow };
}