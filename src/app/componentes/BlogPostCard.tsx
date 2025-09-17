type Props = {
  title?: string;
  newProp?: string;
  imageSrc?: string;
  subtitle?: string;
  rootClassName?: string;
};


export default function BlogPostCard({ title, newProp, imageSrc, subtitle, rootClassName }: Props) {
  return (
    <div className={rootClassName}>
      {imageSrc && <img src={imageSrc} alt={title || newProp} />}
      {title && <h3>{title}</h3>}
      {newProp && <p>{newProp}</p>}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}