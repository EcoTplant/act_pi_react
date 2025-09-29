type Props = {
  name: string;
  value?: string;
  imageSrc?: string;
  rootClassName?: string;
};

export default function ItemCard({ name, value, imageSrc, rootClassName }: Props) {
  return (
    <div className={rootClassName}>
      {imageSrc && <img src={imageSrc} alt={name} />}
      <h3>{name}</h3>
      {value && <p>{value}</p>}
    </div>
  );
}