import Logo from "@components/ui/logo";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import type { FC } from "react";

interface Props {
  className?: string;
  data: {
    widgetTitle?: string;
    lists: {
      id: string;
      path?: string;
      title: string;
      icon?: any;
      disabled?: boolean;
    }[];
    logo?: any;
    description?: string;
    isCompanyIntroduction?: boolean;
  };
  variant?: "contemporary";
}

const WidgetLink: FC<Props> = ({ className, data }) => {
  const { widgetTitle, lists } = data;
  const { logo, description } = data;
  const { t } = useTranslation("footer");

  return (
    <div
      className={`${className} ${data?.isCompanyIntroduction && "col-span-2"}`}
    >
      {!data?.isCompanyIntroduction ? (
        <>
          <h4 className="text-heading text-sm md:text-base xl:text-lg font-semibold mb-5 2xl:mb-6 3xl:mb-7">
            {t(`${widgetTitle}`)}
          </h4>
          <ul className="text-xs lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
            {lists.map((list) => (
              <li
                key={`widget-list--key${list.id}`}
                className="flex items-baseline"
              >
                {list.icon && (
                  <span className="me-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
                    {list.icon}
                  </span>
                )}
                {list?.disabled ? (
                  <span className="opacity-50 cursor-not-allowed hover:opacity-50 hover:cursor-not-allowed">
                    {t(`${list.title}`)}
                  </span>
                ) : (
                  <Link
                    href={list.path ? list.path : "#!"}
                    className="transition-colors duration-200 hover:text-black"
                  >
                    {t(`${list.title}`)}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="me-4 flex flex-col space-y-7 lg:space-y-7.5">
          <Logo className="" />
          <p className="text-sm font-normal text-[#1D1E1F] leading-6 max-w-[334px] ">
            {description}
          </p>
          <ul className="text-xs lg:text-sm text-body flex items-center space-x-3 lg:space-x-3.5">
            {lists.map((list) => (
              <li
                key={`widget-list--key${list.id}`}
                className="flex items-baseline"
              >
                {list.icon && (
                  <span className="me-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
                    {list.icon}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WidgetLink;
