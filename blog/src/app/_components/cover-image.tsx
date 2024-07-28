import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  code: string;
};

const CoverImage = ({ code }: Props) => {
  return (
    <div className="sm:mx-0">
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CoverImage;
