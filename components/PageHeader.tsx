interface Props {
  title: string;
}

export default function PageHeader({ title }: Props) {
  return <h1 className="text-4xl font-semibold">{title}</h1>;
}
