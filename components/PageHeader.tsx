interface Props {
  title: string;
}

export default function PageHeader({ title }: Props) {
  return <h1 className="text-4xl font-semibold text-center mb-6">{title}</h1>;
}
