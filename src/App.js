import './App.css';
//import { Routes, Route, NavLink } from 'react-router-dom';
import {
    ChakraProvider,
    defaultSystem,
} from '@chakra-ui/react';

import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectSection from './components/ProjectsSection';
import ContactSection from './components/ContactMe'

import {
    ThemeProvider,
    useTheme,
} from './components/Context/ThemeContext';

function AppContent() {
    const { darkMode } = useTheme();

    return (
        <div className={`app ${darkMode ? 'dark' : 'light'}`}>
            <Header />
            <LandingSection />
            <ProjectSection />
            <ContactSection />
        </div>
    );
}

function App() {
    return (
        <ChakraProvider value={defaultSystem}>
            <ThemeProvider>
                <AppContent />
            </ThemeProvider>
        </ChakraProvider>
    );
}

export default App;