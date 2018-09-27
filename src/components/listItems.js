import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ShareIcon from '@material-ui/icons/Share';
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const mainListItems = (
  <div>
    <ListSubheader inset>Integrations & Stats</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <FaTwitterSquare />
      </ListItemIcon>
      <ListItemText primary="TWITTER" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FaInstagram />
      </ListItemIcon>
      <ListItemText primary="INSTAGRAM" />
    </ListItem>
    <ListItem selected button>
      <ListItemIcon>
        <FaFacebookSquare />
      </ListItemIcon>
      <ListItemText primary="FACEBOOK" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FaLinkedin />
      </ListItemIcon>
      <ListItemText primary="LINKEDIN" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
    <div>
      <ListSubheader inset>Sharing</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <ShareIcon />
        </ListItemIcon>
        <ListItemText primary="SHARE TO ALL" />
      </ListItem>
    </div>
  );