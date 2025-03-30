import type { Config } from 'tailwindcss';
import { CustomThemeConfig } from 'tailwindcss/types/config';

const colors: CustomThemeConfig['colors'] = {
    je: {
        red: 'hsl(var(--je-red))',
    },
    box: {
        background: 'hsl(var(--box-background))',
        title: 'hsl(var(--box-title))',
    },
    checkbox: {
        border: 'hsl(var(--checkbox-border))',
        background: 'hsl(var(--checkbox-background))',
    },
    link: 'hsl(var(--link))',
    border: 'hsl(var(--border))',
    input: 'hsl(var(--input))',
    ring: 'hsl(var(--ring))',
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
    },
    secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
    },
    destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
    },
    muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
    },
    accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
    },
    popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
    },
    card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
    },
    select: {
        navbar: 'var(--select-navbar)',
    },
    disabled: {
        DEFAULT: 'hsl(var(--disabled))',
        foreground: 'hsl(var(--disabled-foreground))',
    },
    mri: {
        'header-bg': '#F7F7F7',
        'body-bg': '#FFFFFF',
        title: '#222222',
        headers: '#444444',
        separator: '#EAEAEA',
        p: '#757575',
        a: '#0070f3',
        emphasis: '#444444',
        'button-bg': '#E54540',
        'button-fg': '#FFFFFF',
    },
    sidebar: {
        DEFAULT: 'hsl(var(--sidebar-background))',
        foreground: 'hsl(var(--sidebar-foreground))',
        primary: 'hsl(var(--sidebar-primary))',
        'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
        accent: 'hsl(var(--sidebar-accent))',
        'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
        border: 'hsl(var(--sidebar-border))',
        ring: 'hsl(var(--sidebar-ring))',
    },
};

const keyframes: CustomThemeConfig['keyframes'] = {
    'accordion-down': {
        from: {
            height: '0',
        },
        to: {
            height: 'var(--radix-accordion-content-height)',
        },
    },
    'accordion-up': {
        from: {
            height: 'var(--radix-accordion-content-height)',
        },
        to: {
            height: '0',
        },
    },
    wiggle: {
        '0%, 100%': {
            transform: 'translate(0px, 0px) scale(0.5)',
        },
        '25%': {
            transform: 'translate(100px, 20px) scale(1)',
        },
        '50%': {
            transform: 'translate(100px, -20px) scale(0.2)',
        },
        '75%': {
            transform: 'translate(-100px, 20px) scale(1)',
        },
    },
    largewiggle: {
        '0%, 100%': {
            transform: 'translate(0px, 0px) scale(1)',
        },
        '25%': {
            transform: 'translate(-100px, -20px) scale(0.5)',
        },
        '50%': {
            transform: 'translate(-100px, 20px) scale(0.8)',
        },
        '75%': {
            transform: 'translate(100px, 20px) scale(0.2)',
        },
    },
    pingonce: {
        '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
        },
    },
    'fade-left': {
        '0%': {
            opacity: '0',
            transform: 'translateX(2rem)',
        },
        '100%': {
            opacity: '1',
            transform: 'translateX(0)',
        },
    },
};

export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        borderRadius: {
            DEFAULT: 'var(--radius)',
            sm: '0.125rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
            full: '9999px',
        },
        extend: {
            colors,
            spacing: {
                main: '20px',
                '1.5main': '30px',
                '2main': '40px',
                remy: '5rem',
            },
            keyframes,
            animation: {
                'fade-left': 'fade-left 0.2s ease',
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'float-around': 'wiggle 20s ease-in-out infinite',
                'float-around-2': 'largewiggle 20s ease-in-out infinite',
                'ping-once': 'pingonce 1s cubic-bezier(0, 0, 0.2, 1) forwards',
            },
            fontFamily: {
                mri: ['arial', 'helvetica neue', 'helvetica', 'sans-serif'],
            },
            screens: {
                'small-mri': '410px',
            },
        },
    },
    plugins: [require('tailwindcss-animate'), require('@tailwindcss/container-queries')],
} satisfies Config;
