import { useTheme, Button, Link } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { GithubIcon } from '../icons/github';
import { HeartIcon } from '../icons/hearth';
import { SunIcon } from '../icons/sun';
import { MoonIcon } from '../icons/moon';

export const SwitchThemebtn = () => {
  const { type } = useTheme();
  const { setTheme } = useNextTheme();
  const Icon = type === 'dark' ? SunIcon : MoonIcon;
  return (
    <Button
      shadow
      size="md"
      color="success"
      icon={<Icon fill="currentColor" filled />}
      onClick={() =>
        setTheme(type === 'dark' ? 'light' : 'dark'
      )}
      >
      Switch Themes
    </Button>
  );
}

export const StarBtn = () => {
    return (
      <Link href="https://github.com/TTENSHII/NextJs-NextUi-Starter" target="_blank">
        <Button
          shadow
          size="md"
          color="error"
          icon={<HeartIcon fill="currentColor" filled />}
        >
        Star this template
        </Button>
      </Link>
    );
}

export const GithubBtn = () => {
    return (
      <Link href="https://github.com/TTENSHII" target="_blank">
        <Button
          shadow
          size="md"
          color="primary"
          icon={<GithubIcon fill="currentColor" filled />}
        >
          Go to Github
        </Button>
      </Link>
    );
} 
