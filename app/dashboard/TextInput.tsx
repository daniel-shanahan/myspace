interface Props {
  name: string;
  defaultValue: string;
}

export default function TextInput({ name, defaultValue }: Props) {
  return (
    <input
      type="text"
      name={name}
      defaultValue={defaultValue}
      className="border-2 border-gray-200 hover:border-gray-300 rounded-md p-1 block mb-5"
    />
  );
}
