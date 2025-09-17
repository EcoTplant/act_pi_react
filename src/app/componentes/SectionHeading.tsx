type Props = {
  heading: string;
  subtitle?: string;
  rootClassName?: string;
};

export default function SectionHeading({ heading, subtitle, rootClassName }: Props) {
  return (
    <div className={rootClassName}>
      <h2>{heading}</h2>
      <p>{subtitle}</p>
    </div>
  );
}