interface Props {
  name: string;
  defaultValue: string;
  cols: number;
  rows: number;
}

export default function TextArea({ name, defaultValue, cols, rows }: Props) {
  return (
    <textarea
      name={name}
      defaultValue={defaultValue}
      cols={cols}
      rows={rows}
      className="border-2 border-gray-200 hover:border-gray-300 rounded-md p-1 block mb-5"
    />
  );
}
