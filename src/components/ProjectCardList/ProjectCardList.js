import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import project_list from '../../project-list';
import ProjectCard from '../ProjectCard/ProjectCard';

import './ProjectCardList.css';

export default function ProjectCardList() {

  return (
    <Paper style={{backgroundColor: "#f3f3f3"}}>
      <Typography variant="h5" display="block" style={{ padding: "1rem 2rem", fontSize: "1.5rem"}}>
        Projects
      </Typography>
      <Grid
        container
        spacing={4}
        className="grid-container"
      >
        {
          project_list.map((project, i) => <ProjectCard project={project} key={i} />)
        }
      </Grid>
    </Paper>
  );
}
