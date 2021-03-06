export class Generator
{
    public static generate(count: number, from: number | null): string
    {
        const lines: Array<string> = [];

        let num = (from === null)
            ? 1
            : from * 2;
        for (let i = 0; i < count; i++) {
            const line = `public const $${i + 1} = ${num};`;
            lines.push(line);
            num *= 2;
        }

        return lines.join('\n');
    }
}