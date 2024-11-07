import { Box, Typography, Card, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid2';

const skills = [
  { name: 'Assembly', image: 'images/assembly.png' },
  { name: 'Astro', image: 'images/astro.png' },
  { name: 'C', image: 'images/c.png' },
  { name: 'C++', image: 'images/cpp.png' },
  { name: 'C#', image: 'images/cs.png' },
  { name: 'CSS', image: 'images/css.png' },
  { name: 'Dart', image: 'images/dart.png' },
  { name: 'Excel', image: 'images/excel.png' },
  { name: 'Express', image: 'images/express.png' },
  { name: 'Flutter', image: 'images/flutter.png' },
  { name: 'Git', image: 'images/git.png' },
  { name: 'Github', image: 'images/github.png' },
  { name: 'HTML', image: 'images/html.png' },
  { name: 'Java', image: 'images/java.png' },
  { name: 'Javascript', image: 'images/js.png' },
  { name: 'Linux', image: 'images/linux.png' },
  { name: 'Next', image: 'images/next.png' },
  { name: 'Node', image: 'images/node.png' },
  { name: 'PostgreSQL', image: 'images/postgresql.png' },
  { name: 'Python', image: 'images/python.png' },
  { name: 'React', image: 'images/react.png' },
  { name: 'Rust', image: 'images/rust.png' },
  { name: 'SDL', image: 'images/sdl.png' },
  { name: 'Smalltalk', image: 'images/smalltalk.png' },
  { name: 'SQL', image: 'images/sql.png' },
  { name: 'Unity', image: 'images/unity.png' },
  { name: 'Windows', image: 'images/windows.png' },
];

const Skills = () => {
  return (
    <Box textAlign="center" my={8}
      sx={{
        backgroundColor: '#242d3c', 
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '64px 16px',
        overflow: 'hidden',
      }}>
        <Typography
        variant="h3"
        color="white"
        sx={{
          fontSize: { xs: '2.25rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
        }}
      >
        What have you learned?
      </Typography>
      <Typography
        variant="h6"
        color="white"
        sx={{
          fontSize: { xs: '1.25rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem' },
          marginTop: 2,
        }}
      >
        These are all the pokemons I have collected over this years
      </Typography>
      <Grid container spacing={2} justifyContent="center" marginTop={3}>
        {skills.map((skill, index) => (
          <Grid key={index} xs={6} sm={4} md={2}>
            <Card sx={{
              backgroundColor: '#1e2a38',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              flexGrow: 1,
              width: { xs: '80px', sm: '100px', md: '120px', lg: '180px' },
              height: { xs: '80px', sm: '100px', md: '120px' , lg: '180px'},
              transition: 'transform 0.3s, box-shadow 0.3s',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              },
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
                <Avatar src={skill.image} alt={skill.name} 
                  sx={{ 
                    width: { xs: '40px', sm: '50px', md: '60px', lg: '80px' },
                    height: { xs: '40px', sm: '50px', md: '60px', lg: '80px' },
                    mb: 1, borderRadius: 0 }} />
                <Typography variant="body2" color="white" sx={{ fontSize: { xs: '10px', sm: '12px', md: '14px', lg: '22px' } }}>
                  {skill.name}
                </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
