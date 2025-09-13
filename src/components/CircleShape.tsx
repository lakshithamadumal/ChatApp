import { View } from "react-native";

interface Circle {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
  topValue?: number;
  leftValue?: number;
  rightValue?: number;
  bottomValue?: number;
}

export default function CircleShape({
  width,
  height,
  borderRadius,
  backgroundColor,
  topValue,
  leftValue,
  rightValue,
  bottomValue,
}: Circle) {
  return (
    <View
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        position: "absolute",
        ...(topValue !== undefined && { top: topValue }),
        ...(leftValue !== undefined && { left: leftValue }),
        ...(rightValue !== undefined && { right: rightValue }),
        ...(bottomValue !== undefined && { bottom: bottomValue }),
      }}
    ></View>
  );
}
