export type ButtonProps = {
    text: string;
    onClick?: () => void;
    link?: string;
};

export interface NavbarProps {
    logoSrc?: string;
    navLinks?: { name: string; path: string }[];
    primaryColor?: string;
    secondaryColor?: string;
}

export interface NavLinkProps {
    link: {
        name: string;
        path: string;
    };
    primaryColor: string;
    secondaryColor: string;
}

export interface MenuItem {
    label: string;
    href: string;
}

export interface SocialLinks {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
}

export interface MobileNavbarProps {
    logoSrc?: string;
    menuItems?: MenuItem[];
    primaryColor?: string;
    backgroundColor?: string;
    buttonText?: string;
    buttonLink?: string;
    socialLinks?: SocialLinks;
}

export interface FilledButtonProps extends ButtonProps {
    link?: string;
    bgColor?: string;
    hoverColor?: string;
  }