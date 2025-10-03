import Image from "next/image";
import defaultIcon from "@/public/image/icon/man.svg";

const StatContainer = ({ index, title, value }) => {
  return (
    <div
      className={`relative h-34 space-y-1 rounded-lg p-3 shadow ${
        index < 4
          ? index % 2 === 0
            ? "bg-yellow"
            : "bg-gray"
          : index < 8
            ? index % 2 === 0
              ? "bg-gray"
              : "bg-yellow"
            : index < 12
              ? index % 3 === 2
                ? "bg-yellow"
                : "bg-gray"
              : index < 16
                ? index % 3 === 2
                  ? "bg-yellow"
                  : "bg-gray"
                : index < 20
                  ? index % 3 === 0
                    ? "bg-gray"
                    : "bg-yellow"
                  : index < 24
                    ? index % 3 === 1
                      ? "bg-yellow"
                      : "bg-gray"
                    : ""
      }`}
    >
      <h2 className="flex items-center gap-3">
        {/* <i className={`${icon} ri-2x font-extralight text-secondary`}></i> */}
        <Image src={defaultIcon} alt={title} width={30} height={30} />
        <span className="text-dark text-lg leading-5 font-medium">{title}</span>
      </h2>
      <p className="text-dark absolute bottom-4 left-1/2 -translate-x-1/2 transform text-[1.05rem] font-bold">
        {value}
      </p>
    </div>
  );
};

export default StatContainer;
