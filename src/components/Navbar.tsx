'use client'

import { useCallback } from 'react'
import {
  createStyles,
  Navbar as NavbarUI,
  getStylesRef,
  rem,
} from '@mantine/core'
import { IconLogout, Icon, IconHome, IconCalendar } from '@tabler/icons-react'
import { useAuthContext } from '@/providers/AuthProvider'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavbarLink = {
  link: string
  label: string
  icon: Icon
  pattern: RegExp
}

const useStyles = createStyles((theme) => ({
  navbar: {
    height: `calc(100vh - 4.375rem - 3.75rem)`,
    [theme.fn.smallerThan('md')]: {
      height: `calc(100vh - 3.75rem - 3.125rem)`,
    },
  },
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
      [`& .${getStylesRef('icon')}`]: {
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .color,
      },
    },
  },
}))

const data: NavbarLink[] = [
  { link: '/', label: 'Meus eventos', icon: IconCalendar, pattern: /\/$/ },
]

type NavbarProps = {
  isOpen: boolean
  onClick: () => void
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, onClick }) => {
  const { classes, cx } = useStyles()
  const { logout } = useAuthContext()
  const pathname = usePathname()

  const getLinkClassName = useCallback(
    (item: NavbarLink) => {
      return cx(classes.link, {
        [classes.linkActive]: item.pattern.test(pathname),
      })
    },
    [pathname]
  )

  const links = data.map((item: NavbarLink) => (
    <Link
      className={getLinkClassName(item)}
      href={item.link}
      key={item.label}
      onClick={onClick}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ))

  return (
    <NavbarUI
      width={{ sm: 300 }}
      p="md"
      hidden={!isOpen}
      className={classes.navbar}
    >
      <NavbarUI.Section grow>{links}</NavbarUI.Section>

      <NavbarUI.Section className={classes.footer}>
        <a href="#" className={classes.link} onClick={logout}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Sair</span>
        </a>
      </NavbarUI.Section>
    </NavbarUI>
  )
}

export default Navbar
