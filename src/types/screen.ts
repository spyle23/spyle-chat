import { ParamListBase, RouteProp } from "@react-navigation/native";

export type IBaseScreen<T extends ParamListBase = ParamListBase> = {
  route: RouteProp<T, keyof T>;
  navigation: any;
};
