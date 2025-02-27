import {Box, Container, CssBaseline} from '@mui/material';
import NavBar from './NavBar';
import {Outlet} from 'react-router';

function App() {
    // RQ useEffect(() => {
    //     axios
    //         .get<Activity[]>('https://localhost:5001/api/activities')
    //         .then((response) => setActivities(response.data));
    // }, []);

    return (
        <Box sx={{bgColor: '#eeeeee', minHeight: '100vh'}}>
            <CssBaseline />
            <NavBar />
            <Container maxWidth='xl' sx={{mt: 3}}>
                <Outlet />
            </Container>
        </Box>
    );
}

export default App;
