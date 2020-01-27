import * as vscode from 'vscode';
import { Generator } from './lib/Generator';
import { validate, parseResult } from './lib/entries';
import { Escape } from './lib/Escape';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.generateFlags', () => {
        try {
            const args = Object();
            
            vscode.window.showInputBox({
                prompt: 'How many flags should be created?',
                validateInput: validate
            })
            .then((result) => {
                args.count = parseResult(result);
    
                return vscode.window.showInputBox({
                    prompt: 'Select a base, i.e. last flag that already exists (leave empty for no base)',
                    validateInput: validate
                });
            })
            .then((result) => {
                args.from = parseResult(result);
                const text = Generator.generate(args.count, args.from);
                const snippet = new vscode.SnippetString(text);
                
                vscode.window.activeTextEditor?.insertSnippet(snippet);
            });
        } catch (err) {
            if (err instanceof Escape) return;
        }
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}