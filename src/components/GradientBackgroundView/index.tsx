import { FC } from "react";
import { View } from "react-native";
import Svg, {
  LinearGradient,
  RadialGradient,
  Stop,
  Rect,
} from "react-native-svg";

type GradientBackgroundViewProps = {
  type: "radial" | "linear";
  colors: string[];
  children: React.ReactNode;
};

export const GradientBackgroundView: FC<GradientBackgroundViewProps> = ({
  type,
  colors,
  children,
}) => {
  const renderGradient = () => {
    if (type === "linear") {
      return (
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          {colors.map((color, index) => (
            <Stop
              key={index}
              offset={`${index * (100 / (colors.length - 1))}%`}
              stopColor={color}
            />
          ))}
        </LinearGradient>
      );
    } else if (type === "radial") {
      return (
        <RadialGradient id="grad" cx="50%" cy="50%" r="50%">
          {colors.map((color, index) => (
            <Stop
              key={index}
              offset={`${index * (100 / (colors.length - 1))}%`}
              stopColor={color}
            />
          ))}
        </RadialGradient>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Svg height="100%" width="100%" style={{ position: "absolute" }}>
        {renderGradient()}
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      {children}
    </View>
  );
};
