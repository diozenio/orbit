import { DynamicIcon, iconNames, IconName } from "lucide-react/dynamic";
import { ComponentProps } from "react";

type IconProps = Omit<ComponentProps<typeof DynamicIcon>, "name"> & {
  name: string;
};

function isValidIconName(name: string): boolean {
  return iconNames.includes(name as IconName);
}

export function Icon({ name, ...rest }: IconProps) {
  if (!isValidIconName(name)) {
    console.warn(`Invalid icon name: ${name}`);
    return <DynamicIcon name="alert-triangle" {...rest} />;
  }

  return <DynamicIcon name={name as IconName} {...rest} />;
}
