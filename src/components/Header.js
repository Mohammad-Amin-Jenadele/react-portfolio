
import {
    Button,
    Flex,
    HStack,
    Image,
    Link,
} from '@chakra-ui/react';

import EmailLogo from './assets/EmailLogo.svg';
import GithubLogo from './assets/GithubLogo.svg';
import LinkedInLogo from './assets/LinkedInLogo.svg';
import { useTheme } from './Context/ThemeContext';

function Header() {
    const { darkMode, toggleDarkMode } = useTheme();

    const headerBackground = darkMode ? '#061B21' : '#EAF5F5';
    const headerColor = darkMode ? '#EAF5F5' : '#031419';
    const borderColor = darkMode ? '#183940' : '#C7DADA';

    const socialIconFilter = darkMode
        ? 'brightness(0) invert(1)'
        : 'none';

    const navLinkProps = {
        variant: 'plain',
        color: 'inherit',
        fontSize: { base: 'sm', md: 'md' },
        fontWeight: 'medium',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        transition: 'color 0.2s ease',
        _hover: {
            color: '#24D9CC',
        },
    };

    return (
        <Flex
            as="header"
            position="sticky"
            top="0"
            zIndex="1000"
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            gap={{ base: 4, md: 0 }}
            w="100%"
            boxSizing="border-box"
            px={{ base: 4, md: 8 }}
            py={4}
            bg={headerBackground}
            color={headerColor}
            borderBottom="1px solid"
            borderColor={borderColor}
            transition="background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease"
        >
            {/* Social media links */}
            <HStack gap={{ base: 4, md: 5 }} flexShrink={0}>
                <Link
                    href="mailto:aminmobin1920@gmail.com?subject=Hello&body=I%20would%20like%20to%20contact%20you."
                    aria-label="Send me an email"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    textDecoration="none"
                    _hover={{ opacity: 0.75 }}
                >
                    <Image
                        src={EmailLogo}
                        alt="Email"
                        boxSize="28px"
                        objectFit="contain"
                        filter={socialIconFilter}
                        transition="filter 0.3s ease"
                    />
                </Link>

                <Link
                    href="https://github.com/Mohammad-Amin-Jenadele"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    textDecoration="none"
                    _hover={{ opacity: 0.75 }}
                >
                    <Image
                        src={GithubLogo}
                        alt="GitHub"
                        boxSize="28px"
                        objectFit="contain"
                        filter={socialIconFilter}
                        transition="filter 0.3s ease"
                    />
                </Link>

                <Link
                    href="https://www.linkedin.com/in/mohammad-amin-jenadele-a64126397/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    textDecoration="none"
                    _hover={{ opacity: 0.75 }}
                >
                    <Image
                        src={LinkedInLogo}
                        alt="LinkedIn"
                        boxSize="28px"
                        objectFit="contain"
                        filter={socialIconFilter}
                        transition="filter 0.3s ease"
                    />
                </Link>
            </HStack>

            {/* Main navigation */}
            <Flex
                as="nav"
                aria-label="Main navigation"
                align="center"
                justify={{ base: 'center', md: 'flex-end' }}
                wrap="wrap"
                gap={{ base: 3, sm: 4, md: 7 }}
                w={{ base: '100%', md: 'auto' }}
            >
                <Link href="#about" {...navLinkProps}>
                    About
                </Link>

                <Link href="#projects" {...navLinkProps}>
                    Projects
                </Link>


                <Link href="#contact" {...navLinkProps}>
                    Contact
                </Link>

                <Button
                    type="button"
                    variant="ghost"
                    aria-label={
                        darkMode
                            ? 'Switch to light mode'
                            : 'Switch to dark mode'
                    }
                    title={darkMode ? 'Light mode' : 'Dark mode'}
                    onClick={toggleDarkMode}
                    bg={darkMode ? '#082229' : '#D8EEEE'}
                    color="inherit"
                    border="1px solid"
                    borderColor={darkMode ? '#24454C' : '#C7DADA'}
                    rounded="md"
                    minW="42px"
                    h="42px"
                    px={2}
                    fontSize="xl"
                    lineHeight="1"
                    _hover={{
                        bg: darkMode ? '#10333B' : '#C7E5E5',
                    }}
                    transition="background-color 0.3s ease, border-color 0.3s ease"
                >
                    {darkMode ? '☀️' : '🌙'}
                </Button>
            </Flex>
        </Flex>
    );
}

export default Header;
