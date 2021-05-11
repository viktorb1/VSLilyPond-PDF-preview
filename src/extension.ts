import * as vscode from "vscode"
import { PdfCustomProvider } from "./pdf-provider"

export const activate = (context: vscode.ExtensionContext) => {
  const extensionRoot = vscode.Uri.file(context.extensionPath)
  // Register our custom editor provider
  const provider = new PdfCustomProvider(extensionRoot)
  context.subscriptions.push(
    vscode.window.registerCustomEditorProvider(
      PdfCustomProvider.viewType,
      provider,
      {
        webviewOptions: {
          enableFindWidget: false, // default
          retainContextWhenHidden: true,
        },
      }
    )
  )
}

export const deactivate = () => {}
