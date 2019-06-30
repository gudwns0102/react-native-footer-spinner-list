import React from "react";
import { StyleProp, ViewStyle, FlatListProps } from "react-native";

export interface FooterSpinnerListProps<ItemT> extends FlatListProps<ItemT> {
  footerSpinnerStyle?: StyleProp<ViewStyle>;
  footerSpinnerContainerStyle?: StyleProp<ViewStyle>;
}

interface FooterSpinnerListState {
  showFooterSpinner: boolean;
}

export default class FooterSpinnerList<ItemT> extends React.Component<
  FooterSpinnerListProps<ItemT>,
  FooterSpinnerListState
> {}
