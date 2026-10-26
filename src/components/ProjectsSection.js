import { useTheme } from './Context/ThemeContext';

import {
    Flex,
    Image,
    Heading,
    Card,
    Text,
    Grid
} from '@chakra-ui/react';

const projects = [
    {
        title: 'Deep Learning',
        description: 'Developing deep learning models.',
        imageSrc: 'https://cdn.thenewstack.io/media/2025/04/46d93785-nodes.jpg',
    },
    {
        title: 'Computer Vision',
        description: 'Object detection and image segmentation.',
        imageSrc: 'https://miro.medium.com/0%2AsYQPW1UDbUYCvvdg.jpeg',
    },
    {
        title: 'AquaSmart',
        description: 'AI-powered fish monitoring and measurement.',
        imageSrc: 'https://www.adasasystems.com/files/adasa/images/solutions/aquaculture/fish-farm-water-quality-management/fish_farm_water_quality_management_header.jpg',
    },
    {
        title: 'React Development',
        description: 'Building responsive interfaces with React.',
        imageSrc: 'https://images.unsplash.com/photo-1756830231350-3b501f63c5c1?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=3000',
    },
];

export default function ProjectSection() {
    const { darkMode } = useTheme();

    return (
        <Flex
            as="section"
            id="projects"
            aria-labelledby="project-section"
            direction="column"
            align="center"
            gap={8}
            w="100%"
            minH={{ base: '75vh', md: '80vh' }}
            boxSizing="border-box"
            px={{ base: 4, md: 12 }}
            py={{ base: 10, md: 12 }}
            bg={darkMode ? '#031419' : '#EAF5F5'}
            color={darkMode ? '#EAF5F5' : '#031419'}
            transition="background-color 0.3s ease, color 0.3s ease"
        >
            {/* Heading at the top */}
            <Heading
                as="h2"
                id="project-section"
                w="100%"
                maxW="1200px"
                textAlign="left"
                fontSize={{
                    base: '1.8rem',
                    sm: '2.2rem',
                    md: '2.8rem',
                    lg: '3rem',
                }}
            >
                Featured Projects
            </Heading>

            <Grid
                templateColumns={{
                    base: '1fr',
                    md: 'repeat(2, minmax(0, 1fr))',
                }}
                gap={8}
                w="100%"
                maxW="1200px"
            >
                {projects.map((project) => (
                    <Card.Root
                        key={project.title}
                        w="100%"
                        minH="400px"
                        overflow="hidden"
                        bg={darkMode ? '#082229' : '#FFFFFF'}
                        color={darkMode ? '#EAF5F5' : '#031419'}
                        border="1px solid"
                        borderColor={darkMode ? '#183940' : '#C7DADA'}
                        borderRadius="xl"
                        boxShadow="md"
                        transition="transform 0.2s ease"
                        _hover={{ transform: 'translateY(-4px)' }}
                    >
                        <Image
                            src={project.imageSrc}
                            alt={project.title}
                            w="100%"
                            h="240px"
                            objectFit="cover"
                        />

                        <Card.Body p={6}>
                            <Heading size="lg" mb={3}>
                                {project.title}
                            </Heading>

                            <Text fontSize="md" lineHeight="1.7">
                                {project.description}
                            </Text>
                        </Card.Body>
                    </Card.Root>
                ))}
            </Grid>
        </Flex>
    );
}