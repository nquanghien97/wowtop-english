interface StarIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

function StarIcon(props: StarIconProps) {
  const {
    color,
    ...rest
  } = props;
  return (
    <svg {...rest} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
  );
}

export default StarIcon;