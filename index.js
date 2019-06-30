import React from "react";
import { FlatList, ActivityIndicator, View, StyleSheet } from "react-native";

class FooterSpinnerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFooterSpinner: false
    };
  }

  render() {
    const {
      innerRef,
      ListFooterComponent,
      onEndReached,
      footerSpinnerStyle,
      footerSpinnerContainerStyle,
      ...props
    } = this.props;
    const { showFooterSpinner } = this.state;

    return (
      <FlatList
        {...props}
        ref={innerRef}
        ListFooterComponent={showFooterSpinner ? this.footerSpinner : null}
        onEndReached={this.hookEndReached}
      />
    );
  }

  hookEndReached = async info => {
    const { onEndReached } = this.props;
    const { showFooterSpinner } = this.state;
    if (!onEndReached) {
      return;
    } else if (showFooterSpinner) {
      onEndReached(info);
      return;
    }

    try {
      this.setState({ showFooterSpinner: true });
      await onEndReached(info);
    } finally {
      this.setState({ showFooterSpinner: false });
    }
  };

  get footerSpinner() {
    const {
      footerSpinnerStyle,
      footerSpinnerContainerStyle,
      ListFooterComponent
    } = this.props;

    const FooterComponent = ListFooterComponent || (
      <View
        style={[
          styles.footerSpinnerContainerStyle,
          footerSpinnerContainerStyle
        ]}
      >
        <ActivityIndicator style={footerSpinnerStyle} />
      </View>
    );

    return FooterComponent;
  }
}

const styles = StyleSheet.create({
  footerSpinnerContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  }
});

export default React.forwardRef(({ innerRef, ...props }, ref) => (
  <FooterSpinnerList {...props} innerRef={ref} />
));
