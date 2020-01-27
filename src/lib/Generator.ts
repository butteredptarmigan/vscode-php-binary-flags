export class Generator
{
    public static generate(count: number, from: number): string
    {
        const lines: Array<string> = [];

        let num = (from > 1)
            ? from * 2
            : from;
        for (let i = 1; i < count; i++) {
            const line = `public const $${i} = ${num};`;
            lines.push(line);
            num *= 2;
        }

        return lines.join('\n');
    }
}