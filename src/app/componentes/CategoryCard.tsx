type Props = {
  name: string;
  text?: React.ReactNode;
  subtitle?: string;
  categoryImg?: string;
  rootClassName?: string;
};
export default function CategoryCard({ name, text, subtitle, categoryImg, rootClassName }: Props) {
  return (
    <div className={rootClassName}>
      {name && <h3>{name}</h3>}
      {text && <div>{text}</div>}
      {subtitle && <p>{subtitle}</p>}
      {categoryImg && <img src={categoryImg} alt={name} />}
    </div>
  );
}