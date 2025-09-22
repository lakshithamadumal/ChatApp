import { View } from "react-native";

interface Circle {
  width: number;
  height: number;
  borderRadius: number;
  fillColor: string;
  topValue?: number;
  leftValue?: number;
  rightValue?: number;
  bottomValue?: number;
}

export default function CircleShape(c: Circle) {
  return (
    <View
      style={{
        width: c.width,
        height: c.height,
        borderRadius: c.borderRadius,
        position: "absolute",
        ...(c.fillColor !== undefined && { backgroundColor: c.fillColor }),
        ...(c.topValue !== undefined && { top: c.topValue }),
        ...(c.leftValue !== undefined && { left: c.leftValue }),
        ...(c.rightValue !== undefined && { right: c.rightValue }),
        ...(c.bottomValue !== undefined && { bottom: c.bottomValue }),
      }}
    ></View>
  );
}
