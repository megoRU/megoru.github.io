import { Box } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import markdownContent from '../blog/index.md';

const Home = () => {
    return (
        <Box>
            <ReactMarkdown
                children={markdownContent}
                components={ChakraUIRenderer()} // Используйте эту строку только при использовании Chakra UI
                skipHtml // Пропустите это, если не используете Chakra UI
            />
        </Box>
    );
};

export default Home;