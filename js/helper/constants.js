import { h } from 'preact';
import { Linkedin, Github } from 'preact-feather';

export const GRID_SQUARE_WIDTH = 40;
export const GRID_SQUARE_HEIGHT = 40;
export const GRID_SQUARE_PADDING = 2;

export const THEME_COLORS = ["#4357AD", "#48A9A6", "#E4DFDA", "#D4B483", "#C1666B"];
export const DEFAULT_COLOR = "#FFFFFF";
export const NAME_CARD_COORD = [-3, -1];
export const LINK_COORDS = [[-2, 2], [1, 2]];
export const LINK_COLORS = ["#0E76A8", "#211F1F"];
export const LINK_URLS = ["https://www.linkedin.com/in/hongjustin/", "https://github.com/jjhong922"];

export const renderLinkedin = () => {return <Linkedin size={32}/>};
export const renderGithub = () => {return <Github size={32}/>};
export const LINK_ICONS = [renderLinkedin, renderGithub];
