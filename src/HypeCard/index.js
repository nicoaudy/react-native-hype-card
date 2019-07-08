import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles, {
  _shadowStyle,
  _imageStyle,
  _gradientColors,
  _outerContainer
} from "./style";
import LinearGradient from "react-native-linear-gradient";

const HypeCard = props => {
  const {
    end,
    start,
    title,
    width,
    style,
    height,
    subtitle,
    shadowColor,
    titleStyle,
    centerTitle,
    shadowStyle,
    borderRadius,
    subtitleStyle,
    centerSubtitle,
    outerContainer,
    innerContainer,
    gradientColors,
    leftComponent,
    rightComponent,
    centerTitleStyle,
    centerSubtitleStyle,
    ...rest
  } = props;

  return (
    <TouchableOpacity
      style={[style, shadowStyle || _shadowStyle(shadowColor)]}
      {...rest}
    >
      <LinearGradient
        start={start || { x: 0, y: 0 }}
        end={end || { x: 1, y: 0 }}
        colors={gradientColors || _gradientColors}
        style={outerContainer || _outerContainer(height, width, borderRadius)}
      >
        <View style={innerContainer || styles.innerContainer}>
          {leftComponent || null}
          <View style={styles.column}>
            <Text style={titleStyle || styles.titleStyle}>{title || null}</Text>
            <Text style={subtitleStyle || styles.subtitleStyle}>
              {subtitle || null}
            </Text>
          </View>

          <View style={[styles.column, styles.centerTextContainer]}>
            <Text style={centerTitleStyle || styles.centerTitleStyle}>
              {centerTitle || null}
            </Text>
            <Text style={centerSubtitleStyle || styles.centerSubtitleStyle}>
              {centerSubtitle || null}
            </Text>
          </View>
          <View style={[styles.column, styles.rightContainer]}>
            {rightComponent || null}
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default HypeCard;
