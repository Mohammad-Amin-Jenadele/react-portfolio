import {
    Flex,
    Text,
    Heading,
    Avatar
} from '@chakra-ui/react';

import ProfileImage from './assets/Profile.jpg';
import { useTheme } from './Context/ThemeContext';

function LandingSection() {
    const { darkMode } = useTheme();

    return (
        <Flex
            as="section"
            id="about"
            aria-labelledby="landing-title"
            minH={{ base: '75vh', md: '80vh' }}
            w="100%"
            align="center"
            justify="center"
            boxSizing="border-box"
            px={{ base: 5, md: 6 }}
            py={{ base: 10, md: 12 }}
            textAlign="center"
            bg={darkMode ? '#031419' : '#EAF5F5'}
            color={darkMode ? '#EAF5F5' : '#031419'}
            transition="background-color 0.3s ease, color 0.3s ease"
        >
            {/* Main content */}
            <Flex
                direction="column"
                align="center"
                gap={{ base: 4, md: 5 }}
                w="100%"
                maxW="900px"
            >
                <Avatar.Root
                    w={{
                        base: '140px',
                        sm: '160px',
                        md: '180px',
                    }}
                    h={{
                        base: '140px',
                        sm: '160px',
                        md: '180px',
                    }}
                    shape="full"
                    overflow="hidden"
                    border="4px solid #24D9CC"
                    boxShadow={
                        darkMode
                            ? '0 10px 30px rgba(0, 0, 0, 0.35)'
                            : '0 10px 30px rgba(3, 20, 25, 0.15)'
                    }
                    mb={2}
                    flexShrink={0}
                >
                    <Avatar.Fallback name="Amin" />

                    <Avatar.Image
                        src={ProfileImage}
                        alt="Portrait of Amin"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </Avatar.Root>

                {/* Greeting */}
                <Text
                    as="p"
                    m={0}
                    fontSize={{ base: 'md', md: 'xl' }}
                    fontWeight="medium"
                    opacity={0.8}
                >
                    Hello, my name is Amin.
                </Text>

                {/* Main heading */}
                <Heading
                    as="h1"
                    id="landing-title"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap={2}
                    m={0}
                    fontSize={{
                        base: '2.2rem',
                        sm: '2.7rem',
                        md: '3.5rem',
                        lg: '4.5rem',
                    }}
                    fontWeight={750}
                    lineHeight={1.15}
                    letterSpacing="-0.03em"
                >
                    <Text as="span">
                        A Frontend Developer
                    </Text>

                    <Text
                        as="span"
                        color="#24D9CC"
                    >
                        Specialised in React
                    </Text>
                </Heading>
            </Flex>
        </Flex>
    );
}

export default LandingSection;
