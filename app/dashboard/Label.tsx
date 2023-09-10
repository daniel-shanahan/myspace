interface Props {
  htmlFor: string;
  text: string;
}

export default function Label({ htmlFor, text }: Props) {
  return (
    <label htmlFor={htmlFor} className="block text-lg mb-1">
      {text}
    </label>
  );
}
