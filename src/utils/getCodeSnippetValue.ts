import { unescape } from './html-entities';

export default function getCodeSnippetValue(codeSnippetHtml: string) {
  if (!codeSnippetHtml) return;
  const codeBlockRegExp = /^\s*(<pre.*?><code.*?>)([\s\S]*)(<\/code><\/pre>)\s*$/;
  const matches = codeSnippetHtml.match(codeBlockRegExp);
  if (!matches)
    throw new Error(`Shiki-highlighted code block HTML did not match expected format. HTML code:\n${codeSnippetHtml}`);
  const innerHtml = matches[2];
  const innerHtmlLines = innerHtml.split(/\r?\n/);
  const textHtmlLines = innerHtmlLines.map((highlightedCodeLine) => {
    const lineRegExp = /^(<span class=")(line.*?)(".*?>)(.*)(<\/span>)$/;
    const lineMatches = highlightedCodeLine.match(lineRegExp);
    if (!lineMatches) {
      throw new Error(`Shiki-highlighted code line HTML did not match expected format. HTML code:\n${highlightedCodeLine}`);
    }
    // Split line into inline tokens
		const tokenRegExp = /<span style="color: ?(#[0-9A-Fa-f]+)([^"]*)">(.*?)<\/span>/g;
    const tokensHtml = lineMatches[4];
    const tokenMatches = tokensHtml.matchAll(tokenRegExp);
    let textLine = ''
    for (const tokenMatch of tokenMatches) {
      const [,,, innerHtml] = tokenMatch
      const text = unescape(innerHtml)
      textLine +=text
    }
    return textLine
  });
  return textHtmlLines.join('\n')
}
