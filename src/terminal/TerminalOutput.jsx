// TerminalOutput.jsx
// Why this file exists:
// This is the only place that knows how each output `type` (success, error,
// table, code, etc — see utils/terminalFormatter.js) should look. Commands
// never import styling; they just produce typed data, and this component is
// the single render target for that data.

import Prompt from './components/Prompt';
import EmptyState from './components/EmptyState';

function EchoLine({ text }) {
  return (
    // <div className="flex gap-1">
    <div className="mb-1 flex items-center gap-2">
      <Prompt />
      <span style={{ color: 'var(--term-text)' }}>{text}</span>
    </div>
  );
}

function TextLine({ text, colorVar }) {
  return (
    // <p style={{ color: `var(${colorVar})` }} className="whitespace-pre-wrap leading-relaxed">
    <p
  className="whitespace-pre-wrap leading-7"
  style={{
    color: `var(${colorVar})`,
  }}
>  
    {text}
    </p>
  );
}

function HeadingLine({ text }) {
  return (
    <p
      style={{
  color: "var(--term-text-bright)",
  borderColor: "var(--term-border)",
}}
      className="mt-6 mb-3 border-b pb-2 text-sm font-bold uppercase tracking-widest"
    >
      {text}
    </p>
  );
}

function CodeBlock({ code }) {
  return (
    <pre
      className="my-3 overflow-x-auto rounded-lg p-4 text-xs leading-6"
      style={{ background: 'var(--term-panel)', border: '1px solid var(--term-border)' }}
    >
      <code style={{ color: 'var(--term-text)' }}>{code}</code>
    </pre>
  );
}

function LinkLine({ label, href }) {
  return (
    <a
      href={href}
      onClick={(e) => e.preventDefault()}
      className="inline-block underline decoration-dotted underline-offset-2 hover:opacity-80"
      style={{ color: 'var(--term-link)' }}
    >
      → {label}
    </a>
  );
}

function TableBlock({ columns, rows }) {
  return (
    <div className="my-1 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="border-b px-3 py-2 text-left font-medium"
                style={{ borderColor: 'var(--term-border)', color: 'var(--term-text-dim)' }}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                // eslint-disable-next-line react/no-array-index-key
                <td key={cellIndex} className="px-3 py-2" style={{ color: 'var(--term-text)' }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function OutputBlock({ block }) {
  switch (block.type) {
    case 'echo':
      return <EchoLine text={block.payload.text} />;
    case "success":
  return (
    <TextLine
      text={`✓ ${block.payload.text}`}
      colorVar="--term-success"
    />
  );
    case "error":
  return (
    <TextLine
      text={`✗ ${block.payload.text}`}
      colorVar="--term-error"
    />
  );
    case "warning":
  return (
    <TextLine
      text={`⚠ ${block.payload.text}`}
      colorVar="--term-warning"
    />
  );
    case "info":
  return (
    <TextLine
      text={`ℹ ${block.payload.text}`}
      colorVar="--term-info"
    />
  );
    case 'plain':
      return <TextLine text={block.payload.text} colorVar="--term-text" />;
    case 'heading':
      return <HeadingLine text={block.payload.text} />;
    case 'code':
      return <CodeBlock code={block.payload.code} />;
    case 'link':
      return <LinkLine label={block.payload.label} href={block.payload.href} />;
    case 'table':
      return <TableBlock columns={block.payload.columns} rows={block.payload.rows} />;
    default:
      return null;
  }
}

export default function TerminalOutput({ blocks }) {
  if (blocks.length === 0) return <EmptyState />;

  return (
    <div className="flex flex-col gap-3 text-[15px] leading-8">
      {blocks.map((block) => (
        <div key={block.id} className="kv-output-block">
          <OutputBlock block={block} />
        </div>
      ))}
    </div>
  );
}
