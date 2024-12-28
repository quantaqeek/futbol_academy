import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#e6f2ff" },
          100: { value: "#c1e8ff" },
          200: { value: "#7da0c4" },
          300: { value: "#99caff" },
          400: { value: "#66b2ff" },
          500: { value: "#3399ff" },
          600: { value: "#0073e6" },
          700: { value: "#004db3" },
          800: { value: "#002966" },
          900: { value: "#001a33" },
        },
        primary: {
          50: { value: "" },
		  100: { value: "#c1e8ff" },
          200: { value: "#7da0c4" },
		  300: { value: "#7da0c4" },
          400: { value: "#b3d6f9" },
		  600: { value: "#0371bc" },
          700: { value: "0a162a" },
          800: { value: "#223a59" },
          900: { value: "#0d0c12" },
        },
        secondary: {
          50: { value: "#f7fbfd" },
          100: { value: "#deebf8" },
          200: { value: "#bedaf3" },
          300: { value: "#c4c7f2" },
		  400: { value: "#97d4f1" },
		  500: { value: "#5b7cab" },
          600: { value: "#344d75" },
          700: { value: "#1a2d4c" },
          800: { value: "#0a162a" },
          900: { value: "#01030b" },
        },
        tertiary: {
			50: { value: "#f7fbfd" },
			100: { value: "d8e7ee" },
			200: { value: "#a3aaa6" },
			300: { value: "#97d4f1" },
			400: { value: "#128dbb" },
			500: { value: "#27a9df" },
			600: { value: "#0371bc" },
			700: { value: "#232b33" },
			800: { value: "#030812" },
			900: { value: "#010101" },
        },
		fancy: {
			50: { value: "#f7fbfd" },
			100: { value: "#ffe0e6" },
			200: { value: "#fff785" },
			300: { value: "#cffbf6" },
			400: { value: "#abbbe5" },
			500: { value: "#27a9df" },
			800: { value: "#0371bc" },
		}
      }
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "{colors.brand.100}" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.200}" },
          subtle: { value: "{colors.brand.300}" },
          emphasized: { value: "{colors.brand.400}" },
          focusRing: { value: "{colors.brand.600}" },
        },
        background: {
          default: {
            value: "{colors.brand.50}",
            _dark: { value: "{colors.brand.900}" },
          },
        },
        text: {
          primary: {
            value: "{colors.brand.700}",
            _dark: { value: "{colors.brand.100}" },
          },
          muted: {
            value: "{colors.brand.500}",
            _dark: { value: "{colors.brand.200}" },
          },
        },
      },
    },
	
  },
});

export const system = createSystem(defaultConfig, config);
