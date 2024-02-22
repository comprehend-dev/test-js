export class MusicTimeCalculator {
    constructor(bpm, numerator, denominator) {
        this.bpm = bpm;
        this.numerator = numerator;
        this.denominator = denominator;
    }

    bars(n = 1) {
        return n * this.wholeNotes(1) * (this.numerator / (this.denominator * 4));
    }

    wholeNotes(n = 1) {
        return n * (60 / this.bpm);
    }
}

export function getTimeCalculator(bpm, numerator, denominator) {
    if (denominator != 4 && denominator != 8)
        throw new Error("Unsupported denominator");
    return new MusicTimeCalculator(bpm, numerator, denominator);
}
