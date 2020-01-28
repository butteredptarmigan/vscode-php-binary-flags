import { Escape } from "./Escape";

function parse(input: string): number | null {
    if (!input) {
        return null;
    }

    return Number.parseInt(input.trim());
}

export function validate(input: string): string | null {
    try {
        var actual = parse(input);

        if (actual === null) {
            return null;
        }

        if (actual < 1) {
            return 'Input must be an integer greater that zero.'
        }
    } catch (error) {
        return 'Input must be a valid integer.';
    }

    return null;
}

export function parseResult(result: string | undefined) {
    if (result === undefined) {
        throw new Escape();
    }

    return parse(<string>result);
}