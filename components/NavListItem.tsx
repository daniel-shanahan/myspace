interface Props {
  children: React.ReactNode;
}

export default function NavListItem({ children }: Props) {
  return <li className="h-[70px] flex items-center p-1">{children}</li>;
}
