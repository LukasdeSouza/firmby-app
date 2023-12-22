import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    padding: 12,
    minWidth: 125,
    width: '100%',
    borderRadius: 4
  },
  defaultPressable: {
    backgroundColor: '#06b220',
  },
  defaultPressableText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600'
  },
  outlinedPressable: {
    backgroundColor: '#FFF',
    borderWidth: 0.3,
  },
  outlinedPressableText: {
    color: "#555",
    fontSize: 12,
    fontWeight: '600'
  },
  link: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0ba1f8'
  },
  copyright: {
    marginTop: 16,
    fontSize: 12,
    fontWeight: '600',
    fontStyle: 'italic',
    color: "#CCC"
  },
  pageTitle: {
    fontSize: 20,
    padding: 8,
    fontWeight: '600',
    textAlign:'center'
  },
  fontSemiBold: {
    fontWeight: '600'
  },
  fontBold: {
    fontWeight: '700'
  }
})