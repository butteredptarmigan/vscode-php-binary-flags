import { Escape } from "./Escape";

function parse(input: string): number {
    return Number.parseInt(input.trim());
}

export function validate(input: string): string | null {
    try {
        var actual = parse(input);
    } catch (error) {
        return 'Input must be a valid integer.';
    }

    if (actual < 1) {
        return 'Input must be an integer greater that zero.'
    }

    return null;
}

export function parseResult(result: string | undefined) {
    if (result == undefined) {
        throw new Escape();
    }

    return parse(<string>result);
}