type Props = {
  heading: string;
  subHeading: string;
};

const Heading = ({ heading, subHeading }: Props) => {
  return (
    <div className="text-center">
      <h2 className="uppercase tracking-widest mb-4 text-gray-500 text-2xl sm:text-4xl">
        {heading}
      </h2>
      <h3 className="tracking-[3px] text-gray-500 text-sm text-center">
        {subHeading}
      </h3>
    </div>
  );
};

export default Heading;
