import './styles/Footer.scss';

const Footer: React.FC = () => {
    const currentYear: number = new Date().getFullYear();
    return (
        <footer>&copy; Luke Harby. {currentYear}</footer>
    );
};

export { Footer };