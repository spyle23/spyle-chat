import { FC } from "react";
import {
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  Svg,
} from "react-native-svg";
import { MaterialIcons } from "@expo/vector-icons";
import { IconProps } from "react-native-vector-icons/Icon";

type CustomIconProps = {
  type: "linear" | "radial";
  colors: string[];
} & IconProps;

/**
 * Use this component for custom icon color with radial or grandient color
 * @example
 * <CustomIconProps name="add" colors={["#fff", "#000"]} type="linear" />
 * @returns
 */
export const CustomIcon: FC<CustomIconProps> = ({
  colors,
  type,
  size,
  name,
  ...props
}) => {
  console.log(colors);
  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ position: "absolute", zIndex: -1 }}
    >
      <Defs>
        {type === "linear" ? (
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {colors.map((color, index) => (
              <Stop
                key={index}
                offset={`${(index * 100) / (colors.length - 1)}%`}
                stopColor={color}
              />
            ))}
          </LinearGradient>
        ) : (
          <RadialGradient
            id="radial"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            {colors.map((color, index) => (
              <Stop
                key={index}
                offset={`${(index * 100) / (colors.length - 1)}%`}
                stopColor={color}
              />
            ))}
          </RadialGradient>
        )}
      </Defs>
      <MaterialIcons
        {...props}
        name={name as any}
        size={size}
        color={type === "linear" ? "url(#gradient)" : "url(#radial)"}
      />
    </Svg>
  );
};
