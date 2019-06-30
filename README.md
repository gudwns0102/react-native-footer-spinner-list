# react-native-footer-spinner-list

- react-native-footer-spinner-list shows footer spinner whenever `onEndReached` is triggered. By default, the spinner will be platform specific one created by `<ActivityIndicator />` in react-native. You can also change the spinner by assigning `ListFooterComponent` just like using `FlatList`. 

- react-native-footer-spinner-list won't expose the spinner if `onEndReached` is not provided or `onEndReached` is ended (both synchronous and asynchronous).

![Alt Text](https://media.giphy.com/media/ifdvQIOJPEyM3cfUEJ/giphy.gif)

![Alt Text](https://media.giphy.com/media/RG45xK6J47Qi8lPdqw/giphy.gif)

## props
| props                       | type              | required | explanation                                                                                                                                                                                         |
|-----------------------------|-------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| footerSpinnerStyle          | object, StyleProp | x        | This style prop is used for default `ActivityIndicator`. If you want to change `AcitivityIndicator` props, not style, use `ListFooterComponent` props in react-native-footer-spinner-list instead.  |
| footerSpinnerContainerStyle | object, StyleProp | x        | This style prop is used for container of default `ActivityIndicator`. For instance, if you want to change the height of footer spinner container, `footerSpinnerContainerStyle={{ height: 100 }}`   |
