
import { Dimensions } from "react-native";


/**
 * screen's width
 */
export const screenWidth = Dimensions.get("window").width;
/**
 * screen's height
 */
export const screenHeight = Dimensions.get("window").height;

/**
 * px => dp
 * @param {Number} elePx  
 */
export const pxToDp=(elePx)=>screenWidth * elePx / 375;