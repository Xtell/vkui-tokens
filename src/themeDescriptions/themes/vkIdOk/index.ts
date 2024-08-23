import { ThemeVkIdOkDescription } from '@/interfaces/themes/vkIdOk';
import { ThemeVkIdOkDarkDescription } from '@/interfaces/themes/vkIdOkDark';
import { darkTheme, lightTheme } from '@/themeDescriptions/base/vk';

export const vkIdOkTheme: ThemeVkIdOkDescription = {
	...lightTheme,
	themeName: 'vkIdOk',
	themeNameBase: 'vkIdOk',
	colors: {
		...lightTheme.colors,
		colorTextAccent: '#EE8208',
		colorTextAccentThemed: '#EE8208',
		colorBackgroundAccent: {
			normal: '#EE8208',
			hover: '#E57B04',
			active: '#D87402',
		},
		colorBackgroundAccentThemed: {
			normal: '#EE8208',
			hover: '#E57B04',
			active: '#D87402',
		},
		colorTextLink: '#6D7885',
		colorTextLinkThemed: '#6D7885',
		colorTextLinkTint: '#818C99',
		colorTextLinkVisited: '#6D7885',
		colorIconAccent: '#EE8208',
		colorIconAccentThemed: '#818C99',
		colorBackgroundAccentThemedAlpha: 'rgba(238, 130, 8, 0.2)',
		colorBackgroundAccentTint: '#F38910',
		colorBackgroundAccentAlternative: '#EE8208',
		colorFieldBackground: '#FFFFFF',
		colorStrokeAccent: '#BEBFC1',
		colorStrokeAccentThemed: '#BEBFC1',
		colorAccentOrange: '#EE8208',
	},
};

export const vkIdOkThemeDark: ThemeVkIdOkDarkDescription = {
	...darkTheme,
	themeName: 'vkIdOkDark',
	themeNameBase: 'vkIdOk',
	colors: {
		...darkTheme.colors,
		colorTextAccent: '#EE8208',
		colorTextAccentThemed: '#EBEDF0',
		colorBackgroundAccent: {
			normal: '#EE8208',
			hover: '#F38910',
			active: '#F58C15',
		},
		colorBackgroundAccentThemed: {
			normal: '#FFFFFF',
			hover: '#EBEDF0',
			active: '#D7D8DB',
		},
		colorTextLink: '#969A9F',
		colorTextLinkThemed: '#FFFFFF',
		colorTextLinkTint: '#76787A',
		colorTextLinkVisited: '#969A9F',
		colorIconAccent: '#EE8208',
		colorIconAccentThemed: '#FFFFFF',
		colorBackgroundAccentThemedAlpha: 'rgba(255, 255, 255, 0.2)',
		colorBackgroundAccentTint: '#F38910',
		colorBackgroundAccentAlternative: '#F38910',
		colorFieldBackground: '#19191A',
		colorStrokeAccent: '#505253',
		colorStrokeAccentThemed: '#FFFFFF',
		colorAccentOrange: '#EE8208',
	},
};